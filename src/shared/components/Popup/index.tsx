import { IBaseOverlay } from '@shared/interfaces/base-component.interface';
import './style.scss';
import Button from '@shared/components/Button';

export interface IPopup extends IBaseOverlay {
    title: string;
    content: string;
    btnText: string;
}
const Popup = ({ testId, onClose, handleOnClose, title, content, btnText }: IPopup) => (<div
    data-testid={testId}
    className='d-flex flex-column align-items-center bg-fill-2 p-5 pt-8 shadow-2 component-popup'
>
    <h4>{title}</h4>
    <p className='font-sm mt-5'>{content}</p>
    <Button
        classes='mt-5'
        isPrimary
        testId={`${testId}-close`}
        onClick={() => {
            onClose(testId!);
            if (handleOnClose) {
                handleOnClose();
            }
        }}>
        {btnText}
    </Button>
</div>);
export default Popup;