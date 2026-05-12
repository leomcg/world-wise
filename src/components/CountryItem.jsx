import { emojiToPNG } from "../contexts/CitiesProvider";
import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <img src={emojiToPNG(country.emoji)} alt="" />
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
