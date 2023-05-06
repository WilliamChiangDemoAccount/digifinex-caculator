import { IBaseOverlay } from '@shared/interfaces/base-component.interface';
import './style.scss';
import { Status } from '@shared/enums/common.enum';
import { useEffect, useState } from 'react';

export interface IToast extends IBaseOverlay {
    message: string;
    status: Status;
    /**
     * 單位，秒
     */
    timeout: number;
}

const Toast = ({ testId, onClose, message, status, timeout, handleOnClose }: IToast) => {
    const [close, setClose] = useState(false);
    useEffect(() => {
        setTimeout(() => setClose(true), timeout * 1000);
    }, [timeout]);

    useEffect(() => {
        if (close) {
            onClose(testId!);
            if (handleOnClose) {
                handleOnClose();
            }
        }
    }, [onClose, close, handleOnClose, testId]);
    
    return <div
        data-testid={testId}
        className='d-flex flex-row align-items-center bg-fill-1 px-8 py-3 shadow-2 border-radius-sm component-toast'
    >
        <p className='font-sm'>{message}</p>
    </div>;
}
export default Toast;