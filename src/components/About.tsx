import { SpecialTitle } from "@/components";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <SpecialTitle title="about" body="Less is more work" />
        <div className="about__container">
          <div className="about__image">
            <img src="./images/about.jpg" alt="about" />
          </div>
          <div className="about-group">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              nemo neque voluptate tempora velit cum non, fuga vitae architecto
              delectus sed maxime rerum impedit aliquam obcaecati, aut excepturi
              iusto laudantium!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              sapiente. Velit iure exercitationem dolores nesciunt dolore. Eum
              officiis dolorum hic voluptate quaerat minima, similique inventore
              esse, alias, sed quo officia?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
