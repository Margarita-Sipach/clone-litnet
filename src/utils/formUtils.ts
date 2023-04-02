export enum InputNames {
  NAME = "name",
  EMAIL = "email",
  PASSWORD = "password",
  NEW_PASSWORD = "new_password",
  AUTOBIOGRAPHY = "autobiography",
  TITLE = "title",
}

export enum ErrorInputMessages {
  REQUIRED = "Поле обязательно для заполнения",
  PASSWORD_LENGTH = "Пароль должен содержать больше 4 и меньше 12 символов",
  TEXT_LENGTH = "Текст не должен превышать 400 символов",
}

export const createFormData = (data: Record<string, string>): any => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    formData.append(key, data[key]);
  });
  return formData;
};
