export enum StorageKeys {
  USER_TOKEN = "userToken",
}

export class LocalStorage {
  private static storage = StorageKeys;

  public static setUserToken = (token: string) => {
    localStorage.setItem(this.storage.USER_TOKEN, token);
  };

  public static getUserToken = () => {
    return localStorage.getItem(this.storage.USER_TOKEN);
  };

  public static removeUserToken = () => {
    localStorage.removeItem(this.storage.USER_TOKEN);
  };

  public static getUserByToken = () => {
    const token = this.getUserToken();
    if (token) {
      return JSON.parse(atob(token.split(".")[1]));
    }
    return null;
  };
}
