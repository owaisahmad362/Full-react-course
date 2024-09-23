import styles from "./Foodinput.module.css";

const Foodinput = ({ handleKeyDown }) => {

    return (
    <input type="text" placeholder="Enter Food Item Here" className={styles.foodInput} 
    onKeyDown={handleKeyDown}

    />
  );
}

export default Foodinput;