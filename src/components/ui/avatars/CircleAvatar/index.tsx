import { API } from "../../../../api/api";
import avatar from "../../../../common/assets/images/avatar.png";

interface CircleAvatarProps {
  image?: string;
}

export const CircleUserAvatar = ({ image }: CircleAvatarProps) => {
  const picture = API.getImage(`/${image}` || "");

  return (
    <div className=" flex h-10 w-10 justify-center rounded-full bg-slate-500 align-middle">
      <img
        src={picture}
        alt=""
        className="rounded-full"
        onError={(e) => ((e.target as HTMLImageElement).src = avatar)}
      />
    </div>
  );
};
