import SingleService from "./SingleService";
import { SERVICES } from "@/constant";
import { SpecialTitle } from "@/components";

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <SpecialTitle title="services" body="Don't be busy, be productive" />
        <div className="services__container">
          <div className="services-group">
            {SERVICES.map((service, index) => (
              <SingleService key={index} {...service} Delay={index * 100} />
            ))}
          </div>
          <div className="service__image">
            <img src="./images/services.jpg" alt="services" />
          </div>
        </div>
      </div>
    </section>
  );
}
