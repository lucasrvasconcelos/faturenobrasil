import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="flex px-4 sm:px-20 py-3 justify-between fixed bg-slate-900 top-0 w-full z-20">
      <h1 className="font-bold text-2xl text-white rounded-md px-4">
        Lucrando no <span className="text-primary">Brasil</span>
      </h1>
      <Link
        to={'https://pay.kiwify.com.br/gP6UAEO'}
        className="uppercase select-none bg-primary px-4 text-center text-background rounded-md font-bold ring-1 ring-primary hover:bg-background hover:text-primary  transition-colors flex justify-center items-center"
      >
        Quero empreender
      </Link>
    </header>
  )
}
