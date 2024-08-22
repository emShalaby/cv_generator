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
      className="bg-white p-4 rounded-lg max-w-[450px] border-solid border-2 border-[#D0D1D5]"
    >
      <h2 className="mb-3 font-bold text-lg">{props.title}</h2>
      {props.children}
    </form>
  );
}
