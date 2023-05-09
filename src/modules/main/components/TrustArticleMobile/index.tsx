import { TrustArticle } from '@shared/enums/trust.enum';
import './style.scss';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import svg from 'assets/img/trust/optionScene-mobile.svg';

interface Props {
    articles: TrustArticle[];
}

const TrustArticleMobile = ({ articles }: Props) => {
    const [showIndex, setShowIndex] = useState(0);
    const { t } = useTranslation();
    return <section className='compnent-trust-article-mobile mt-3'>
        <ul className='d-flex flex-row flex-nowrap align-items-stretch mb-22'>
            {
                articles.map((article, index) =>
                    <li
                        key={article}
                        className='compnent-trust-article-mobile__card position-relative me-4'
                        style={{ transform: `translateX(calc(${-100 * showIndex}% - ${1 * showIndex}rem))` }}
                    >
                        <section className='p-4 bg-white border-radius-sm h-100 w-100 pb-23_5'>
                            <p className='font-sm text-blue-1'>{t(`pages.trust.article.${article}.label`)}</p>
                            <p className='font-sm mt-4 text-blue-2'>{t(`pages.trust.article.${article}.content`)}</p>
                        </section>
                        <img className='position-absolute layer-cover' src={svg} alt="" />
                    </li>
                )
            }
        </ul>
        <nav className='compnent-trust-article-mobile__control-bar d-flex flex-row align-items-center justify-content-center mt-6'>
            {articles.map((_, index) =>
                <button
                    onClick={() => setShowIndex(index)}
                    className={`${index === articles.length - 1 ? '' : 'me-4'} ${index === showIndex ? 'bg-blue-2' : 'bg-gray-1'} rounded-circle`}
                />)}
        </nav>
    </section>
}
export default TrustArticleMobile;