import { IBaseOverlay } from '@shared/interfaces/base-component.interface';
import './style.scss';
import { Status } from '@shared/enums/common.enum';
import Button, { IButton } from '@shared/components/Button';
import { useCallback } from 'react';

export interface IModal extends IBaseOverlay {
    title: string;
    content: string;
    secondaryBtn?: IButton;
    primaryBtn?: IButton;
    status?: Status;
}
const Modal = ({ testId, onClose, handleOnClose, title, content, secondaryBtn, primaryBtn }: IModal) => {
    const onCloseEvent = useCallback(() => {
        onClose(testId!);
        if (handleOnClose) {
            handleOnClose();
        }
    }, [onClose, handleOnClose, testId]);

    return <div
        data-testid={testId}
        className='d-flex flex-column align-items-center bg-fill-1 shadow-2 component-modal'
    >
        <header className='py-4 px-5 bg-fill-2 w-100'>{title}</header>
        <section className='p-5 w-100'>
            <p className='font-sm'>{content}</p>
            <nav className='d-flex flex-row align-items-center justify-content-center mt-5 component-modal__action-bar'>
                {secondaryBtn && <Button {...{
                    ...secondaryBtn, ...{
                        testId: `${testId}-secondary`,
                        classes: `${secondaryBtn.classes ?? ''} me-6`,
                        onClick: event => {
                            secondaryBtn.onClick(event);
                            onCloseEvent();
                        }
                    }
                }} />}
                {primaryBtn && <Button {...{
                    ...primaryBtn, ...{
                        isPrimary: true,
                        testId: `${testId}-primary`,
                        onClick: event => {
                            primaryBtn.onClick(event);
                            onCloseEvent();
                        }
                    }
                }} />}
            </nav>
        </section>
    </div>;
}
export default Modal;