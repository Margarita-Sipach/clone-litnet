import {
  FC,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { UserType } from "../../types/types";

export interface ProviderProps {
  children: ReactNode;
}

export interface CreateUserContext {
  user: UserType | null;
  setUser: (user?: UserType | null) => void;
}

const UserContext = createContext<CreateUserContext>({
  user: null,
  setUser: (user) => {},
});

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserContextProvider: FC<ProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserType | null>(null);

  const handleSetUser = useCallback((user: UserType | null = null) => {
    setUser(user);
  }, []);

  const value = useMemo(
    () => ({ user, setUser: handleSetUser }),
    [user, handleSetUser]
  );
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
