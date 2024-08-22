interface ITextInput {
  id?: string;
  type?: React.HTMLInputTypeAttribute;
  label?: string;
}
export default function TextInput(props: ITextInput) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input type={props.type} id={props.id}></input>
    </div>
  );
}
