import { AuthContext } from "@src/contexts/AuthProvider"
import { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import {object, string} from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "@src/components/Form/Input";
import { useRouter } from 'next/navigation';
import { signInFormSchema } from "@src/utils/schemas/signIn";
// import { signInFormSchema } from "@src/utils/schemas/signIn";

interface SignInFormData {
  number: string;
  password: string;
}

export default function SignIn() {
  const {signIn} = useContext(AuthContext)
  const router = useRouter()

  const { register, handleSubmit, formState: {errors} } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema)
  })
  const [isLoading, setIsLoading] = useState(false)
 
  const handleSignIn = async (data: SignInFormData) => {
    setIsLoading(true)
    console.log("teste")
    signIn(data)
    setIsLoading(false)
  }
  
  return (
    <div className={`
        bg-[url(https://i.redd.it/qwd83nc4xxf41.jpg)] 
        w-full h-[100vh] flex py-20 justify-center 
      `}
    >
      <div>
        <div className="w-full flex items-center justify-center pb-3">
        <img className="h-[150px] w-[150px]" src="/assets/logo.png" alt="2" />
        </div>
        <div >
          <form onSubmit={handleSubmit(handleSignIn)}>
            <Input error={errors.number} register={register("number")} placeholder="Número" name="number" type="text"/>
            <Input error={errors.number} register={register("password")} placeholder="Senha" name="password" type="password"/>
          <button type="submit"
              className={"bg-pink-500 w-full text-white p-1 hover:opacity-80"}
            >
            Logar
          </button>
          </form>

          <span onClick={() => router.push("/auth/register")} className={"text-bold hover:cursor-pointer text-pink-500 hover:opacity-80"}>
            Criar uma conta
          </span>
        </div>
      </div>
    </div>
  )
} 