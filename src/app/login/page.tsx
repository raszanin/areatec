'use client'

import Link from 'next/link';
import { ArrowCircleLeft, SignIn } from '@phosphor-icons/react';
import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast";
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export default function Login() {
  const { toast } = useToast();

  function login(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    toast({
      title: "Obrigado por nos visitar!",
      description: "Área do Cliente em construção...",
      style: { background: '#444', color: '#fff' },
    })
  }

  return (
    <div className="flex flex-col h-full bg-camera bg-cover">
      <Header />

      <main className="flex flex-1 justify-center items-center p-6">
        <form onSubmit={login} className="flex flex-col w-full md:w-96 gap-4 bg-black/50 p-6 rounded-lg">
          <div className='flex justify-center'><h1>Área do Cliente</h1></div>

          <div>
            <Label htmlFor='email'>Usuário</Label>
            <Input type='email' ></Input>
          </div>
          <div>
            <Label htmlFor='email'>Senha</Label>
            <Input type='password' />
          </div>

          <Button className='gap-2'>
            Entrar
            <SignIn size={24} />
          </Button>

          <div className='flex text-sm justify-center items-centers text-slate-300'>
            <Link href={'/forgot'}>Esqueci a senha</Link>
          </div>
        </form>

      </main>

      <Footer />

      <Toaster />
    </div >
  )
}