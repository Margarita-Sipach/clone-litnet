import { Date } from "../Date";
import { handleImageError } from "../../../utils/utils";

interface AvatarProps {
  image?: string;
  name: string;
  date: string;
}

export const Avatar = ({ image, name, date }: AvatarProps) => {
  return (
    <div className="flex items-center gap-3">
      <img
        src={image}
        alt=""
        className="h-8 w-8 rounded-sm object-cover sm:h-10 sm:w-10"
        onError={handleImageError}
      />
      <div className="text-sm">{name}</div>
      <Date date={date} />
    </div>
  );
};
