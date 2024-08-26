import styles from './Feedback.module.css'

const Feedback = ({good, neutral, bad}) => { 
    return (
        <ul>
            <li className={styles.item}>Good: {good}</li>
            <li className={styles.item}>Neutral: {neutral}</li> 
            <li className={styles.item}>Bad: {bad}</li>
        </ul>
    );
}
 
export default Feedback;