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
      className="bg-white rounded-lg  border-solid border-2 border-[#D0D1D5] md:p-5 p-2  "
    >
      <h2 className="mb-3 font-bold text-lg">{props.title}</h2>
      {props.children}
    </form>
  );
}
