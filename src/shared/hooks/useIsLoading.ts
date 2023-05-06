import { LoadingType } from "@shared/enums/api.enum";
import { useEffect, useState } from "react";
import { singletonHook } from "react-singleton-hook";

interface ILoadingTask {
    id: string;
    loading: boolean;
    type: LoadingType;
}

let set: any = () => {
    throw new Error("you must use hook before setting its state");
};

const useLoadingTask = singletonHook<ILoadingTask | null>(
    null,
    () => {
        const [task, setTask] = useState<ILoadingTask | null>(null);
        set = setTask;
        return task;
    }
);

/**
 * 
 * @returns 當前是否有尚未完成的api請求
 */
export const useIsLoading = (): Record<LoadingType, boolean> => {
    const [spinnerQueue, setSpinnerQueue] = useState(new Set());
    const [skeletonQueue, setSkeletonQueue] = useState(new Set());
    const [spinner, setSpinner] = useState(false);
    const [skeleton, setSkeleton] = useState(false);
    const task = useLoadingTask();

    useEffect(() => {
        if (task?.type === LoadingType.Spinner) {
            if (spinnerQueue.has(task.id) && !task.loading) {
                spinnerQueue.delete(task.id);
            } else if (task.loading) {
                spinnerQueue.add(task.id);
            }
            setSpinnerQueue(spinnerQueue);
            setSpinner(spinnerQueue.size > 0);
        }
    }, [task, spinnerQueue]);

    useEffect(() => {
        if (task?.type === LoadingType.Skeleton) {
            if (skeletonQueue.has(task.id) && !task.loading) {
                skeletonQueue.delete(task.id);
            } else if (task.loading) {
                skeletonQueue.add(task.id);
            }
            setSkeletonQueue(skeletonQueue);
            setSkeleton(skeletonQueue.size > 0);
        }
    }, [task, skeletonQueue]);

    return ({
        [LoadingType.Spinner]: spinner,
        [LoadingType.Skeleton]: skeleton
    });
};

export const setLoadingTask = (config: ILoadingTask) => set(config);
