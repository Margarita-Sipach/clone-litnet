import { Wrapper } from "../../ui/wrapper";
import { SecondaryButton } from "../../ui/secodary-button";

import "./gradient.css";

const blog = {
	img: "https://mirpozitiva.ru/wp-content/uploads/2019/11/1472042660_10.jpg",
	author: "wwwwww wwwww",
	date: "20.22.2222",
	title: "kkkkkkkkkk",
	text: "kkkkkkkkk kkkkkk kkkkkkkkkkk kkkkkkkkkk kkkkkkkkkkk kkkkkkkkkkkk kkkkkkkk kkkkkkk kkkkkkkkkkk kkkkkkkkkkk kkkkkkkkkkkk kkkkkkkkk kkkkkkkkkkkkkk kkkkkkkkkkk kkkkkkk k",
	commentCount: 25,
}

export const PersonalHeader = () => {
  return (
		<Wrapper className="bg-indigo-400 h-72 w-full pt-24 sm:pt-24 flex flex-col justify-between gradient mb-10">
			<div className="flex gap-x-5 w-full">
				<img src={blog.img} alt="" className="w-32 h-32 object-cover rounded"/>
				<div className="flex flex-col items-start gap-2">
					<div className="text-white text-lg">{blog.author}</div>
					<SecondaryButton className="">Подписаться</SecondaryButton>
				</div>
			</div>
			<div className="w-full flex gap-x-2">
				<SecondaryButton className="">Книги</SecondaryButton>
				<SecondaryButton className="">Блог</SecondaryButton>
				<SecondaryButton className="">Обо мне</SecondaryButton>
			</div>
		</Wrapper>
  );
};
