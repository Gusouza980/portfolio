import { IoMdHeart } from "react-icons/io";

export const Footer = () => {
    return (
        <footer className="h-14 w-full flex items-center justify-center bg-gray-950">
            <span className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-gray-400">Feito com amor <IoMdHeart className="text-emerald-500" size={13}/> por <strong className="font-semibold text-gray-300">Luis Gustavo de Souza Carvalho</strong> | Copyright © 2022 - Todos os direitos reservados</span>
        </footer>
    )
}