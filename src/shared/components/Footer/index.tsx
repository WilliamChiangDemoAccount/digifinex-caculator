
import { IBaseComponentProp } from '@shared/interfaces/base-component.interface';
import './style.scss';
import { forwardRef } from 'react';

interface Props extends IBaseComponentProp { }

const Footer = forwardRef<HTMLDivElement>((prop: Props, ref) => (<footer ref={ref}
    data-testid='footer'
    className='bg-black-2 px-5 component-footer'
>
    <section className='component-footer__container'>
        Footer Worked!
    </section>
</footer>));

export default Footer;
