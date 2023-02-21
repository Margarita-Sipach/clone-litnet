import defaultImage from "../common/assets/images/avatar.png";
import React from "react";
const baseUrl = "https://litnet.herokuapp.com/";

export const createDate = (string: string) => {
  const date = new Date(string);
  const day = addZero(date.getDate());
  const month = addZero(date.getMonth() + 1);
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

export const addZero = (number: number) => {
  return number < 10 && number > 0 ? `0${number}` : number;
};

export const getImagePath = (img: string) => {
  return `${baseUrl}${img}`;
};

export const processImage = (image: string | null | undefined) => {
  return image ? image : defaultImage;
};

export const handleImageError = (
  e: React.SyntheticEvent<HTMLImageElement, Event>
) => {
  (e.target as HTMLImageElement).src = defaultImage;
};
