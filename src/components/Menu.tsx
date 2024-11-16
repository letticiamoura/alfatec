interface IMenuProps {
    onClick: () => void;
}

export default function Menu({ onClick }: IMenuProps) {
    return (
        <div 
            className="flex flex-col gap-1 cursor-pointer md:hidden transform transition duration-300 ease-in-out" 
            onClick={onClick}
        >
            <div className="bg-white h-1.5 w-11 rounded-full transform transition-transform duration-300 ease-in-out hover:scale-x-110"></div>
            <div className="bg-white h-1.5 w-9 rounded-full transform transition-transform duration-300 ease-in-out hover:scale-x-110"></div>
            <div className="bg-white h-1.5 w-10 rounded-full transform transition-transform duration-300 ease-in-out hover:scale-x-110"></div>
        </div>
    );
}
