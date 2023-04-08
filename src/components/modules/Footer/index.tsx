import { Wrapper } from "../../ui/wrappers/Wrapper";

export const Footer = () => {
  return (
    <footer className="mt-10 flex h-16 w-full justify-center bg-indigo-400">
      <Wrapper className="flex items-center justify-between">
        <div className="flex w-1/3 gap-2 lg:gap-4"></div>
        <div className="w-1/3 text-center text-base text-white sm:text-xl lg:text-2xl">
          2023, Created with love &#9825;
        </div>
        <div className="flex w-1/3 justify-end"></div>
      </Wrapper>
    </footer>
  );
};
