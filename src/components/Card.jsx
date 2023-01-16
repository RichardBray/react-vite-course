function Card({title = "Default title", description= "Desc"}) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default Card;