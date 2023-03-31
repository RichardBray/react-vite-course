
function Card({title = "Default title", description= "Desc", children}) {
    function handleClick() {
        alert(double(2));
    }

    function double(number) {
        let extraNumber = 0;
        extraNumber++;
        const result = number * 2 + extraNumber;
        return result;
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