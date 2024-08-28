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
    <div className="flex min-h-[150px] flex-1 flex-col place-items-center justify-center bg-[#0E374E] p-3">
      <h1 className="mb-3 text-3xl font-bold text-white">{name}</h1>
      <div className="flex flex-wrap gap-5 text-lg  font-semibold text-white  justify-center">
        <p className="whitespace-nowrap">{email}</p>
        <p className="whitespace-nowrap"> {phone}</p>
        <p className="whitespace-nowrap">{address}</p>
      </div>
    </div>
  );
}
