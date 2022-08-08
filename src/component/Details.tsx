import {FunctionComponent} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

interface DetailsProps {
}


const Details:FunctionComponent<DetailsProps> = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const styles = {
    cardDiv: {
      width: "50%",
      margin: "18% auto",
      marginTop: "18%",
      display: "flex",
      "flex-direction": "column",
    },
    spanDiv: {
      fontStyle: "italic",
      fontWeight: "bold"
    },
    backButton: {
      width: "40%",
      margin: "20px auto",
      height: "50px",
      border: "1px solid #ccc",
      borderRadius: "5px"
    },

  }

  const {state} = location as any;

return (
  <div style={styles.cardDiv}>
    <p><span style={styles.spanDiv}>ID:</span> {state?.id}</p>
    <p><span style={styles.spanDiv}>User Id:</span> {state?.userId}</p>
    <p><span style={styles.spanDiv}>Title:</span> {state?.title}</p>
    <p><span style={styles.spanDiv}>Body:</span> {state?.body}</p>

    <button style={styles.backButton} onClick={()=>navigate(-1)}> Back to Home</button>
  </div>
  )

}

export default Details;