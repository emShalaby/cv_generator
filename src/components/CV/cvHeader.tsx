interface IHeaderProps {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
}
export default function CvHeader(props: IHeaderProps) {
  return (
    <div className="bg-[#0E374E] flex flex-col min-h-[150px] flex-1 justify-center place-items-center">
      <h1 className="text-3xl font-bold text-white mb-3">{props.name}</h1>
      <div className="flex gap-3 text-white font-semibold text-lg">
        <p className="">{props.email}</p>
        <p className=""> {props.phone}</p>
        <p className="">{props.address}</p>
      </div>
    </div>
  );
}
