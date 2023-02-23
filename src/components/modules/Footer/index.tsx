import { ImGithub } from "react-icons/im";
import { ReactComponent as School } from "../../../common/assets/icons/rs_school.svg";
import { Wrapper } from "../../ui/Wrapper";

const GITS = ["lordofthevillage", "margarita-sipach", "cerealexperiments"];

export const Footer = () => {
  return (
    <footer className="mt-10 flex h-16 w-full justify-center bg-indigo-400">
      <Wrapper className="flex items-center justify-between">
        <div className="flex w-1/3 gap-2 lg:gap-4">
          {GITS.map((item) => (
            <a href={`https://github.com/${item}`} key={item}>
              <ImGithub className="text-base text-white hover:text-indigo-500 sm:text-xl lg:text-3xl" />
            </a>
          ))}
        </div>
        <div className="w-1/3 text-center text-base text-white sm:text-xl lg:text-3xl">
          2023
        </div>
        <a href="https://rs.school/" className="flex w-1/3 justify-end">
          <School className="h-6 fill-white hover:fill-indigo-500 sm:h-8 lg:h-10" />
        </a>
      </Wrapper>
    </footer>
  );
};
