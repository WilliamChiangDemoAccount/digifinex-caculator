import { TrustArticle as ETrustArticle } from '@shared/enums/trust.enum';
import './style.scss';
import { useTranslation } from 'react-i18next';

interface Props {
    activeArticle: ETrustArticle
}

const getSvg = (fileName: string): string => require(`assets/img/trust/${fileName}.svg`);

const TrustArticle = ({ activeArticle }: Props) => {
    const { t } = useTranslation();
    return activeArticle === ETrustArticle.RightUsage ? <section className='bg-white-1 px-8 px-lg-12_5 py-10 py-lg-20 border-radius-sm compnent-trust-article__usage'>
        <h3 className='text-blue-1 font-xl'>{t('pages.trust.article.rightUsage.label')}</h3>
        <ul className='d-flex flex-row flex-wrap'>
            {[1, 2, 3, 4].map(usage => <li key={usage}>
                <h3 className='d-flex flex-row align-items-center'>
                    <img className='me-4' src={getSvg(`right-usage-${usage}`)} alt="" />
                    {t(`pages.trust.article.rightUsage.usage-${usage}.title`)}
                </h3>
                <span className='d-inline-block mt-4 font-lg text-gray-2'>{t(`pages.trust.article.rightUsage.usage-${usage}.content`)}</span>
            </li>)}
        </ul>
    </section> :
        activeArticle === ETrustArticle.CharitableUsage ? <section className='bg-white-1 px-8 px-lg-12_5 py-10 py-lg-20 border-radius-sm compnent-trust-article__usage'>
            <h3 className='text-blue-1 font-xl'>{t('pages.trust.article.charitableUsage.label')}</h3>
            <ul className='d-flex flex-row flex-wrap'>
                {[1, 2].map(usage => <li key={usage}>
                    <h3 className='d-flex flex-row align-items-center'>
                        <img className='me-4' src={getSvg(`charitable-usage-${usage}`)} alt="" />
                        {t(`pages.trust.article.charitableUsage.usage-${usage}.title`)}
                    </h3>
                    <span className='d-inline-block font-lg mt-4 text-gray-2'>{t(`pages.trust.article.charitableUsage.usage-${usage}.content`)}</span>
                </li>)}
            </ul>
        </section> :
            activeArticle === ETrustArticle.FamilyOthers ? <section className='bg-white-1 px-8 px-lg-12_5 py-10 py-lg-20 border-radius-sm compnent-trust-article__usage'>
                <h3 className='text-blue-1 font-xl'>{t('pages.trust.article.charitableUsage.label')}</h3>
                <div className='d-flex flex-row align-items-center mt-8 w-100 pb-7_5 justify-content-between'>
                    <h3 className='text-black font-xl'>{t('pages.trust.article.familyOthers.question-1')}</h3>
                    <em className='icon-arrow_right cursor-pointer bg-blue-2 text-white-1 rounded-circle ms-2 font-xl d-flex justify-content-center align-items-center'></em>
                </div>
                <div className='d-flex flex-row align-items-center w-100 pt-7_5 border-top-1 border-gray-1 justify-content-between'>
                    <h3 className='text-black font-xl'>{t('pages.trust.article.familyOthers.question-2')}</h3>
                    <em className='icon-arrow_right cursor-pointer bg-blue-2 text-white-1 rounded-circle ms-2 font-xl d-flex justify-content-center align-items-center'></em>
                </div>
            </section> :
                <section className='d-flex flex-row align-items-center'>
                    <div className='py-20 ps-12 pe-4 bg-white-1 compnent-trust-article__content'>
                        <span className='d-block mb-2_5 font-xl fw-bold text-blue-1'>{t(`pages.trust.article.${activeArticle}.label`)}</span>
                        <span className={`d-block text-gray-2 font-lg ${activeArticle === ETrustArticle.OptionTarget || activeArticle === ETrustArticle.OptionUsage ? 'ps-4' : ''}`}>
                            {
                                activeArticle === ETrustArticle.OptionTarget ?
                                    <ul className='mt-3'>
                                        <li>{t('pages.trust.article.optionTarget.content-1')}</li>
                                        <li>{t('pages.trust.article.optionTarget.content-2')}</li>
                                    </ul> :
                                    activeArticle === ETrustArticle.OptionUsage ?
                                        <ul className='mt-3'>
                                            <li>{t('pages.trust.article.optionUsage.content-1')}</li>
                                            <li>{t('pages.trust.article.optionUsage.content-2')}</li>
                                            <li>{t('pages.trust.article.optionUsage.content-3')}</li>
                                        </ul>
                                        : t(`pages.trust.article.${activeArticle}.content`)}
                        </span>
                    </div>
                    <img src={getSvg(activeArticle)} className='compnent-trust-article__illustration' alt="" />
                </section>
}

export default TrustArticle;