import { IBaseComponentProp } from '@shared/interfaces/base-component.interface';
import './style.scss';
import { CSSProperties, MouseEventHandler } from 'react';

export interface IButton extends IBaseComponentProp {
    onClick: MouseEventHandler<HTMLButtonElement>;
    isPrimary?: boolean;
    disabled?: boolean;
    style?: CSSProperties;
}

const Button = ({
    onClick,
    disabled = false,
    children,
    testId,
    classes,
    style,
    isPrimary
}: IButton) => {
    return <button
        className={`d-flex flex-row align-items-center border-radius-sm  text-white-1 component-button
         ${isPrimary ? 'bg-orange-1 bg-orange-1_30--disabled' :
                'border border-gray-1'} 
         ${classes ?? ''}`
        }
        style={style}
        data-testid={`btn-${testId}`}
        onClick={onClick}
        disabled={disabled}
    >
        {children}
    </button>
};
export default Button;