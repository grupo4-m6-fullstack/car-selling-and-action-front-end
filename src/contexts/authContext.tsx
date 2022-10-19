import React, {
  createContext,
  useContext,
  useState,
  useCallback,
} from 'react';
import api from '../services/api';

interface AuxProps {
  children: JSX.Element[] | JSX.Element;
}

interface User {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthdate: string;
  cep: string;
  state: string;
  city: string;
  street: string;
  houseNumber: number;
  houseComplement: string;
  role: string;
  // Dont have password here because its what comes from api
  // password: string
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// What is saved in the useState, it comes from the local storage
interface AuthState {
  token: string;
  user: User;
}

// What is required to login
interface loginCredential {
  email: string;
  password: string;
}

// What is required to register
interface registerCredential {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthdate: string;
  description?: string;
  cep: string;
  state: string;
  city: string;
  street: string;
  houseNumber: number;
  houseComplement?: string;
  role: string;
  password: string;
}

interface AuthContextData {
  user: User;
  token: string;
  login: (credentials: loginCredential) => Promise<void>;
  register: (credentials: registerCredential) => Promise<void>;
  getInfos: (token: string) => Promise<void>;
  logoff: () => Promise<boolean> | void;
}

const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider = ({ children }: AuxProps) => {
  const [data, setData] = useState<AuthState>(() => {
    const accessToken =
      localStorage.getItem('@teste:token');
    const user = localStorage.getItem('@teste:user');

    if (accessToken && user) {
      return {
        token: accessToken,
        user: JSON.parse(user),
      };
    }

    return {} as AuthState;
  });

  // header for token required requests
  const config = {
    headers: { Authorization: `Bearer ${data.token}` },
  };

  // Login function
  const login = useCallback(
    async ({ email, password }: loginCredential) => {
      const response = await api.post('auth/signin/', {
        email,
        password,
      });
      console.log(response, response.data);
      const { token, user } = response.data;
      localStorage.setItem('@teste:token', token);
      localStorage.setItem(
        '@teste:user',
        JSON.stringify(user),
      );

      setData({ token, user });
    },
    [],
  );

  // Register function
  const register = useCallback(
    async (data: registerCredential) => {
      const response = await api.post('auth/signup/', {
        data
      });
      console.log(response, response.data);
      const { token, user } = response.data;
      localStorage.setItem('@teste:token', token);
      localStorage.setItem(
        '@teste:user',
        JSON.stringify(user),
      );

      setData({ token, user });
    },
    [],
  );

  // Request to get 'contacts' of the user and add it to localhost
  const getInfos = useCallback(
    async (token: string) => {
      const responseContacts = await api.get(
        // need change here
        'contact/',
        config,
      );
      const responseUser = await api.get('user/', config);
      const { data } = responseContacts;
      const { user } = responseUser.data;
      //change here
      localStorage.setItem(
        '@teste:contacts',
        JSON.stringify(data),
      );
      // change here
      localStorage.setItem(
        '@teste:user',
        JSON.stringify(user),
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data.token],
  );

  const logoff = () => {
    setData({} as AuthState);
    localStorage.clear();
  };

  return (
    <AuthContext.Provider
      value={{
        token: data.token,
        user: data.user,
        login,
        register,
        getInfos,
        logoff,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      'useAuth must be used within an AuthProvider',
    );
  }

  return context;
};