/* eslint-disable react/prop-types */
import CountryItem from "./CountryItem";
import Spinner from "./Spinner";
import Message from "./Message";
import styles from "./CountryList.module.css";

function CountryList({ cities, isLoading }) {
  const countriesUnique = new Set(
    cities.map((city) =>
      JSON.stringify({ country: city.country, emoji: city.emoji }),
    ),
  );
  const countries = [...countriesUnique].map((country) => JSON.parse(country));

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message={"Add your first by clicking on country on the map"} />
    );
  return (
    <ul className={styles.countryList}>
      {countries?.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
