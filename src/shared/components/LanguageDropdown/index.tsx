import { useTranslation } from 'react-i18next';
import './style.scss';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { Language } from '@shared/enums/common.enum';
import { IBaseComponentProp } from '@shared/interfaces/base-component.interface';

interface Props extends IBaseComponentProp {
}

const LanguageDropdown = ({ classes }: Props) => {
    const { t, i18n } = useTranslation();
    const [expand, setExpand] = useState(false);
    const dropdown = useRef<HTMLDivElement>(null);

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

    return <div
        ref={dropdown}
        className={`d-flex flex-row align-items-center position-relative text-orange-1 compnent-language-dropdown ${classes ?? ''}`}>
        <em className='me-2 me-lg-3 icon-global font-lg-4xl font-sm-lgx font-xxl'></em>
        <p className='font-xs-lg font-lg-xl me-2 me-lg-3'>{t(`languages.${i18n.language}`)}</p>
        <em
            data-testid='language-btn'
            onClick={() => setExpand(!expand)}
            style={{
                transition: '0.5s',
                transform: `${!expand ? 'rotate(-180deg)' : ''}`
            }}
            className='icon-arrow_up font-xs cursor-pointer'
        ></em>
        <ul
            data-testid='language-dropdown'
            className={`bg-white-1 font-xs-lg font-lg-xl px-2 py-7_5 border-radius-sm shadow-1 d-${expand ? 'flex flex-column' : 'none'}`}
        >
            {
                [Language.MandarinTraditional, Language.MandarinSimplified, Language.English].map(language => <li
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
}
export default LanguageDropdown;