import { ProductModule } from '@shared/enums/modules.enum';
import './style.scss';
import { IBaseComponentProp } from '@shared/interfaces/base-component.interface';
import { routeMap } from '@utilities/config/routes';
import Logo from 'assets/img/logo.png';
import LanguageIcon from 'assets/img/icons/language.png';
import ArrowDownIcon from 'assets/img/icons/arrow-down.png';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import { resources } from '@utilities/config/i18n';

interface Props extends IBaseComponentProp {

}

const Header = ((prop: Props) => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const dropdown = useRef<HTMLDivElement>(null);
    const [expand, setExpand] = useState(false);

    useEffect(() => {
        let listener: any;
        if (dropdown.current) {
            listener = window.addEventListener('click', ({ target }) => {
                if (!dropdown.current?.contains(target as HTMLElement)) {
                    setExpand(false);
                }
            });
        }
        return () => window.removeEventListener('click', listener);
    }, [dropdown]);

    return <header className='bg-white-1 component-header py-3_5 py-lg-7_5' data-testid='header'>
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
                                className={`component-header__item d-flex flex-row align-items-center border-0 ${isCurrentPage ? 'border-bottom-2 border-black-1' : ''}`}
                            >
                                <NavLink
                                    className={`d-flex flex-row align-items-center text-black-1--hover font-xs-lg font-lg-xl ${isCurrentPage ? 'text-black-1' : 'text-gray-2'} `}
                                    to={path}
                                >
                                    {t(i18n)}
                                </NavLink>
                            </li>
                        })
                    }
                </ul>
            </div>
            <div ref={dropdown} className='d-none d-sm-flex flex-row align-items-center position-relative text-orange-1 font-xs-lg font-lg-xl component-header__language'>
                <img className='me-2' src={LanguageIcon} alt="" />
                <span>{t(`languages.${i18n.language}`)}</span>
                <img
                    data-testid='language-btn'
                    className='ms-2'
                    style={{ transform: `${expand ? 'rotate(-180deg)' : ''}` }}
                    src={ArrowDownIcon}
                    alt=""
                    onClick={() => setExpand(!expand)} />
                <ul
                    data-testid='language-dropdown'
                    className={`bg-white-1 px-2 py-7_5 border-radius-sm shadow-1 d-${expand ? 'flex flex-column' : 'none'}`}
                >
                    {
                        Object.keys(resources).map(language => <li
                            data-testid='language-dropdown-item'
                            key={language}
                            className={`font-xs-lg font-lg-xl px-5_5 text-nowrap user-select-none ${language === i18n.language ? 'bg-orange-1_20 text-orange' : 'text-gray-2'}`}
                            onClick={() => {
                                setExpand(false);
                                i18n.changeLanguage(language);
                            }}
                        >
                            {t(`languages.${language}`)}
                        </li>)
                    }
                </ul>
            </div>
        </section>
    </header>;
});

export default Header;
