import { BookElement } from "../../ui/book-element";
import { PageWrapper } from "../../ui/page-wrapper";

export const PersonalBook = () => {
  return (
    <PageWrapper title="Книги">
			
			{/* <SidebarElement book={{img: "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg", category: "fantastyc", title: "wwwwwwwwwww", author: "wwwwwww wwwwww"}}></SidebarElement> */}
			<BookElement book={{img: "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg", category: "fantastyc", title: "wwwwwwwwwww", author: "wwwwwww wwwwww", annotation: "ddddddddd dddddddddddddd ddddddddddddddddd dddddddddddddddddddddd ddddddddddddddddddddddddddd ddddddddddddddddddddddd dddddddddddddddddddddddd ddddddddddd", rating: 5}}></BookElement>
		</PageWrapper>	
  );
};
