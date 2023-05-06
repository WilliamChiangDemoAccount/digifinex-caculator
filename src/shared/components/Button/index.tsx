import { IBaseComponentProp } from '@shared/interfaces/base-component.interface';
import './style.scss';
import { MouseEventHandler } from 'react';
import { Size } from '@shared/enums/common.enum';

export interface IButton extends IBaseComponentProp {
    onClick: MouseEventHandler<HTMLButtonElement>;
    isPrimary?: boolean;
    disabled?: boolean;
    size?: Size;
}

const Button = ({
    onClick,
    disabled = false,
    children,
    testId,
    classes,
    size = Size.Middle,
    isPrimary
}: IButton) => {
    return <button
        className={`d-flex flex-row align-items-center border-radious-sm text-black-1 py-2 px-3 component-button component-button-${size}
         ${isPrimary ? 'bg-orange-1 bg-orange-1_30--disabled' :
                'border border-gray-1'} 
         ${classes ?? ''}`
        }
        data-testid={`btn-${testId}`}
        onClick={onClick}
        disabled={disabled}
    >
        <span className='text-center w-100'>{children}</span>
    </button>
};
export default Button;