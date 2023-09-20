'use client'

import { WhatsappLogo, EnvelopeSimple } from '@phosphor-icons/react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col h-full bg-camera bg-cover">
      <header className="flex justify-between p-6">
        <div className="flex flex-col"><span className="font-bold text-5xl">AreaTec </span>Consultoria em Tecnologia e Cidades Inteligentes</div>
        <div className='flex gap-4'>
          <div><Link href="https://wa.me//5518981747223?text=Tenho%20interesse%20em%20contratar%20os%20serviços%20da%20AreaTec"><WhatsappLogo size={42} className='text-green-400 rounded' /></Link></div>
          <div><Link href="mailto:robertozanin@area.tec.br"><EnvelopeSimple size={42} className='text-slate-400 rounded' /></Link></div>
        </div>
      </header>
      <main className="flex flex-1 justify-center items-center p-6">
        <h1>Mapeamento, Planejamento e Execução de Projetos</h1>
      </main>
      <footer className="flex flex-col justify-center items-center p-6">
        <h1>Tarumã - SP</h1>
        <h2>2023</h2>
      </footer>
    </div>
  )
}
