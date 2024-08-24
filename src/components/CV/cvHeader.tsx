interface IHeaderProps {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
}
export default function CvHeader({
  name,
  email,
  phone,
  address,
}: IHeaderProps) {
  return (
    <div className="bg-[#0E374E] flex flex-col min-h-[150px] flex-1 justify-center place-items-center">
      <h1 className="text-3xl font-bold text-white mb-3">{name}</h1>
      <div className="flex gap-3 text-white font-semibold text-lg">
        <p className="">{email}</p>
        <p className=""> {phone}</p>
        <p className="">{address}</p>
      </div>
    </div>
  );
}
