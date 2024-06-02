import { Link } from 'react-router-dom'
import { Header } from '../../components/Header'

import image from '../../assets/images/image-preview-02.gif'
import garantia from '../../assets/images/garantia.png'
import { Quiz } from './components/quiz'
import { Faq } from './components/faq'

export function Initial() {
  return (
    <>
      <Header />
      <main className="font-poppins text-background">
        <section className="flex justify-center flex-wrap gap-14 px-10 bg-slate-900 py-44">
          <div>
            <h1 className="text-5xl">
              Descubra as estratégias <br />
              para alcançar o
              <div className="text-green-500">
                sucesso financeiro em <br />
                <span className="font-bold text-5xl">2024</span>
              </div>
            </h1>
            <div className="flex">
              <Link
                to={'https://pay.kiwify.com.br/gP6UAEO'}
                className="uppercase bg-transparent 1 px-8 py-2 mt-14 w-fit flex text-primary rounded-md font-bold ring-1 ring-primary hover:bg-primary hover:text-background  transition-colors "
              >
                Quero ter acesso
              </Link>
              <a
                href="#quiz"
                className="ml-2 uppercase 1 px-8 py-2 mt-14 w-fit flex rounded-md font-bold ring-1 ring-primary bg-primary text-background  transition-colors hover:opacity-85"
              >
                Fazer quiz
              </a>
            </div>
          </div>

          <div>
            <Link
              to={'https://pay.kiwify.com.br/gP6UAEO'}
              className="flex rounded-2xl ring-2 ring-primary overflow-hidden hover:-translate-y-2 transition-[300ms]"
            >
              <img src={image} alt="" className="w-96 h-96 object-contain" />
            </Link>
          </div>
        </section>

        <section className="bg-background text-slate-900 px-8 sm:px-20 py-20">
          <div>
            <h3 className="font-bold text-2xl">
              Desperte seu Potencial Empreendedor e Conquiste sua Liberdade
              Financeira!
            </h3>
            <p className="mt-4">
              Você já se imaginou vivendo uma vida onde cada dia é uma
              oportunidade de construir o seu próprio caminho? Onde o controle
              está em suas mãos, e não nas de um chefe ou de um horário fixo de
              trabalho? Se a resposta é sim, então chegou a hora de despertar o
              empreendedor que existe dentro de você e conquistar a
              independência financeira que você merece!
            </p>
            <p className="mt-4">
              O e-book &ldquo;Lucrando no Brasil&ldquo; é um guia prático e
              inspirador que vai te ajudar na jornada para se tornar um
              empreendedor de sucesso.
            </p>
            <h3 className="font-bold text-2xl mt-8">
              Não espere mais para transformar sua vida!
            </h3>
            <p className="mt-4">
              O futuro dos seus sonhos está ao seu alcance, e tudo o que você
              precisa fazer é dar o primeiro passo. Com o e-book, você terá
              todas as ferramentas e motivação necessárias para começar essa
              jornada incrível em direção à independência financeira e
              realização pessoal.
            </p>

            <h3 className="font-bold text-2xl mt-8">
              Pra te ajudar, vou resumir o e-Book em uma frase!
            </h3>
            <p className="mt-4">
              As vendas, seja de produto ou serviço, são o combustível de
              qualquer negócio!
            </p>

            <div className="mt-8 flex gap-8  justify-center flex-wrap sm:flex-nowrap">
              <ul className="bg-accent02/35 p-3 rounded-md">
                <h3 className="font-bold mb-3">Para Quem é Este Livro:</h3>
                <li>
                  ✅ Empreendedores em busca de crescimento e sucesso nos
                  negócios.
                </li>
                <li className="mt-2">
                  ✅ Profissionais que desejam aprender estratégias práticas
                  para aumentar seus lucros.
                </li>
                <li className="mt-2">
                  ✅ Indivíduos que estão comprometidos em evoluir e adaptar-se
                  em um ambiente empresarial em constante mudança.
                </li>
              </ul>

              <ul className="bg-red-400/25 p-3 rounded-md">
                <h3 className="font-bold mb-3">
                  Para Quem <span className="text-red-700">Não</span> é Este
                  Livro:
                </h3>
                <li>
                  ❌ Aqueles que não estão dispostos a investir tempo e esforço
                  no desenvolvimento de seus negócios.
                </li>
                <li className="mt-2">
                  ❌ Pessoas que não estão abertas a aprender e implementar
                  novas estratégias.
                </li>
                <li className="mt-2">
                  ❌ Empreendedores que buscam soluções rápidas e não estão
                  dispostos a enfrentar desafios e adversidades.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 px-8 py-14">
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <img src={garantia} alt="" className="max-w-56 animate-pulse" />
            <div className="flex flex-col text-2xl max-w-[600px]">
              <span className="font-bold text-primary">
                7 dias de garantia incondicional
              </span>
              <span className="mt-5">
                Se por algum motivo você não gostar do seu produto,{' '}
                <span className="font-bold text-primary">
                  nós devolvemos todo seu dinheiro
                </span>
              </span>
              <span className="mt-5 font-bold">O que custa tentar então?!</span>
            </div>
          </div>
        </section>

        <section
          className="px-20 py-14 pt-24 text-slate-900 bg-background flex justify-center flex-wrap items-center gap-24"
          id="quiz"
        >
          <div className="max-w-96">
            <h4 className="">Ainda na dúvida?!</h4>
            <h2 className="text-3xl font-bold whitespace-break-spaces">
              Responda nosso <span className="text-primary text-4xl">quiz</span>{' '}
              e descubra como nosso eBook pode impulsionar{' '}
              <span className="text-primary">seus negócios em 2024!</span>
            </h2>
            <span className="text-lg mt-4 flex italic">
              Não deixe suas dúvidas atrapalharem seu sucesso!
            </span>
          </div>
          <Quiz />
        </section>

        <section className="bg-slate-900 py-10">
          <div className="p-4 ">
            <h3 className="max-w-[600px] text-2xl mt-14 mb-14 m-auto">
              Realize seus sonhos financeiros e alcance a liberdade financeira
              que você sempre desejou.{' '}
              <span className="text-primary font-bold">Empreenda já</span>
            </h3>
          </div>
        </section>

        <section>
          <Faq />
        </section>

        <section className="flex justify-center items-center bg-slate-900 py-12  gap-14 sm:gap-8 flex-wrap">
          <img
            src={image}
            alt=""
            className="w-96 h-96 object-contain rounded-sm"
          />
          <div>
            <h3 className="text-4xl font-bold">
              Por apenas
              <br /> 5X de R$5,89
            </h3>
            <p className="text-primary">Ou R$27,00 a vista</p>
            <Link
              to={'https://pay.kiwify.com.br/gP6UAEO'}
              className="uppercase bg-transparent 1 px-8 py-2 mt-14 w-fit flex text-primary rounded-md font-bold ring-1 ring-primary hover:bg-primary hover:text-background  transition-colors "
            >
              Comprar agora
            </Link>
          </div>
        </section>
      </main>

      <footer className="flex items-center justify-center bg-slate-900 text-primary font-bold">
        <span className="">
          O sucesso depende da sua atitude de empreender. Dê o primeiro passo!
        </span>
      </footer>
    </>
  )
}
