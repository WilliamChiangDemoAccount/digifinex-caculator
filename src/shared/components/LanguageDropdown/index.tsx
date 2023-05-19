import { useTranslation } from 'react-i18next';
import './style.scss';
import { useEffect, useMemo, useState } from 'react';
import { useRef } from 'react';
import { Direction, Language, LocalStorageItem } from '@shared/enums/common.enum';
import { IBaseComponentProp } from '@shared/interfaces/base-component.interface';

interface Props extends IBaseComponentProp {
    direction?: Direction.Top | Direction.Bottom
}

/**
 * 設置網站語系
 * @param language 目標語系
 * @param webTitle 翻譯後的網站標題
 */
export const setHtmlLang = (language: Language, webTitle: string) => {
    const rootElement = document.getElementsByTagName('html')[0];
    const titleElement = rootElement.children[0].getElementsByTagName('title')[0];
    localStorage.setItem(LocalStorageItem.Language, language);
    rootElement.setAttribute('lang', language);
    titleElement.textContent = webTitle;
}

const LanguageDropdown = ({ classes, direction = Direction.Bottom }: Props) => {
    const { t, i18n } = useTranslation();
    const [expand, setExpand] = useState(false);
    const dropdown = useRef<HTMLDivElement>(null);
    const isTop = useMemo(() => direction === Direction.Top, [direction]);
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
            className={`bg-white-1 font-xs-lg font-lg-xl px-2 py-6 py-sm-7 border-radius-sm shadow-1 d-${expand ? 'flex flex-column' : 'none'}`}
            style={{
                top: `${isTop ? 0 : 100}%`,
                transform: `translateX(-50%) ${isTop ? 'translateY(calc(-100% - 0.5rem))' : ''}`
            }}
        >
            {
                [Language.MandarinTraditional, Language.MandarinSimplified, Language.English].map(language => <li
                    data-testid='language-dropdown-item'
                    key={language}
                    className={`font-xs-lg font-lg-xl py-0_5 px-5_5 text-nowrap user-select-none ${language === i18n.language ? 'bg-orange-1_20 text-orange' : 'text-gray-2'} d-flex justify-content-center align-items-center`}
                    onClick={() => {
                        setExpand(false);
                        i18n.changeLanguage(language);
                        setHtmlLang(language, t('title'));
                    }}
                >
                    {t(`languages.${language}`)}
                </li>)
            }
        </ul>
    </div>
}
export default LanguageDropdown;