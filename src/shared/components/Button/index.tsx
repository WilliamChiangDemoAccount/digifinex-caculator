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
        className={`d-flex flex-row align-items-center border-radious-sm py-2 px-3 component-button component-button-${size}
         ${isPrimary ? 'text-fill-3 bg-orange-primary bg-orange-primary_30--disabled bg-orange-hover--hover bg-orange-active--active' :
                'border border-line-3 text-text-5 bg-fill-4--hover bg-fill-5--active'} 
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