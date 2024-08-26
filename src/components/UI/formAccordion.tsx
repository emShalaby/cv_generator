interface IAccordion {
  title?: string;
}
export default function FormAccordion({ title }: IAccordion) {
  return (
    <div>
      <h2 className="text-xl font-bold">{title}</h2>
    </div>
  );
}
