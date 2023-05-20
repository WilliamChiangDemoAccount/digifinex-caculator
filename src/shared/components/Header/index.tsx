import { ProductModule } from '@shared/enums/modules.enum';
import './style.scss';
import { routeMap } from '@utilities/config/routes';
import Logo from 'assets/img/logo.svg';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageDropdown from '@shared/components/LanguageDropdown';
import { useEffect, useRef, useState } from 'react';
import { Direction } from '@shared/enums/common.enum';
import { useDynamicBoxSize } from '@shared/hooks/useDynamicBoxSize';


const Header = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [isMobileMenuOpen, setMenuOpen] = useState(false);
    const headerRef = useRef<HTMLElement | null>(null);
    const { height: mobileMenuHeight } = useDynamicBoxSize({ excludesRef: [headerRef] });

    useEffect(() => isMobileMenuOpen ?
        document.children[0].classList.add('overflow-hidden') :
        document.children[0].classList.remove('overflow-hidden'), [isMobileMenuOpen]);

    return <>
        <header
            ref={headerRef}
            data-testid='header'
            className='bg-white-1 component-header py-3_5 py-sm-4 py-lg-6 layer-important'
        >
            <section className='component-header__container mx-auto d-flex flex-row align-items-center justify-content-between px-4 px-sm-5 px-lg-10 h-100'>
                <div className='d-flex flex-row align-items-center h-100'>
                    <img
                        data-testid='logo-btn'
                        onClick={() => navigate('')}
                        className='component-header__logo h-100'
                        src={Logo}
                        alt=""
                    />
                    <ul className='d-none d-sm-flex flex-row align-items-center'>
                        {
                            routeMap.get(ProductModule.Main)!.children!.map(({ i18n, path }) => {
                                const isCurrentPage = new RegExp(`^${path}`).test(pathname.replace(/^\//, ''));
                                return <li
                                    key={path}
                                    className='component-header__item d-flex flex-row align-items-center justify-content-center'
                                >
                                    <NavLink
                                        className={`text-black-1--hover font-xs-lg font-lg-xl border-0 ${isCurrentPage ?
                                                'text-black-1 border-bottom-2 border-black-1 fw-bold' :
                                                'text-gray-2'
                                            }`}
                                        to={path}
                                    >
                                        {t(i18n)}
                                    </NavLink>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <LanguageDropdown classes='d-none d-sm-flex' />
                <em
                    className={`d-block d-sm-none icon-${isMobileMenuOpen ? 'close  font-md' : 'hamburger-menu font-4xl'} text-blue-2`}
                    onClick={() => setMenuOpen(!isMobileMenuOpen)}
                ></em>
            </section>
        </header>
        {
            isMobileMenuOpen &&
            <section
                className='d-flex flex-column justify-content-between align-items-start d-sm-none border-top-1 bg-white-1 border-gray-1 vw-100 layer-canvus position-fixed overflow-auto component-header__mobile-menu'
                style={{ height: mobileMenuHeight }}
            >
                <ul className='w-100'>
                    {
                        routeMap.get(ProductModule.Main)!.children!.map(({ i18n, path }) => <li
                            key={`mobile-menu-${path}`}
                            className='px-5 py-4 d-flex flex-row align-items-center justify-content-between border-bottom-1 border-gray-3'
                        >
                            <NavLink
                                onClick={() => setMenuOpen(false)}
                                className="font-lg text-gray-2"
                                to={path}
                            >
                                {t(i18n)}
                            </NavLink>
                        </li>
                        )
                    }
                </ul>
                <LanguageDropdown direction={Direction.Top} classes='ms-5 mb-10' />
            </section>
        }
    </>;
}

export default Header;
