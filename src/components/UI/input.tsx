interface IInput {
  id?: string;
  type?: React.HTMLInputTypeAttribute;
  label?: string;
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
export default function Input(props: IInput) {
  return (
    <div className="flex flex-col gap-2 font-semibold mb-1">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        className={`bg-[#EFF0F3] rounded-md px-2 text-sm py-1 flex ${props.className || ""}`}
        onChange={props.onChange}
      ></input>
    </div>
  );
}
