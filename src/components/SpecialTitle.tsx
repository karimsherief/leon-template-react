import { SpecialTitleProps } from "@/types";

export default function SpecialTitle({ title, body }: SpecialTitleProps) {
  return (
    <div className="special-title">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}
