export enum InputNames {
  NAME = "name",
  EMAIL = "email",
  PASSWORD = "password",
}

export enum ErrorInputMessages {
  REQUIRED = "Поле обязательно для заполнения",
  LENGTH = "Пароль должен содержать больше 4 и меньше 12 символов",
}

export const createFormData = (data: Record<string, string>): any => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    formData.append(key, data[key]);
  });
  return formData;
};
