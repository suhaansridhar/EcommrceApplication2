function CardGenerator(props) {
  // const array = props.array;
  console.log(props.array);

  return (
    <div className="card--generator--container">
        {props.array.map((element, index) => {
          return(
            <div className = "card--container" key={index}>
              <img src={element.source} />
              <h4>{element.title}</h4>
              <h4>{element.Price}</h4>
              <h4>{element.Rating}</h4>
            </div>
          )
        })}
    </div>
  )
}

export default CardGenerator
