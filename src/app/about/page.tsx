'use client'

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { EnvelopeSimple, WhatsappLogo } from "@phosphor-icons/react"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function About() {
  return (
    <div className="flex flex-col bg-camera bg-fixed ">
      <Header />

      <header className="flex justify-between p-6">
        <div className="flex flex-col"><span className="font-bold text-5xl">AreaTec </span>Consultoria em Tecnologia e Cidades Inteligentes</div>
        <div className='flex gap-4'>
          <div><Link href="https://wa.me//5518981747223?text=Tenho%20interesse%20em%20contratar%20os%20serviços%20da%20AreaTec"><WhatsappLogo size={42} className='text-green-400 rounded' /></Link></div>
          <div><Link href="mailto:robertozanin@area.tec.br"><EnvelopeSimple size={42} className='text-white rounded' /></Link></div>
        </div>
      </header>
      <main className="flex flex-col gap-4 flex-1 items-center p-6">

        <h1 className="text-xl font-bold text-center">
          AreaTec: Pioneira na Transformação das Cidades Inteligentes desde 2021
        </h1>

        <span className="text-justify">
          Em 2021, um profissional apaixonado por tecnologia idealizou e criou
          a AreaTec, uma empresa que se destacaria como líder na prestação de
          serviços de consultoria em tecnologia e cidades inteligentes. Desde
          então, a AreaTec tem desempenhado um papel crucial na transformação
          das cidades em todo o mundo, capacitando comunidades a abraçar um
          futuro mais inteligente e conectado.
        </span>

        <h1 className="text-xl font-bold text-center">
          A Visão da AreaTec
        </h1>

        <span className="text-justify">
          Desde o início, a AreaTec acreditou que as tecnologias emergentes
          poderiam ser usadas para melhorar a qualidade de vida nas cidades.
          A visão da empresa é criar cidades inteligentes que sejam mais
          eficientes, sustentáveis e habitáveis para todos. Acreditamos que,
          por meio de inovações tecnológicas, podemos resolver os desafios
          urbanos do século XXI, como mobilidade, segurança, energia e
          resiliência.
        </span>

        <h1 className="text-xl font-bold text-center">
          Serviços Especializados
        </h1>

        <span className="text-justify">
          A AreaTec oferece uma gama completa de serviços de consultoria
          em tecnologia e cidades inteligentes, adaptados às necessidades
          específicas de cada município. Nossos serviços incluem:
        </span>

        <Accordion type="single" collapsible className="w-full mb-10">
          <AccordionItem value="item-1">
            <AccordionTrigger>Planejamento Estratégico</AccordionTrigger>
            <AccordionContent>
              Ajudamos as cidades a desenvolver estratégias de transformação
              digital e planejamento urbano inteligente, alinhando objetivos de
              longo prazo com soluções tecnológicas viáveis.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Implantação de Infraestrutura Tecnológica</AccordionTrigger>
            <AccordionContent>
              Auxiliamos na implementação de redes de sensores, sistemas de
              monitoramento e conectividade de última geração para tornar as
              cidades mais inteligentes e responsivas.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Gestão de Dados e Análise</AccordionTrigger>
            <AccordionContent>
              Coletamos e analisamos dados em tempo real para fornecer insights
              valiosos que orientam a tomada de decisões informadas pelos
              gestores urbanos.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Soluções em Software</AccordionTrigger>
            <AccordionContent>
              Desenvolvemos soluções de software, para atender às necessidades de
              cada cidade. Nossos aplicativos e plataformas são projetados para
              serem intuitivos, acessíveis e fáceis de usar.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Segurança Cibernética</AccordionTrigger>
            <AccordionContent>
              Protegemos as cidades contra ameaças cibernéticas, garantindo a
              segurança dos sistemas de informação críticos.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <h1 className="text-xl font-bold text-center">
          Compromisso com a Sustentabilidade
        </h1>

        <span className="text-justify">
          A sustentabilidade é uma parte essencial da filosofia da AreaTec.
          Acreditamos que as cidades inteligentes devem ser ecologicamente
          responsáveis, e nossas soluções ajudam as cidades a reduzir sua pegada
          de carbono, economizar recursos e promover a resiliência ambiental.
        </span>

        <h1 className="text-xl font-bold text-center">
          O Futuro da AreaTec
        </h1>

        <span className="text-justify">
          A AreaTec está comprometida em continuar na vanguarda da inovação em
          tecnologia e cidades inteligentes. Com uma equipe talentosa e
          apaixonada, parcerias estratégicas e um compromisso com a melhoria
          contínua, estamos ansiosos para desempenhar um papel fundamental na
          construção de um futuro mais brilhante para as cidades em todo o
          mundo.
        </span>

        <span className="text-justify">
          Desde 2021, a AreaTec tem sido uma força motriz na transformação
          urbana, ajudando a moldar um futuro mais inteligente e sustentável
          para todos. E continuaremos a fazer isso por muitos anos vindouros.
          Junte-se a nós nesta jornada rumo a cidades mais inteligentes,
          conectadas e sustentáveis.
        </span>
      </main>

      <Footer />

    </div>
  )
}