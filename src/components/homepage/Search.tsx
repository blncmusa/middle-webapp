export default function Search() {
  return (
    <div className="flex w-full bg-green-500 justify-center items-center">
        <div className="flex flex-col gap-2 w-[80%]">
            <input type="text" placeholder="Search" className="px-4 py-2 rounded-full" />
        </div>
    </div>
  );
}