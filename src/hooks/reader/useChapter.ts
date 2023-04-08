import { useState, useEffect } from "react";
import { ChapterType } from "../../types/types";
import { API } from "../../api/api";

export const useChapter = (id: number) => {
  const [chapter, setChapter] = useState<Required<ChapterType>>();

  const chapterSetter = async (id: number) => {
    const response = await API.getChapterById(`${id}`);
    setChapter(response);
  };

  useEffect(() => {
    chapterSetter(id);
  }, [id]);
  
  return chapter;
};
