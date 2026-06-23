interface ColorButtonProps {
  hex: string;
  name: string;
  selected?: boolean;
  onClick?: () => void;
}

function ColorButton({ hex, name, selected, onClick }: ColorButtonProps) {
  return (
    <div className="group relative flex flex-col items-center w-20">
      <div className="absolute bottom-full mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none">
        {name}
      </div>
      <div
        className={`w-10 h-10 rounded-full shadow-inner cursor-pointer ring-offset-2 ${selected ? 'ring-2 ring-black' : ''}`}
        style={{ backgroundColor: hex }}
        onClick={onClick}
      />
      <span className="text-gray-800 mt-0.5">{hex}</span>
    </div>
  );
}

export default ColorButton;
