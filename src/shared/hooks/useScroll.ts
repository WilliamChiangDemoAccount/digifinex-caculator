import { useEffect } from "react"

interface Prop {
    handleOnScroll: (event: Event) => void
}

export const useScroll = ({ handleOnScroll }: Prop) => {
    useEffect(() => {
        const callback = (e: Event) => handleOnScroll(e);
        window.addEventListener('scroll', callback);
        return () => window.removeEventListener('scroll', callback);
    }, [handleOnScroll]);
}