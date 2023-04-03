function Card({ title = 'Default title', description = 'Desc' }) {
  function handleClick() {
    alert('Test');
  }

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <button onClick={handleClick}>View</button>
    </div>
  );
}

export default Card;
