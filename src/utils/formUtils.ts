export enum InputNames {
  NAME = "name",
  EMAIL = "email",
  PASSWORD = "password",
  NEW_PASSWORD = "new_password",
  AUTOBIOGRAPHY = "autobiography",
  TITLE = "title",
  GENRE_FIRST = "genre_first",
  GENRE_SECOND = "genre_second",
  DESCRIPTION = "description",
}

export enum ErrorInputMessages {
  REQUIRED = "Поле обязательно для заполнения",
  PASSWORD_LENGTH = "Пароль должен содержать больше 4 и меньше 12 символов",
  TEXT_LENGTH = "Текст не должен превышать 400 символов",
  NAME_LENGTH = "Количество символов должно быть больше 3 и меньше 12",
  TITLE_LENGTH = "Количество символов должно быть больше 3 и меньше 24",
  EQUALS_GENRES = "Жанры не должны повторяться",
  SELECT_GENRE = "Жанр не выбран"
}

export enum ErrorNotifies {
  BOOK_EXISTS = "Книга с таким названием уже существует",
  UNEXPECTED_ERROR = "Произошла непредвиденная ошибка, повторите позднее",
  CANNOT_CHANGE_PASSWORD = "Не удалось изменить пароль, повторите позднее",
  NAME_OR_EMAIL_EXISTS = "Имя или email уже заняты",
  INCORRECT_EMAIL_OR_PASSWORD = "Неправильный email или пароль",
}

export const createFormData = (data: Record<string, string>): any => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    formData.append(key, data[key]);
  });
  return formData;
};
