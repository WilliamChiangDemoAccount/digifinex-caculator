import { IBaseOverlay } from "@shared/interfaces/base-component.interface";
import './style.scss';
import Button from "@shared/components/Button";
import { toggleOverlay } from "@shared/hooks/useOverlay";
import { IPopup } from "@shared/components/Popup";
import { OverlayType } from "@shared/enums/common.enum";

interface Props extends IBaseOverlay {
    title: string
}

const DialogExample = ({ testId, title, onClose }: Props) => {
    return (<div
        data-testid={testId}
        className='bg-white-2 p-5 shadow-2 position-relative dialog-example'
    >
        <h3 className="text-center">{title}</h3>
        <button className="position-absolute dialog-example__closebtn" onClick={() => onClose(testId!)}>X</button>
        <Button
            classes="mx-auto mt-8"
            testId='popup-example'
            onClick={() => toggleOverlay<IPopup>({
                type: OverlayType.Popup,
                params: {
                    title: '多層彈窗範例',
                    content: '使用範例',
                    btnText: '關閉'
                }
            })}
        >
            toggle popup
        </Button>
    </div>);
}

export default DialogExample;

