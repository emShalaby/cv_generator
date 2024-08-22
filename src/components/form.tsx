interface IFormProps {
  title?: string;
  children?: React.ReactNode;
}

export default function Form(props: IFormProps) {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="bg-red-400">
      <h2>{props.title}</h2>
      {props.children}
    </form>
  );
}
