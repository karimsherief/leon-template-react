import Project from "./Project";
import { PORTFOLIO } from "@/constant";
import { SpecialTitle } from "@/components";

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <SpecialTitle
          title="Portfolio"
          body="If you do it right, it will last forever."
        />
        <div className="projects-group">
          {PORTFOLIO.map((project, index) => (
            <Project key={index} {...project} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
