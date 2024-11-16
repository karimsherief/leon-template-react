import { SingleServiceProps } from "@/types";

export default function SingleService({
  Icon,
  Title,
  Body,
  Delay,
}: SingleServiceProps) {
  return (
    <div className="single-service" data-aos="zoom-in" data-aos-delay={Delay}>
      <div className="single-service__icon">
        <Icon />
      </div>
      <article className="single-service__article">
        <h4 className="single-service__title">{Title}</h4>
        <p className="single-service__body">{Body}</p>
      </article>
    </div>
  );
}
