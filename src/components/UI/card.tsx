interface ICard {
  title?: string;
  children?: React.ReactNode;
}
export default function Card({ title, children }: ICard) {
  return (
    <div className="flex flex-col rounded-lg border-2 border-solid border-gray-300 bg-white">
      <h2 className="p-2 text-xl font-bold text-black md:p-5">{title}</h2>
      {children}
    </div>
  );
}
