import { ChangeEvent } from "react";
import { PrimaryInput } from "../primary-input";

interface FileInputProps {
  attributes?: {
    type?: string;
    placeholder?: string;
    required?: boolean;
  };
  onChangeImage: (url: string) => void;
}

export const FileInput = ({ attributes, onChangeImage }: FileInputProps) => {

	const onLoadFile = (e?: ChangeEvent<HTMLInputElement>) => {
    const file = (e?.target as HTMLInputElement)?.files;
    if (file) {
      const objectUrl = URL.createObjectURL(file[0]);
      onChangeImage(objectUrl);
    }
  };

  return (
    <PrimaryInput
        attributes={{ placeholder: "Аватарка", required: true, type: "file" }}
        onChange={onLoadFile}
      />
  );
};
