
const Car =  ({children, color}) => {
  // const colorInfo = color ? <p>Couleur: {color}</p> : <p>Couleur: "Néant"</p>;

  return children ? (

    <div class="Car">
      <h3> Car.jsx</h3> 
      
      <p> Marque: {children} </p>
      {/* <p>{colorInfo}</p> */}
      {color ? <p>Couleur: {color}</p> : <p>Couleur: "Néant"</p>}
    </div>
  ) 
  
  : 
  
  <p> Pas de data children</p>;
}

export default Car 