import {FunctionComponent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from  'react-loader-spinner'

interface HomeProps {
}


const Home:FunctionComponent<HomeProps> = (props) => {

  const styles = {
    formDiv: {
      width: "50%",
      margin: "20% auto",
      marginTop: "20%",
      display: "flex",
      "flex-direction": "column",
    },
    inputDiv: {
      width: "80%",
      margin: "20px auto",
      height: "50px",
      border: "4px solid #f2f2f2",
      borderRadius: "5px"
    },
    sendButton: {
      width: "40%",
      margin: "20px auto",
      height: "50px",
      border: "1px solid #ccc",
      borderRadius: "5px"
    },
    errorMessage:{
      color: "#ed1717",
      margin: "0px auto"
    },
    loader: {
      margin: "0px auto"
    }
  }

  const [error, setError] = useState<boolean>();
  const [numVal, setNumVal] = useState<number>();
  const [loading, setLoading] = useState<boolean>();

  const onChangeHandle = (e:any): void =>{
      setError(false)
      setNumVal(e.target.value);
  }

  let navigate = useNavigate();
  const handleSubmit = async (e: any): Promise<void> => {
    setLoading(true)
    e.preventDefault();
      fetch(`https://olusola-ajayi-api.herokuapp.com/posts/${numVal}`)
    .then(response=>response.json())
    .then((data)=> {
      if(!data?.title || !data?.id){
      setLoading(false);
      return setError(true)
      }
      setLoading(false);
      return navigate(`posts/${numVal}`, {state:data})})
    .catch(err => console.error(err));
  };


return (
<div>
    <form style={styles.formDiv} onSubmit={handleSubmit}>
      {error && <p style={styles.errorMessage}>This id has no details. Please try another number</p>}
      <input type="number" id="num" name="itemNumber" style={styles.inputDiv} onChange={onChangeHandle} required/>
     
     {loading ? 
       <div style={styles.loader}>
       <ThreeDots 
             height="80" 
             width="80" 
             radius="9"
             color="#4fa94d" 
             ariaLabel="three-dots-loading"
             wrapperStyle={{}}
             visible={true}
         />
     </div>
      :
     <input type="submit" value="Send"  style={styles.sendButton}/>
}
    </form>
  </div>
  )

}

export default Home;