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
      <PrimaryInput placeholder="Название главы" value={chapter?.content} />
      <PrimaryTextarea
        placeholder="Содержание главы"
        value={chapter?.content}
      ></PrimaryTextarea>
      <Button>Сохранить</Button>
    </PageWrapper>
  );
};
