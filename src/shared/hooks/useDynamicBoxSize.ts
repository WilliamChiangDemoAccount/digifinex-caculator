import { useEffect, useState } from "react";

interface Prop {
    /**
     * 父容器，為指定則為當前視窗
     */
    parent?: React.RefObject<HTMLElement>;
    /**
     * 要排除高度的元素
     */
    excludesRef?: React.RefObject<HTMLElement>[];
}

export const useDynamicBoxSize = ({ parent, excludesRef = [] }: Prop): Pick<DOMRect, 'height'> => {
    const [height, setHeight] = useState<number>(0);

    useEffect(() => {
        const resizeObserver = new ResizeObserver(() => {
            const totalReduceHeight = excludesRef.reduce((total, ref) => total + (ref.current?.clientHeight ?? 0), 0);
            setHeight((parent ? parent.current!.clientHeight : window.innerHeight) - totalReduceHeight);
        });
        (parent ? [parent, ...excludesRef] : excludesRef)
            .filter(ref => ref.current)
            .forEach(ref => resizeObserver.observe(ref.current!));
        return () => resizeObserver.disconnect();
    }, [parent, excludesRef]);

    return { height };
}