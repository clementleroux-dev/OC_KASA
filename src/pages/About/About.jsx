import Data from "../../data/about.json";
import Collapse from "../../components/Collapse/Collapse.component";
import "../../components/Banner/Banner.scss";
import "./About.scss";
import Banner from "../../components/Banner/Banner.component";

const About = () => {
  return (
    <main>
      <Banner page="about" text="" />
      <section className="collapse-about__container">
        {Data.map((data) => {
          return (
            <Collapse key={data.id} title={data.title}>
              {data.body}
            </Collapse>
          );
        })}
      </section>
    </main>
  );
};

export default About;
