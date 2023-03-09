import { AuthContext } from "@src/contexts/AuthProvider"
import { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import {object, string} from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";

interface SignInFormData {
  number: string;
  password: string;
}

const signInFormSchema = object({
  email: string().required("Campo obrigatório").min(4, 'Insira um minimo de 4 caracteres'),
  password: string().required("Campo obrigatório").min(4, 'Insira um minimo de 4 caracteres')
})

export default function SignIn() {
  const {signIn} = useContext(AuthContext)

  const {register, handleSubmit, formState: {errors}} = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema)
  })
  const [isLoading, setIsLoading] = useState(false)
 
  const handleSignIn = async () => {
    setIsLoading(true)
  }
  
  return (
    <div className="">
      Login
    </div>
  )
} 