export default function Button(props: {
  title?: string;
  className?: string;
  id?: string;
  onclick?: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button className={props.className} id={props.id} onClick={props.onclick}>
      {props.title}
    </button>
  );
}
