interface SidebarElementProps {
  onClick?: () => void;
  book: {
    img: string;
    category: string;
    title: string;
    author: string;
  };
}

export const SidebarElement = ({ book }: SidebarElementProps) => {
  return (
    <a href="" className="flex items-start w-full h-24">
      <img
        src={book.img}
        alt=""
        className="w-2/5 h-full mr-2 object-cover rounded-md lg:w-1/3"
      />
      <div className="flex flex-col items-start w-3/5 gap-y-1 lg:w-2/3">
        <div className="truncate max-w-full text-xs p-1 bg-slate-200 rounded-md">
          {book.category}
        </div>
        <div className="truncate max-w-full text-sm font-bold">
          {book.title}
        </div>
        <div className="truncate max-w-full text-xs">{book.author}</div>
      </div>
    </a>
  );
};
