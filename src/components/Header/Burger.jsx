export default function Burger({ atTop, showNav, setShowNav }) {
  const barColor = atTop ? 'bg-white' : 'bg-black';

  return (
    <button onClick={() => setShowNav(!showNav)} className="relative w-8 h-8 flex items-center justify-center">
      <span className={`absolute w-8 h-1 rounded ${barColor} transition-transform duration-300 
        ${showNav ? 'rotate-45' : '-translate-y-2'}`} />
      <span className={`absolute w-8 h-1 rounded ${barColor} transition-opacity duration-300 
        ${showNav ? 'opacity-0' : 'opacity-100'}`} />
      <span className={`absolute w-8 h-1 rounded ${barColor} transition-transform duration-300 
        ${showNav ? '-rotate-45' : 'translate-y-2'}`} />
    </button>
  );
}