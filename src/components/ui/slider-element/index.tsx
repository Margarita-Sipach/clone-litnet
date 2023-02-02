interface SliderElementProps {
  onClick?: () => void;
  book: {
    img: string;
    category: string;
    title: string;
    author: string;
  };
}

export const SliderElement = ({ book }: SliderElementProps) => {
  return (
    <a href="" className="flex flex-col items-start w-40">
      <img
        src={book.img}
        alt=""
        className="h-60 w-full mb-3 object-cover rounded-md"
      />
      <div className="truncate max-w-full text-sm p-1 bg-slate-200 rounded-md mb-1">
        {book.category}
      </div>
      <div className="truncate max-w-full text-base font-bold mb-1">
        {book.title}
      </div>
      <div className="truncate max-w-full text-sm">{book.author}</div>
    </a>
  );
};
