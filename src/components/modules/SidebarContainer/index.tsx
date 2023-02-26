import { useMemo } from "react";
import { useFetchBooks } from "../../../hooks";
import { getBooksByReadings } from "../../../utils/utils";
import { SidebarElement } from "../../ui/SidebarElement";
import { Sidebar } from "../Sidebar";

export interface SidebarContainerProps {
  className?: string;
}

export const SidebarContainer = ({ className }: SidebarContainerProps) => {
  const { books } = useFetchBooks();
  const booksByReadings = useMemo(
    () => (books ? getBooksByReadings(books, 5) : []),
    [books]
  );
  return books ? (
    <Sidebar className={className || ""}>
      {booksByReadings.map((book, index) => (
        <SidebarElement key={index} book={book}></SidebarElement>
      ))}
    </Sidebar>
  ) : (
    <h1>Loading...</h1>
  );
};
