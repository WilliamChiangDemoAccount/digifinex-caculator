import { IToast } from "@shared/components/Toast";
import { Animation } from "@shared/enums/animation.enum";
import { OverlayType } from "@shared/enums/common.enum";
import { useCallback, useEffect, useState } from "react";
import { singletonHook } from "react-singleton-hook";

type OverlayConfig<T = any> = {
    type: OverlayType;
    /**
     * 是否開啟背景遮罩
     */
    backdrop?: boolean;
    /**
     * 是否允許點擊背景關閉
     */
    backdropClose?: boolean;
    params?: T;
    /**
     * 入場動畫
     */
    animation?: Animation;
    /**
     * 關閉後觸發事件
     */
    handleOnClose?: () => void;
}

export interface IOverlayTask {
    id: string;
    content?: (_: any) => JSX.Element;
    config: OverlayConfig;
}

interface IOverlay {
    overlay: IOverlayTask[];
    onClose: (id: string) => void;
}

let set: any = () => {
    throw new Error("you must use hook before setting its state");
};

const useOverlayTask = singletonHook<{
    task: IOverlayTask | null,
    onClear: () => void
}>(
    { task: null, onClear: () => { } },
    () => {
        const [task, setTask] = useState<IOverlayTask | null>(null);
        set = setTask;
        return ({ task, onClear: () => setTask(null) });
    }
);

/**
 * @param type overlay type
 * @param content dialog content
 * @returns task id
 */
export const toggleOverlay = <T>(config: Partial<OverlayConfig<Partial<T>>>, content?: ((_: any) => JSX.Element)) => {
    const id = new Date().toISOString();
    switch (config.type) {
        case OverlayType.Toast:
            config.backdrop = false;
            config.backdropClose = false;
            config.animation = Animation.ZoomIn;
            config.params = { ...{ timeout: 3 } as IToast, ...config.params } as any;
            break;
        default: break;
    }
    set({ id, config, content });
    return id;
};

export const useOverlay = (): IOverlay => {
    const { task, onClear } = useOverlayTask();
    const [overlay, setOverlay] = useState<IOverlayTask[]>([]);
    const handleOnClosed = useCallback((targetId: string) => {
        if (overlay.some(({ id }) => id === targetId)) {
            setOverlay(overlay.filter(({ id }) => id !== targetId));
        }
    }, [overlay]);

    useEffect(() => {
        if (task?.id) {
            onClear();
            setOverlay([...overlay, ...[task]]);
        }
    }, [task, overlay, onClear]);

    return ({
        overlay: overlay,
        onClose: handleOnClosed
    })
}