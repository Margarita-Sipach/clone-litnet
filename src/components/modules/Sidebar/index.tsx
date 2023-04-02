import { useMemo } from "react";
import { useFetchBooks } from "../../../hooks";
import { getBooksByReadings } from "../../../utils/utils";
import { SidebarElement } from "../elements/SidebarElement";
import { ElementWrapper } from "../../ui/wrappers/ElementWrapper";

export interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const { books } = useFetchBooks();
  const booksByReadings = useMemo(
    () => (books ? getBooksByReadings(books, 5) : []),
    [books]
  );
  return books ? (
    <ElementWrapper
      className={`ml-5 hidden max-h-full self-start sm:hidden md:flex md:w-60 md:flex-col md:gap-y-6 lg:flex lg:w-full ${className}`}
    >
      <h2 className=" text-xl">Литнет рекомендует</h2>
      {booksByReadings.map((book, index) => (
        <SidebarElement key={index} book={book} />
      ))}
    </ElementWrapper>
  ) : (
    <h1>Loading...</h1>
  );
};
