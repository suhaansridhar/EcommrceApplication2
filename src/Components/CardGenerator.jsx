function CardGenerator(props) {
  // const array = props.array;
  console.log(props.array);

  return (
    <div className="card--generator--container">
        {props.array.map((element, index) => {
          return(
            <div className = "card--container" key={index}>
              <img src={props.array.source} />
              <h4>{props.array.title}</h4>
              <h4>{props.array.price}</h4>
              <h4>{props.array.rating}</h4>
            </div>
          )
        })}
    </div>
  )
}

export default CardGenerator
