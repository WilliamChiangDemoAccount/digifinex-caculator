import { Direction } from "@shared/enums/common.enum";
import { IPosition } from "@shared/interfaces/common.interface";
import { useEffect, useRef, useState } from "react"

interface Prop {
    onTouchMove: (direction: Direction) => void;
    /**
     * 偵測偏移量(px)
     */
    offset?: number;
}

/**
 * 偵測手勢滑動
 */
export const useTouchMove = ({ onTouchMove, offset = 0 }: Prop) => {
    const ref = useRef<HTMLElement>(null);
    const [startPoint, setStart] = useState<IPosition | null>(null);
    const [endPoint, setEnd] = useState<IPosition | null>(null);

    useEffect(() => {
        const onTouchStart = ({ touches }: TouchEvent) => {
            const { clientX: x, clientY: y } = touches.item(0)!;
            setStart({ x, y });
        };
        const onTouchEnd = ({ changedTouches }: TouchEvent) => {
            const { clientX: x, clientY: y } = changedTouches.item(0)!;
            setEnd({ x, y });
        };
        const element = ref.current;
        if (element) {
            element.addEventListener('touchstart', onTouchStart);
            element.addEventListener('touchend', onTouchEnd);
        }
        return () => {
            element?.removeEventListener('touchstart', onTouchStart);
            element?.removeEventListener('touchend', onTouchEnd);
        }
    }, [ref]);

    useEffect(() => {
        if (endPoint && startPoint) {
            const axisX: Direction | null = endPoint.x - startPoint.x > offset ? Direction.Right :
                startPoint.x - endPoint.x > offset ? Direction.Left : null;
            const axisY: Direction | null = endPoint.y - startPoint.y > offset ? Direction.Bottom :
                startPoint.y - endPoint.y > offset ? Direction.Top : null;
            let direction: Direction | null;
            if (axisX && axisY) {
                direction = axisX === Direction.Right && axisY === Direction.Top ? Direction.TopRight :
                    axisX === Direction.Right && axisY === Direction.Bottom ? Direction.BottomRight :
                        axisX === Direction.Left && axisY === Direction.Top ? Direction.TopLeft : Direction.TopRight;
            } else {
                direction = axisX ?? axisY;
            }
            if (direction) {
                onTouchMove(direction);
            }
            setStart(null);
            setEnd(null);
        }
    }, [endPoint, startPoint, onTouchMove, offset]);

    return { ref }
}