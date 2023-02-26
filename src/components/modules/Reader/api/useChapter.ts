import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import axios from "axios";
import { ChapterType } from "../../../../types/types";
import { baseUrl } from "../../../../utils/utils";

const fetchChapter = async (id: number) => {
  try {
    const response = await axios.get(`${baseUrl}/chapters/${id}`);
    if (response.status === 200) {
      const data: Required<ChapterType> = response.data;
      return data;
    }
  } catch (error: any) {
    console.log(`Error: ${error.message}`);
  }
};

export const useChapter = (id: number) => {
  const [chapter, setChapter] = useState<Required<ChapterType>>();

  const chapterSetter = async (id: number) => {
    const response = await fetchChapter(id);
    setChapter(response);
  };

  useEffect(() => {
    chapterSetter(id);
  }, [id]);
  return chapter;
  // return useQuery({
  //   queryFn: () => fetchChapter(id),
  //   queryKey: ["chapter"],
  // });
};
