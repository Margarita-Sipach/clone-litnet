import { ImGithub } from "react-icons/im";
import { ReactComponent as School } from "../../../common/assets/icons/rs_school.svg";
import { Wrapper } from "../../ui/wrapper";

const gits = ["lordofthevillage", "margarita-sipach", "cerealexperiments"];

interface FooterProps {}

export const Footer = ({}: FooterProps) => {
  return (
    <footer className="flex justify-center w-full bg-indigo-400 h-16 mt-10">
      <Wrapper className="flex justify-between items-center">
        <div className="flex gap-2 w-1/3 lg:gap-4">
          {gits.map((item) => (
            <a href={`https://github.com/${item}`} key={item}>
              <ImGithub className="text-white hover:text-indigo-500 text-base sm:text-xl lg:text-3xl" />
            </a>
          ))}
        </div>
        <div className="w-1/3 text-base text-center text-white sm:text-xl lg:text-3xl">
          2023
        </div>
        <a href="https://rs.school/" className="w-1/3 flex justify-end">
          <School className="h-6 fill-white hover:fill-indigo-500 sm:h-8 lg:h-10" />
        </a>
      </Wrapper>
    </footer>
  );
};
