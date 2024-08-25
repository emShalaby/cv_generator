interface IFormProps {
  title?: string;
  children?: React.ReactNode;
  id?: string;
}

export default function Form(props: IFormProps) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      id={props.id}
      className="rounded-lg border-2 border-solid border-[#D0D1D5] bg-white p-2 md:p-5"
    >
      <h2 className="mb-3 text-lg font-bold">{props.title}</h2>
      {props.children}
    </form>
  );
}
