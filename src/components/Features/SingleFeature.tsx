import { SingleFeatureProps } from "@/types";

export default function SingleFeature({
  Icon,
  Title,
  Body,
  Delay,
}: SingleFeatureProps) {
  return (
    <div className="feature" data-aos="zoom-in" data-aos-delay={Delay}>
      <div className="feature__icon">
        <Icon />
      </div>
      <h4 className="feature__title">{Title}</h4>
      <p className="feature__body">{Body}</p>
    </div>
  );
}
