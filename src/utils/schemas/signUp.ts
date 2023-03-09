import {object, string, ref} from 'yup'

export const signUpFormSchema = object({
  number: string().required("Campo obrigatório"),
  name: string().required("Campo obrigatório"),
  password: string().required("Campo obrigatório"),
  passwordConfirm: string().required("Campo obrigatório").oneOf([ref("password")])
})