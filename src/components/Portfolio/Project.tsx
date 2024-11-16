import { ProjectProps } from "@/types";

export default function Project({ image, title, body, delay }: ProjectProps) {
  return (
    <div className="project" data-aos="fade-up" data-aos-delay={delay}>
      <img src={image} alt={title} className="project__image" />
      <article className="project__content">
        <h4>{title}</h4>
        <p>{body}</p>
      </article>
    </div>
  );
}
