import { useEffect, useState } from "react"

export const useWindowSize = (): Pick<DOMRect, 'height' | 'width'> => {
    const [windowRect, setWindowRect] = useState<Pick<DOMRect, 'height' | 'width'>>({
        height: window.innerHeight,
        width: window.innerWidth
    });
    useEffect(() => {
        const callback = () => {
            const { height, width } = document.getElementsByTagName('html')[0].getBoundingClientRect();
            setWindowRect({ height, width });
        }
        window.addEventListener('resize', callback);
        return () => window.removeEventListener('resize', callback);
    }, []);

    return windowRect;
}