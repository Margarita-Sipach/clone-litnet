import { ReactNode } from "react";
import { Sidebar } from "../../modules/sidebar";
import { SidebarElement } from "../sidebar-element";

interface PageWrapperProps {
  title?: string;
  children: ReactNode;
  className?: string;
  isTop?: boolean;
  isThereSidebar?: boolean;
}

export const PageWrapper = ({
  title,
  children,
  className,
  isTop,
  isThereSidebar = true,
}: PageWrapperProps) => {
  return (
    <div className={`${isTop ? "mt-28" : "mt-0"} w-full ${className}`}>
      <h1 className="text-3xl mb-9">{title}</h1>
      <div className="flex items-start gap-x-5">
        <div className="w-full w-full flex flex-col justify-between gap-y-6">
          {children}
        </div>
        {isThereSidebar ? (
          <Sidebar>
            {new Array(2).fill("").map((item, index) => (
              <SidebarElement
                key={index}
                book={{
                  img: "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg",
                  category: "fantastyc",
                  title: "wwwwwwwwwww",
                  author: "wwwwwww wwwwww",
                }}
              ></SidebarElement>
            ))}
          </Sidebar>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
