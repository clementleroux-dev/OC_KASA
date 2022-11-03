import Data from "../data/logements.json";
import { useParams, Navigate } from "react-router-dom";
import Carousel from "../components/Carousel/Carousel.component";
import AcommodationContent from "../components/AcommodationContent/AcommodationContent.component";
import Collapse from "../components/Collapse/Collapse.component";

function Accommodation() {
  //use ID in URL
  const { id } = useParams();
  // Find data corresponding with ID
  const accommodation = Data.find((el) => el.id === id);
  //return errorpage if no correponding with existing ID
  if (!accommodation) return <Navigate to="/404" />;

  return (
    <main>
      <Carousel pictures={accommodation.pictures} />
      <AcommodationContent data={Data} />
      <section className="collapse-accomodation__container">
        <Collapse title="Description">{accommodation.description}</Collapse>
        <Collapse title="Équipements">
          {accommodation.equipments.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </Collapse>
      </section>
    </main>
  );
}

export default Accommodation;
