import SingleFeature from "./SingleFeature";
import { FEAUTRES } from "@/constant";

export default function Features() {
  return (
    <section className="features">
      <div className="features__container container">
        {FEAUTRES.map((feature, index) => (
          <SingleFeature {...feature} key={index} Delay={index * 100} />
        ))}
      </div>
    </section>
  );
}
