interface IFormProps {
  children?: React.ReactNode;
  id?: string;
}

export default function Form(props: IFormProps) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      id={props.id}
      className="bg-white p-2 md:p-5"
    >
      {props.children}
    </form>
  );
}
