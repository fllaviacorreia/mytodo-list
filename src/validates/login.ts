import { boolean, object, string } from 'yup';

export const LoginSchema = object({
  email: string()
    .email("Formato de e-mail inválido.")
    .trim()
    .required("E-mail é obrigatório."),
  password: string()
    .min(8, "Necessário possuir mínimo de 8 caracteres.")
    .trim()
    .required("Senha é obrigatória."),
  keepConnected: boolean(),
});
