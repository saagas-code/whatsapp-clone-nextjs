import { Input } from "@src/components/Form/Input";
import { AuthContext } from "@src/contexts/AuthProvider";
import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpFormSchema } from "@src/utils/schemas/signUp";

interface SignUpFormSchema {
  number: string;
  name: string;
  password: string;
  passwordConfirm: string;
}

export default function register() {
  const {signUp} = useContext(AuthContext)
  const router = useRouter()

  const { register, handleSubmit, formState: {errors} } = useForm<SignUpFormSchema>({
    resolver: yupResolver(signUpFormSchema)
  })
  const [isLoading, setIsLoading] = useState(false)
  const [numberAlreadyExists, setNumberAlreadyExists] = useState(false)

  const handleSignUp = async (data: SignUpFormSchema) => {
    setNumberAlreadyExists(false)
    setIsLoading(true)

    const result = await signUp(data);
    if(!result) {
      setNumberAlreadyExists(true)
    }
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
          <form onSubmit={handleSubmit(handleSignUp)}>
            <Input error={errors.number} register={register("number")} placeholder="Número" name="number" type="text"/>
            {numberAlreadyExists &&
              <div className="text-red-500 mb-2">Número já existente</div>
            }
            <Input error={errors.number} register={register("name")} placeholder="Nome" name="number" type="text"/>
            <Input error={errors.password} register={register("password")} placeholder="Senha" name="password" type="password"/>
            <Input error={errors.passwordConfirm} register={register("passwordConfirm")} placeholder="Confirme a senha" name="password" type="password"/>
          <button type="submit"
              className={"bg-pink-500 w-full text-white p-1 hover:opacity-80"}
            >
            Criar conta
          </button>
          </form>

          <span onClick={() => router.push("/auth/register")} className={"text-bold hover:cursor-pointer text-pink-500 hover:opacity-80"}>
            Já tenho uma conta
          </span>
        </div>
      </div>
    </div>
  )
}