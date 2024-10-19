import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Alert } from "react-native";

// Definindo a interface para o contexto de autenticação
type AuthContextType = {
  isAuthenticated: boolean;
  keepConnected: boolean;
  user: { name: string; email: string; password: string };
  login: (email: string, password: string, keepConnected: boolean) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  forgotPassword: (email: string, password: string) => Promise<void>;
};

// Criando o contexto com valores padrão
const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  keepConnected: false,
  user: { name: '', email: '', password: '' },
  login: async () => {},
  register: async () => {},
  logout: async () => {},
  forgotPassword: async () => {}
});

function AuthProvider({ children }: any) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [keepConnected, setKeepConnected] = useState(false);
  const [user, setUser] = useState({ name: '', email: '', password: '' });

  // Função para carregar os dados do AsyncStorage
  const loadStoredData = async () => {
    try {
      const storedUser = await AsyncStorage.getItem('@mytodo-user');
      const storedKeepConnected = await AsyncStorage.getItem('@mytodo-keepConnected');

      if (storedUser) {
        setUser(JSON.parse(storedUser));
        setKeepConnected(storedKeepConnected === 'true');
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error("Erro ao carregar os dados do AsyncStorage:", error);
    }
  };

  // Carregar os dados quando o componente for montado
  useEffect(() => {
    loadStoredData();
  }, []);

  // Função de login
  const login = async (email: string, password: string, keepConnected: boolean) => {
    if (email && password) {
      const fakeUser = { name: 'Usuário Teste', email, password };

      try {
        await AsyncStorage.setItem('@mytodo-user', JSON.stringify(fakeUser));
        await AsyncStorage.setItem('@mytodo-keepConnected', keepConnected.toString());

        setUser(fakeUser);
        setKeepConnected(keepConnected);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Erro ao salvar os dados no AsyncStorage:", error);
      }
    }
  };

  // Função de cadastro
  const register = async (name: string, email: string, password: string) => {
    if (name && email && password) {
      const newUser = { name, email, password };

      try {
        await AsyncStorage.setItem('@mytodo-user', JSON.stringify(newUser));
        await AsyncStorage.setItem('@mytodo-keepConnected', 'false');

        setUser(newUser);
        setKeepConnected(true);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Erro ao salvar os dados no AsyncStorage:", error);
      }
    }
  };

  // Função de logout
  const logout = async () => {
    try {
      await AsyncStorage.removeItem('@mytodo-user');
      await AsyncStorage.removeItem('@mytodo-keepConnected');

      setIsAuthenticated(false);
      setUser({ name: '', email: '', password: '' });
      setKeepConnected(false);
    } catch (error) {
      console.error("Erro ao remover os dados do AsyncStorage:", error);
    }
  };

  // Função de esquecimento de senha
  const forgotPassword = async (email: string, password: string) => {
    try {
      const storedUser = await AsyncStorage.getItem('@mytodo-user');
      if (storedUser) {
        const userData = JSON.parse(storedUser);
        if (userData.email === email) {
          const updatedUserData = { ...userData, password };
          await AsyncStorage.setItem('@mytodo-user', JSON.stringify(updatedUserData));
          Alert.alert("Recuperação de conta", "Sua senha foi atualizada com sucesso! Agora você pode fazer login com a nova senha.");
        } else {
          Alert.alert("Recuperação de conta", "E-mail não encontrado.");
        }
      } else {
        Alert.alert("Recuperação de conta", "Nenhum usuário registrado.");
      }
    } catch (error) {
      Alert.alert("Recuperação de conta", "Erro ao tentar recuperar a senha: " + error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        keepConnected,
        user,
        login,
        register,
        logout,
        forgotPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Hook para acessar o contexto de autenticação
export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
