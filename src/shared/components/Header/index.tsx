import './style.scss';
import { IBaseComponentProp } from '@shared/interfaces/base-component.interface';
import { forwardRef } from 'react';

interface Props extends IBaseComponentProp {

}

const Header = forwardRef<HTMLDivElement>((prop: Props, ref) => {
    return <header ref={ref} className='bg-fill-1' data-testid='header'>
        {/* <button onClick={() => setAuth(false)}>logout</button> */}
    </header>;
});

export default Header;
