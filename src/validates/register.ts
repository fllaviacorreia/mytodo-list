import { object, string } from 'yup';

export const RegisterSchema = object({
  name: string().trim().required("Nome é obrigatório."),
  email: string()
    .email("Formato de e-mail inválido.")
    .trim()
    .required("E-mail é obrigatório."),
  password: string()
    .min(6, "Necessário possuir mínimo de 8 caracteres.")
    .trim()
    .required("Senha é obrigatório."),
    confirmPassword: string()
    .min(6, "Necessário possuir mínimo de 8 caracteres.")
    .trim()
    .equals(['password'], "As senhas devem ser iguais.")
    .required("Confirmação de senha é obrigatório.")
});
