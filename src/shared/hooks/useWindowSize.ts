import { BreakPoint } from "@shared/enums/common.enum";
import { useCallback, useEffect, useState } from "react"

type WindowSize = Pick<DOMRect, 'height' | 'width'> & { breakpoint: BreakPoint };

export const useWindowSize = (): WindowSize => {
    const getBreakpoint = useCallback((width: number) =>
        width < 768 ? BreakPoint.Mobile :
            width >= 768 && width < 1440 ? BreakPoint.Tablet :
                BreakPoint.Desktop
        , []);
    const [windowRect, setWindowRect] = useState<WindowSize>({
        height: window.innerHeight,
        width: window.innerWidth,
        breakpoint: getBreakpoint(window.innerWidth)
    });
    
    useEffect(() => {
        const callback = () => {
            const { height, width } = document.getElementsByTagName('html')[0].getBoundingClientRect();
            setWindowRect({ height, width, breakpoint: getBreakpoint(width) });
        }
        window.addEventListener('resize', callback);
        return () => window.removeEventListener('resize', callback);
    }, [getBreakpoint]);

    return windowRect;
}