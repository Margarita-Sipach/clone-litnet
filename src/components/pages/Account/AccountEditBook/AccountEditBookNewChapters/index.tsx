import Button from "../../../../ui/button";
import { PageWrapper } from "../../../../ui/page-wrapper";
import { PrimaryInput } from "../../../../ui/primary-input";
import { PrimaryTextarea } from "../../../../ui/primary-textarea";

interface AccountEditBookchapterProps {
  chapter?: {
    title: string;
    content: string;
  };
}

export const AccountEditBookChapter = ({
  chapter,
}: AccountEditBookchapterProps) => {
  return (
    <PageWrapper title="Добавить новую главу" isTop={true}>
      <PrimaryInput
        attributes={{
          placeholder: "Название главы",
          value: chapter?.content || "",
        }}
      />
      <PrimaryTextarea
        attributes={{
          placeholder: "Содержание главы",
          value: chapter?.content || "",
        }}
      ></PrimaryTextarea>
      <Button>Сохранить</Button>
    </PageWrapper>
  );
};
