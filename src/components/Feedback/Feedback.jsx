import styles from './Feedback.module.css'

const Feedback = ({good, neutral, bad, totalFeedback, totalPositive}) => { 
    return (
        <ul>
            <li className={styles.item}>Good: {good}</li>
            <li className={styles.item}>Neutral: {neutral}</li> 
            <li className={styles.item}>Bad: {bad}</li>
            <li className={styles.item}>Total: {totalFeedback}</li>
            <li className={styles.item}>Positive: {totalPositive}%</li>
        </ul>
    );
}
 
export default Feedback;