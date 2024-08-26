import Button from '../Button/Button';
import styles from './Options.module.css'

const Options = ({options, handleClick}) => { 

    const titles = Object.keys(options);

    return (
       
        <div> {titles.map(item => <Button onClick={() => {handleClick(item)}} key={item} text={item}/>)}</div>        
        
    );
}
 
export default Options;