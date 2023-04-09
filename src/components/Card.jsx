import styles from './Card.module.css';

function Card({ video }) {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{video.title}</h1>
      <p className={styles.desc}>{video.description}</p>
      <button className={styles.view}>View</button>
    </div>
  );
}

export default Card;
