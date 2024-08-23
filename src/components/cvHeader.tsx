interface IHeaderProps {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
}
export default function CvHeader(props: IHeaderProps) {
  return (
    <div className="bg-[#0E374E] flex flex-col min-h-[150px] flex-1">
      <h1 className="text-xl text-white">{props.name}</h1>
      <div className="flex gap-3">
        <p className="text-white">{props.email}</p>
        <p className="text-white"> {props.phone}</p>
        <p className="text-white">{props.address}</p>
      </div>
    </div>
  );
}
