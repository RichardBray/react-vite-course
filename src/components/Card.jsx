<<<<<<< Updated upstream
function Card() {
    return (
        <div>
            <h1>Title</h1>
            <p>Description</p>
=======
function Card({title = "Default title", description= "Desc", children}) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <div>{children}</div>
>>>>>>> Stashed changes
        </div>
    )
}

export default Card;