import { useMemo } from 'react';
import { TrustArticle } from '@shared/enums/trust.enum';
import { useTranslation } from 'react-i18next';
import { IBaseComponentProp } from '@shared/interfaces/base-component.interface';

import './style.scss';

interface Props extends IBaseComponentProp {
    label: string;
    onExpand: () => void;
    onArticleClick?: (article: TrustArticle) => void;
    isExpand: boolean;
    /**
     * 該分類的所屬文章，當前文章在分類文章內時該分類active
     */
    articles: TrustArticle[];
    /**
     * 當前文章
     */
    activeArticle: TrustArticle;
    hideArrow?: boolean;
}

const TrustArticleCategory = ({ label, children, onExpand, onArticleClick, isExpand, articles, activeArticle, classes, hideArrow = false }: Props) => {
    const { t } = useTranslation();
    const isActive = useMemo(() => articles.some(article => article === activeArticle), [articles, activeArticle]);
    return <>
        <li className={`mt-10 d-flex fw-bold flex-row align-items-start  ${isActive ? 'bg-blue-2__before text-blue-2' :
            'bg-gray-1__before text-gray-1'}  ${classes ?? ''}`}>
            <span
                className={`d-flex flex-row align-items-center ${hideArrow ? 'cursor-pointer' : ''}`}
                onClick={() => {
                    if (hideArrow) {
                        onExpand();
                    }
                }}
            >
                {t(label)}
                {
                    !hideArrow && <em
                        style={{ transform: `rotate(${isExpand ? 0 : 180}deg)` }}
                        onClick={() => onExpand()}
                        className='icon-arrow_up ms-3 font-lg fw-bold cursor-pointer'></em>
                }
            </span>
        </li>
        {isExpand && (children ?? articles.map((article, index) =>
            <li
                key={article}
                className={`compnent-trust-article-list__article ${index === (articles.length - 1) ? 'compnent-trust-article-list__article--last' : ''} mt-10 fw-bold cursor-pointer text-gray user-select-none ${activeArticle === article ? 'text-blue-1' : 'text-gray-2'}`}
                onClick={() => {
                    if (onArticleClick) {
                        onArticleClick(article);
                    }
                }}
            >
                {t(`pages.trust.article.${article}.label`)}
            </li>)
        )}
    </>
}

export default TrustArticleCategory;