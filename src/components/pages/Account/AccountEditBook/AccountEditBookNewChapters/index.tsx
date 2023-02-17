import Button from "../../../../ui/button";
import { PageWrapper } from "../../../../ui/page-wrapper";
import { PrimaryInput } from "../../../../ui/primary-input";
import { PrimaryTextarea } from "../../../../ui/primary-textarea";

interface AccountEditBookChapterProps {
  chapter?: {
    title: string;
    content: string;
  };
}

export const AccountEditBookChapter = ({
  chapter,
}: AccountEditBookChapterProps) => {
  return (
    <PageWrapper title="Добавить новую главу" isTop={true}>
      <PrimaryInput
        attributes={{
          placeholder: "Название главы",
          initialValue: chapter?.content || "",
        }}
      />
      <PrimaryTextarea
        attributes={{
          placeholder: "Содержание главы",
          initialValue: chapter?.content || "",
        }}
      ></PrimaryTextarea>
      <Button>Сохранить</Button>
    </PageWrapper>
  );
};
