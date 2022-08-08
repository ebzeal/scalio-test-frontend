
const NavBar:React.FunctionComponent = () => {
  const styles = {
    mainDiv : {
      display: "flex",
      justifyContent: "space-between",
      "flex-wrap": "wrap"
    }
  }
  return (
  <div style={styles.mainDiv}>
    <div><h2>API Frontend</h2></div>
    <div><a href="https://www.linkedin.com/in/ebzeal/">Olusola Ajayi</a></div>
  </div>
  );
}

export default NavBar;