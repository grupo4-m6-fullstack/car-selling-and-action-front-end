import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("Nome completo é obrigatório"),
  email: yup
    .string()
    .required("E-mail é obrigatório")
    .email("E-mail inválido"),
  cpf: yup.string().required("CPF é obrigatório"),
  phone: yup
    .string()
    .required("Telefone é obrigatório"),
  birthdate: yup
    .string()
    .required("Data de nascimento obrigatório"),
  description: yup.string(),
  cep: yup.string().required("CEP é obrigatório"),
  state: yup
    .string()
    .required("Estado é obrigatório"),
  city: yup
    .string()
    .required("Cidade é obrigatório"),
  street: yup
    .string()
    .required("Rua é obrigatório"),
  houseNumber: yup
    .string()
    .required("Numero é obrigatório"),
  houseComplement: yup.string(),
  role: yup
    .string()
    .required("Tipo de conta é obrigatório"),
  password: yup
    .string()
    .required("Senha obrigatória"),
});
