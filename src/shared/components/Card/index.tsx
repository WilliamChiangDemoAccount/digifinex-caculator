import { IBaseComponentProp } from '@shared/interfaces/base-component.interface';
import './style.scss';
interface Props extends IBaseComponentProp {
    footer?: React.ReactNode;
    footerClasses?: string;
}
const Card = ({ children, classes, footer, testId, footerClasses }: Props) => (
    <section
        data-testid={`${testId ? `${testId}-card` : 'card'}`}
        className={`bg-fill-1 border-radius-lg ${classes ?? ''}`}>
        {children && <div className='px-5 py-4'>{children}</div>}
        {footer && <footer className={`border-top-1 border-line-2 w-100 px-5 py-3 ${footerClasses}`}>
            {footer}
        </footer>}
    </section>
);

export default Card;