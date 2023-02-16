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
