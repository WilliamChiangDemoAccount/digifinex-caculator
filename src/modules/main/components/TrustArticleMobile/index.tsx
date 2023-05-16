import { TrustArticle } from '@shared/enums/trust.enum';
import './style.scss';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getSrc } from '@shared/helpers/file.helper';
import { useTouchMove } from '@shared/hooks/useTouchMove';
import { Direction } from '@shared/enums/common.enum';

interface Props {
    articles: TrustArticle[];
}

const TrustArticleMobile = ({ articles }: Props) => {
    const [showIndex, setShowIndex] = useState(0);
    const { ref } = useTouchMove({
        offset: 50,
        onTouchMove: direction => {
            switch (direction) {
                case Direction.Right:
                case Direction.TopRight:
                case Direction.BottomRight:
                    setShowIndex(showIndex - 1 >= 0 ? showIndex - 1 : articles.length - 1);
                    break;
                case Direction.Left:
                case Direction.TopLeft:
                case Direction.BottomLeft:
                    setShowIndex(showIndex + 1 < articles.length ? showIndex + 1 : 0);
                    break;
                default: break;
            }
        }
    });
    const { t } = useTranslation();
    return <section
        className='compnent-trust-article-mobile mt-3'
        ref={ref}
    >
        <ul className='d-flex flex-row flex-nowrap align-items-stretch mb-22'>
            {
                articles.map(article =>
                    <li
                        key={article}
                        className='compnent-trust-article-mobile__card position-relative me-4'
                        style={{ transform: `translateX(calc(${-100 * showIndex}% - ${1 * showIndex}rem))` }}
                    >
                        {
                            article === TrustArticle.RightUsage ?
                                <section className='p-4 pb-6 bg-white border-radius-sm h-100 w-100'>
                                    <p className='font-sm fw-bold text-blue-1'>{t('pages.trust.article.rightUsage.label')}</p>
                                    <ul className='compnent-trust-article-mobile__usage mt-4'>
                                        {[1, 2, 3, 4].map(usage => <li key={usage}>
                                            <input className='d-none' type="checkbox" id={`trust-right-usage-${usage}`} />
                                            <div className='d-flex flex-row align-items-center justify-content-between'>
                                                <h3 className='d-flex flex-row align-items-center font-sm'>
                                                    <img className='me-2' src={getSrc(`right-usage-${usage}`, 'trust')} alt="" />
                                                    {t(`pages.trust.article.rightUsage.usage-${usage}.title`)}
                                                </h3>
                                                <label className='icon-arrow_up cursor-pointer' htmlFor={`trust-right-usage-${usage}`}></label>
                                            </div>
                                            <p className='d-none mt-2 font-sm text-gray-2'>{t(`pages.trust.article.rightUsage.usage-${usage}.content`)}</p>
                                        </li>
                                        )}
                                    </ul>
                                </section>
                                : article === TrustArticle.CharitableUsage ?
                                    <section className='p-4 pb-6 bg-white border-radius-sm h-100 w-100'>
                                        <p className='font-sm fw-bold text-blue-1'>{t('pages.trust.article.charitableUsage.label')}</p>
                                        <ul className='compnent-trust-article-mobile__usage mt-4'>
                                            {[1, 2].map(usage => <li key={usage}>
                                                <input className='d-none' type="checkbox" id={`trust-charitable-usage-${usage}`} />
                                                <div className='d-flex flex-row align-items-center justify-content-between'>
                                                    <h3 className='d-flex flex-row align-items-center font-sm'>
                                                        <img className='me-2' src={getSrc(`charitable-usage-${usage}`, 'trust')} alt="" />
                                                        {t(`pages.trust.article.charitableUsage.usage-${usage}.title`)}
                                                    </h3>
                                                    <label className='icon-arrow_up cursor-pointer' htmlFor={`trust-charitable-usage-${usage}`}></label>
                                                </div>
                                                <p className='d-none mt-2 font-sm text-gray-2'>{t(`pages.trust.article.charitableUsage.usage-${usage}.content`)}</p>
                                            </li>
                                            )}
                                        </ul>
                                    </section>
                                    : article === TrustArticle.FamilyOthers ?
                                        <section className='p-4 bg-white border-radius-sm w-100'>
                                            <p className='font-sm fw-bold text-blue-1'>{t('pages.trust.article.familyOthers.label')}</p>
                                            <div className='py-4 d-flex flex-row align-items-center justify-content-between'>
                                                <p className='text-black-1 font-sm fw-bold'>
                                                    {t('pages.trust.article.familyOthers.question-1')}
                                                </p>
                                                <em
                                                    className='text-white-1 d-flex align-items-center justify-content-center icon-arrow_right rounded-circle bg-blue-2'
                                                    style={{
                                                        width: 20,
                                                        height: 20
                                                    }}
                                                ></em>
                                            </div>
                                            <div className='pt-4 pb-1 border-top-1 border-gray-1 d-flex flex-row align-items-center justify-content-between'>
                                                <p className='text-black-1 font-sm fw-bold'>
                                                    {t('pages.trust.article.familyOthers.question-2')}
                                                </p>
                                                <em
                                                    className='text-white-1 d-flex align-items-center justify-content-center icon-arrow_right rounded-circle bg-blue-2'
                                                    style={{
                                                        width: 20,
                                                        height: 20
                                                    }}
                                                ></em>
                                            </div>
                                        </section>
                                        : <>
                                            <section className='p-4 bg-white border-radius-sm h-100 w-100 pb-23_5'>
                                                <p className='font-sm fw-bold text-blue-1'>{t(`pages.trust.article.${article}.label`)}</p>
                                                {
                                                    article === TrustArticle.OptionTarget || article === TrustArticle.OptionUsage ?
                                                        <ul className='mt-4 font-sm text-gray-2 ps-4 compnent-trust-article-mobile__list'>
                                                            <li>{t(`pages.trust.article.${article}.content-1`)}</li>
                                                            <li>{t(`pages.trust.article.${article}.content-2`)}</li>
                                                            {
                                                                article === TrustArticle.OptionUsage &&
                                                                <li>{t(`pages.trust.article.${article}.content-3`)}</li>
                                                            }
                                                        </ul> :
                                                        <p className='font-sm mt-4 text-gray-2'>{t(`pages.trust.article.${article}.content`)}</p>
                                                }
                                            </section>
                                            <img className='position-absolute layer-cover' src={getSrc(`mobile/${article}-mobile`, 'trust')} alt="" />
                                        </>
                        }
                    </li>
                )
            }
        </ul>
        <nav className='compnent-trust-article-mobile__control-bar d-flex flex-row align-items-center justify-content-center pt-6'>
            {articles.map((_, index) =>
                <button
                    key={_}
                    onClick={() => setShowIndex(index)}
                    className={`${index === articles.length - 1 ? '' : 'me-4'} ${index === showIndex ? 'bg-blue-2' : 'bg-gray-1'} rounded-circle`}
                />)}
        </nav>
    </section>
}
export default TrustArticleMobile;