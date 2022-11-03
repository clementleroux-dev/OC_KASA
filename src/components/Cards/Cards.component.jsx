import Data from "../../data/logements.json";
import { Link } from "react-router-dom";
import "./Cards.scss";

const Cards = () => {
  return (
    <section className="home-cards__container">
      {Data.map((el) => {
        return (
          <Link
            className="home-cards__card"
            to={`/accommodation/${el.id}`}
            key={el.id}
          >
            <img src={el.cover} alt={el.title} />
            <p className="home-cards__title">{el.title}</p>
          </Link>
        );
      })}
    </section>
  );
};

export default Cards;
