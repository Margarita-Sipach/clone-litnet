import { ChangeEvent, useState } from "react";
import avatar from "../../../common/assets/images/avatar.png";

interface FileInputProps {
  className: string;
  onChange?: (e?: ChangeEvent<HTMLInputElement>) => void;
  defaultImage?: React.ReactNode;
}

export const FileInput = ({
  className,
  onChange,
  defaultImage,
}: FileInputProps) => {
  const [preview, setPreview] = useState(defaultImage || avatar);

  const onLoadFile = (e?: ChangeEvent<HTMLInputElement>) => {
    const files = (e?.target as HTMLInputElement)?.files;
    if (files) {
      const objectUrl = URL.createObjectURL(files[0]);
      setPreview(objectUrl);
    }
    if (onChange) onChange(e);
  };

  return (
    <div className="relative flex">
      <img
        src={preview}
        alt="avatar"
        className={`${className} rounded border-2 border-zinc-200 object-cover`}
      />
      <input
        required
        type="file"
        onChange={onLoadFile}
        className={`absolute top-0 left-0 flex cursor-pointer opacity-0 ${className}`}
      />
    </div>
  );
};
