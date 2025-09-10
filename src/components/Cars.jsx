import Wrapper from './Wrapper.jsx'

const Car =  ({children, color}) => {
  // const colorInfo = color ? <p>Couleur: {color}</p> : <p>Couleur: "Néant"</p>;

    // return children ? ( pour le cas d'un return en ternaire
    return children && (

    <Wrapper>
      <h3> Car.jsx</h3> 
      
      <p> Marque: {children} </p>
      {/* <p>{colorInfo}</p> */}
      {color ? <p>Couleur: {color}</p> : <p>Couleur: "<span style= {{color:"red"}}>Néant</span>"</p>}
    </Wrapper>
  ) 

  // :

  // <p>Couleur: "<span style= {{color:"red"}}; pour le cas d'un return en ternaire avec les

  ||
  (<p className="Car"> Pas de data children</p>)
 
}

export default Car 