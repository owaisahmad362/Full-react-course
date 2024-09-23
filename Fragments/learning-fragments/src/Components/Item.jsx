import styles from "./Item.module.css";

const Item = ({ foodItem, bought, handleBuyButton }) => {

    const handleBuyButtonClicked = (event) => {
        console.log(event)
        console.log(`${foodItem} bieng bought.`)
    }

    return (
        <li className={`${styles["kg-item"]} list-group-item ${bought && "active"}`}>
       <span className={styles["kg-span"]}>{foodItem}</span>
       <button className={`${styles.button} btn btn-success`}
       onClick={handleBuyButton}

       
       >Buy</button>
        </li>
    );

}

export default Item;