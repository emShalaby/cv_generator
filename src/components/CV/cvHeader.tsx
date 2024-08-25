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
    <div className="flex min-h-[150px] flex-1 flex-col place-items-center justify-center bg-[#0E374E]">
      <h1 className="mb-3 text-3xl font-bold text-white">{name}</h1>
      <div className="flex gap-3 text-lg font-semibold text-white">
        <p className="">{email}</p>
        <p className=""> {phone}</p>
        <p className="">{address}</p>
      </div>
    </div>
  );
}
