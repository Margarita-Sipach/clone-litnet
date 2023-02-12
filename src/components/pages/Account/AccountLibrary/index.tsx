import React from "react";
import { BooksPage } from "../../books";
import { books } from "../../../../common/data";

const AccountLibrary = () => {
  return (
		<BooksPage title="Моя библиотека" books={books}/>
	)
};

export default AccountLibrary;
