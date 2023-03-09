import {object, string} from 'yup'

export const signInFormSchema = object({
  number: string().required("Campo obrigatório"),
  password: string().required("Campo obrigatório")
})