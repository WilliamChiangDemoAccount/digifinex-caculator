
import { IBaseComponentProp } from '@shared/interfaces/base-component.interface';
import './style.scss';
import { forwardRef } from 'react';

interface Props extends IBaseComponentProp { }

const Footer = forwardRef<HTMLDivElement>((prop: Props, ref) => (<footer ref={ref}
    data-testid='footer'
    className='d-flex flex-row align-items-center px-5'
>Footer Worked!
</footer>));

export default Footer;
