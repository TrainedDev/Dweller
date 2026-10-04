import Properties from "../../Components/Properties";
import { properties, services } from "../../Constants";
import Hero from "./Hero";
import Experience from "./Experience";
import Clients from "./Clients";
const Home = () => {
  return (
    <>
      <Hero />
      <Properties
        title="
          personal support for buying, selling, and investing
      "
        description="  we provide clear guidance, real data, and personalized support to help
          you make confident real estate choice"
        btn={["view all services"]}
        serviceList={services}
      />
      <Properties
        title="
          explore our featured properties.
      "
        description="  carefully selected residences offering style, value and strong future appreciation"
        btn={["1br", "2br", "3br"]}
        propertiesList={properties}
      />
      <Experience />
      <Clients />
    </>
  );
};

export default Home;
