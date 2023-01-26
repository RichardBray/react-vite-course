function Card({title = "Default title", description= "Desc", children}) {
    function handleClick() {
        alert("button clicked");
    }
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <div>{children}</div>
            <button onClick={handleClick}>View</button>
        </div>
    )
}

export default Card;