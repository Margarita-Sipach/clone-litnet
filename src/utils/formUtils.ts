export enum InputNames {
  NAME = "name",
  EMAIL = "email",
  PASSWORD = "password",
  NEW_PASSWORD = "new_password",
  AUTOBIOGRAPHY = "autobiography",
  TITLE = "title",
  TEXT = "text",
  GENRE = "genres",
  GENRE_FIRST = "genre_first",
  GENRE_SECOND = "genre_second",
  DESCRIPTION = "description",
  IMAGE = "img",
  SYMBOLS = "countCharacters",
  PRIZE = "prize",
  DATE = "date",
  READING_VIEW = "readingView",
}

export enum ErrorInputMessages {
  REQUIRED = "Поле обязательно для заполнения",
  PASSWORD_LENGTH = "Пароль должен содержать больше 4 и меньше 12 символов",
  TEXT_LENGTH = "Текст не должен превышать 400 символов",
  NAME_LENGTH = "Количество символов должно быть больше 3 и меньше 12",
  TITLE_LENGTH = "Количество символов должно быть больше 3 и меньше 24",
  EQUALS_GENRES = "Жанры не должны повторяться",
  SELECT_GENRE = "Жанр не выбран",
  SYMBOLS_SIZE = "Количество символов должен быть только положительным",
  PRIZE_SIZE = "Призовой фонд должен быть больше или равен 0 и меньше 99999 ",
  DATE = "Требуется валидная дата",
  BEFORE_DATE = "Дата не должна обозначать прошедшее время",
}

export enum ErrorNotifies {
  BOOK_EXISTS = "Книга с таким названием уже существует",
  UNEXPECTED_ERROR = "Произошла непредвиденная ошибка, повторите позднее",
  CANNOT_CHANGE_PASSWORD = "Не удалось изменить пароль, повторите позднее",
  NAME_OR_EMAIL_EXISTS = "Имя или email уже заняты",
  INCORRECT_EMAIL_OR_PASSWORD = "Неправильный email или пароль",
  BLOG_EXISTS = "Блог с таким именем уже существует",
  CONTEST_ERROR = "Конкурс с таким названием уже существует",
  CREATE_CHAPTER = "Не удалось создать главу, попробуйте позднее",
  CREATE_UPDATE = "Не удалось обновить главу, попробуйте позднее",
  COMMENT_ERROR = "Не удалось оставить комментарий, попробуйте позднее",
}

export enum SuccessNotifies {
  COMMENT_CREATED = "Комментарий успешно создан",
}

export const createFormData = (data: Record<string, string>): any => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    formData.append(key, data[key]);
  });
  return formData;
};

export const createFormDataWithImage = ({ img, ...data }: any) => {
  const formData = createFormData(data);
  formData.append(InputNames.IMAGE, img);
  return formData;
};
