import { Date } from "../Date";
import { handleImageError } from "../../../utils/utils";
import { Status } from "../Status";

interface AvatarProps {
  header: string[];
  data: any;
  type: string;
}

export const Table = ({ data, header, type }: AvatarProps) => {
  return (
    <table className="border-state-300 w-full table-auto border-collapse border-spacing-2 border text-xl">
      <thead>
        <tr className="">
          {header.map((item) => (
            <th className="border border-slate-300 py-2">{item}</th>
          ))}
        </tr>
      </thead>
      <tbody className="">
        {data.map((item: any) => (
          <tr className="border border-slate-300">
            <td className="max-w-lg border border-slate-300 p-5">
              {(() => {
                switch (type) {
                  case "user":
                    return (
                      <div className="flex text-lg">
                        <img
                          className="mr-5 h-32 w-32 object-cover"
                          src={item.img}
                          alt=""
                        />
                        <div className="flex flex-col gap-y-2">
                          <div>{item.name}</div>
                          <div>{item.email}</div>
                          <div className="line-clamp-2">{item.about}</div>
                        </div>
                      </div>
                    );
                  case "book":
                    return (
                      <div className="flex text-lg">
                        <img
                          className="mr-5 h-48 w-36 object-cover"
                          src={item.img}
                          alt=""
                        />
                        <div className="flex flex-col gap-y-2">
                          <div>{item.name}</div>
                          <div>{item.author}</div>
                          <div className="flex gap-x-3">
                            {item.genres.map((item: string) => (
                              <div
                                key={item}
                                className="truncate rounded-md bg-gray-100 py-1 px-2 text-xs "
                              >
                                {item}
                              </div>
                            ))}
                          </div>
                          <div className="line-clamp-3">{item.about}</div>
                        </div>
                      </div>
                    );
                  case "contest":
                    return (
                      <div className="flex text-lg">
                        <img
                          className="mr-5 h-64 w-44 object-cover"
                          src={item.img}
                          alt=""
                        />
                        <div className="flex flex-col gap-y-2">
                          <div>{item.title}</div>
                          <div>до {item.date}</div>
                          <div className="flex gap-x-3">
                            {item.genres.map((item: string) => (
                              <div
                                key={item}
                                className="truncate rounded-md bg-gray-100 py-1 px-2 text-xs "
                              >
                                {item}
                              </div>
                            ))}
                          </div>
                          <div>Приз: {item.prize}</div>
                          <div>Символы: {item.simbols}</div>
                          <div className="line-clamp-3">{item.about}</div>
                        </div>
                      </div>
                    );
                  case "blog":
                    return (
                      <div className="flex flex-col gap-y-2 text-lg">
                        <div className="font-bold">{item.title}</div>
                        <div className="line-clamp-5">{item.content}</div>
                      </div>
                    );
                  default:
                    return null;
                }
              })()}
            </td>
            <td className="border border-slate-300 p-5 text-xl">
              <Status defaultOption={item.status} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
