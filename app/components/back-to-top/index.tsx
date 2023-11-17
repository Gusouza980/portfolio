'use client'

import { useEffect } from "react"
import { Button } from "../button"
import { TbArrowNarrowUp } from "react-icons/tb"

export const BackToTop = () => {
    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY < 300) {
                document.querySelector('#back-to-top')?.classList.add('hidden')
            } else {
                document.querySelector('#back-to-top')?.classList.remove('hidden')
            }
        })
    })
    return(
        <div className="fixed right-4 bottom-4 z-20">
            <Button id="back-to-top" className="hidden shadow-lg shadow-emerald-400/20" onClick={scrollToTop}>
                <TbArrowNarrowUp size={18} />
            </Button>
        </div>
    )
}