import { AuthContext } from "@src/contexts/AuthProvider"
import { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import {object, string} from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import image from 'assets/logo.png'

interface SignInFormData {
  number: string;
  password: string;
}

const signInFormSchema = object({
  email: string().required("Campo obrigatório").min(4, 'Insira um minimo de 4 caracteres'),
  password: string().required("Campo obrigatório").min(4, 'Insira um minimo de 4 caracteres')
})

const BG = 'https://personalmarketingdigital.com.br/wp-content/uploads/2018/05/background-whatsapp-7.jpg'

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
    <div className={`
        bg-[url(https://i.redd.it/qwd83nc4xxf41.jpg)] 
        w-full h-[100vh] flex py-20 justify-center 
      `}
    >
      <div className="">
        <img className="h-[150px] w-[150px]" src="/assets/logo.png" alt="2" />
      </div>
    </div>
  )
} 