import { useParams } from "react-router-dom";
import { VscStarFull } from "react-icons/vsc";
import "./AcommodationContent.scss";

const AccommodationContent = ({ data }) => {
  //use ID in URL
  const { id } = useParams();
  // Find data corresponding with ID
  const accommodation = data.find((item) => item.id === id);
  const rateColor = {
    red: "#ff6060",
    grey: "#E3E3E3",
  };

  const rate = [0, 0, 0, 0, 0];

  return (
    <section className="lodge__container">
      <div className="lodge__body">
        <h2 className="lodge__body__title">{accommodation.title}</h2>
        <p className="lodge__body__localisation">{accommodation.location}</p>
        <div className="lodge__body__tags">
          {accommodation.tags.map((tag) => (
            <div key={tag}>{tag}</div>
          ))}
        </div>
      </div>

      <div className="host__container">
        <div className="host-profil">
          <span className="host-profil__name">{accommodation.host.name}</span>
          <img
            className="host-profil__img"
            alt={`Portrait ${accommodation.host.name} `}
            src={accommodation.host.picture}
          />
        </div>
        <div className="host-rating">
          {rate.map((_, i) => (
            <VscStarFull
              key={`stars ${i}`}
              className="host-rating__stars"
              color={accommodation.rating > i ? rateColor.red : rateColor.grey}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccommodationContent;
