export default function Card(props) {
  return (
    <li className="list-none w-56 rounded-sm border border-zinc-300 bg-pink-300 p-4 text-center shadow-md transition-shadow duration-200 hover:shadow-lg">
      <div className="mx-auto mb-4 h-40 w-40 overflow-hidden bg-zinc-200">
        <img
          src={props.src}
          alt={props.name}
          className="h-full w-full object-contain object-center object-cover"
        />
      </div>

      <h3 className="text-3xl font-bold leading-tight text-zinc-900">{props.name}</h3>
      <p className="mt-1 text-1xl font-medium italic leading-relaxed text-zinc-700">{props.desc}</p>
    </li>
  );
}
