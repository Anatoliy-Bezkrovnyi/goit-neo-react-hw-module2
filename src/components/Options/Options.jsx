import Button from '../Button/Button';
import styles from './Options.module.css'

const Options = ({options, handleClick, handleReset, totalFeedback}) => { 

    const titles = Object.keys(options);

    return (
       
        <div className={styles.container}>
            {titles.map(item => <Button onClick={() => { handleClick(item) }} key={item} text={item} />)}  
            {!!totalFeedback && <Button text="Reset" onClick={handleReset} />}
        </div>        
        
    );
}
 
export default Options;