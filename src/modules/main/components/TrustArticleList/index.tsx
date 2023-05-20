import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { TrustArticle, TrustService } from '@shared/enums/trust.enum';
import Category from '@modules/main/components/TrustArticleCategory';
import Article from '@modules/main/components/TrustArticle';

import './style.scss';

interface Props {
    onSkip: () => void;
    /**
     * 桌面版切換文章時自動回到列表頂部，初次載入不執行
     * @param force 初次載入強制執行
     */
    goTop: (force?: boolean) => void;
}

const TrustArticleList = ({ onSkip, goTop }: Props) => {
    const { t } = useTranslation();
    const { serviceType } = useParams();
    const [isOptionTrustExpand, setOptionTrustExpand] = useState(true);
    const [isFamilyTrustExpand, setFamilyTrustExpand] = useState(false);
    const [{ section1, section2, section3, section4 }, setFamilyTrustChildrenExpand] = useState({
        section1: false,
        section2: false,
        section3: false,
        section4: false
    });
    const [isFamilyOfficeExpand, setFamilyOfficeExpand] = useState(false);
    const [activeService, setServiceActive] = useState<TrustService>(TrustService.Enterprise);
    const [activeArticle, setArtcleActive] = useState<TrustArticle>(TrustArticle.OptionScene);

    const activeEnterprise = useCallback((article: TrustArticle) => {
        setArtcleActive(article);
        setOptionTrustExpand(true);
        setFamilyTrustExpand(false);
        setFamilyOfficeExpand(false);
        setServiceActive(TrustService.Enterprise);
    }, []);

    useEffect(() => goTop(), [activeArticle, goTop]);
    useEffect(() => {
        switch (serviceType) {
            case TrustService.Enterprise:
                activeEnterprise(TrustArticle.OptionScene);
                goTop(true);
                break;
            case TrustService.Personal:
                setFamilyTrustExpand(true);
                setFamilyTrustChildrenExpand({ section1: true, section2: false, section3: false, section4: false });
                setFamilyOfficeExpand(false);
                setOptionTrustExpand(false);
                setArtcleActive(TrustArticle.RightIntroduction);
                setServiceActive(TrustService.Personal);
                goTop(true);
                break;
            default: break;
        }
    }, [serviceType, activeEnterprise, goTop]);

    return <div className='compnent-trust-article-list d-flex flex-row justify-content-between'>
        <ul className='compnent-trust-article-list__article-list border-gray-1'>
            <li className={`d-flex flex-row fw-bold ${activeService === TrustService.Enterprise ? 'bg-orange-1__before text-orange-1' : 'bg-gray-1__before text-gray-1'} compnent-trust-article-list__topic`}>
                {t('pages.trust.service.enterprise')}
            </li>
            <Category
                label={'pages.trust.service.optionAwardTrust'}
                classes='compnent-trust-article-list__category'
                articles={[TrustArticle.OptionScene, TrustArticle.OptionTarget, TrustArticle.OptionUsage]}
                activeArticle={activeArticle}
                onArticleClick={article => activeEnterprise(article)}
                isExpand={isOptionTrustExpand}
                onExpand={() => setOptionTrustExpand(!isOptionTrustExpand)} />
            <li className={`mt-10 d-flex flex-row fw-bold ${activeService === TrustService.Personal ? 'bg-orange-1__before text-orange-1' : 'bg-gray-1__before text-gray-1'} compnent-trust-article-list__topic`}>
                {t('pages.trust.service.personal')}
            </li>
            <Category
                label={'pages.trust.service.familyTrust'}
                classes='compnent-trust-article-list__category'
                articles={[
                    TrustArticle.RightIntroduction,
                    TrustArticle.RightUsage,
                    TrustArticle.InsuranceIntroduction,
                    TrustArticle.InsuranceUsage,
                    TrustArticle.ForeignGrantorIntroduction,
                    TrustArticle.ForeignGrantorUsage,
                    TrustArticle.CharitableIntroduction,
                    TrustArticle.CharitableUsage
                ]}
                activeArticle={activeArticle}
                isExpand={isFamilyTrustExpand}
                onExpand={() => setFamilyTrustExpand(!isFamilyTrustExpand)}>
                <Category
                    hideArrow
                    label={'pages.trust.service.keepRightTrust'}
                    classes='compnent-trust-article-list__sub-category'
                    articles={[TrustArticle.RightIntroduction, TrustArticle.RightUsage]}
                    activeArticle={activeArticle}
                    onArticleClick={article => {
                        setFamilyTrustExpand(true);
                        setFamilyTrustChildrenExpand({ section1: true, section2: false, section3: false, section4: false });
                        setFamilyOfficeExpand(false);
                        setOptionTrustExpand(false);
                        setArtcleActive(article);
                        setServiceActive(TrustService.Personal);
                    }}
                    isExpand={section1}
                    onExpand={() => setFamilyTrustChildrenExpand({ section1: !section1, section2, section3, section4 })}
                />
                <Category
                    hideArrow
                    label={'pages.trust.service.insuranceTrust'}
                    classes='compnent-trust-article-list__sub-category'
                    articles={[TrustArticle.InsuranceIntroduction, TrustArticle.InsuranceUsage]}
                    activeArticle={activeArticle}
                    onArticleClick={article => {
                        setFamilyTrustExpand(true);
                        setFamilyTrustChildrenExpand({ section1: false, section2: true, section3: false, section4: false });
                        setFamilyOfficeExpand(false);
                        setOptionTrustExpand(false);
                        setArtcleActive(article);
                        setServiceActive(TrustService.Personal);
                    }}
                    isExpand={section2}
                    onExpand={() => setFamilyTrustChildrenExpand({ section1, section2: !section2, section3, section4 })}
                />
                <Category
                    hideArrow
                    label={'pages.trust.service.foreignGrantorTrust'}
                    classes='compnent-trust-article-list__sub-category'
                    articles={[TrustArticle.ForeignGrantorIntroduction, TrustArticle.ForeignGrantorUsage]}
                    activeArticle={activeArticle}
                    onArticleClick={article => {
                        setFamilyTrustExpand(true);
                        setFamilyTrustChildrenExpand({ section1: false, section2: false, section3: true, section4: false });
                        setFamilyOfficeExpand(false);
                        setOptionTrustExpand(false);
                        setArtcleActive(article);
                        setServiceActive(TrustService.Personal);
                    }}
                    isExpand={section3}
                    onExpand={() => setFamilyTrustChildrenExpand({ section1, section2, section3: !section3, section4 })}
                />
                <Category
                    hideArrow
                    label={'pages.trust.service.charitableTrust'}
                    classes='compnent-trust-article-list__sub-category'
                    articles={[TrustArticle.CharitableIntroduction, TrustArticle.CharitableUsage]}
                    activeArticle={activeArticle}
                    onArticleClick={article => {
                        setFamilyTrustExpand(true);
                        setFamilyTrustChildrenExpand({ section1: false, section2: false, section3: false, section4: true });
                        setFamilyOfficeExpand(false);
                        setOptionTrustExpand(false);
                        setArtcleActive(article);
                        setServiceActive(TrustService.Personal);
                    }}
                    isExpand={section4}
                    onExpand={() => setFamilyTrustChildrenExpand({ section1, section2, section3, section4: !section4 })}
                />
            </Category>
            <Category
                hideBorder
                label={'pages.trust.service.familyOffice'}
                classes='compnent-trust-article-list__category'
                articles={[TrustArticle.FamilyOfficeIntroduction, TrustArticle.FamilyOfficeUsage, TrustArticle.FamilyOthers]}
                activeArticle={activeArticle}
                onArticleClick={article => {
                    setFamilyOfficeExpand(true);
                    setFamilyTrustExpand(false);
                    setOptionTrustExpand(false);
                    setArtcleActive(article);
                    setServiceActive(TrustService.Personal);
                }}
                isExpand={isFamilyOfficeExpand}
                onExpand={() => setFamilyOfficeExpand(!isFamilyOfficeExpand)} />
        </ul>
        <article className='d-flex flex-column align-items-end ms-6'>
            <button
                className='d-flex flex-row align-items-center font-lg text-gray-2 fw-normal mb-30 mb-lg-15 compnent-trust-article-list__skip'
                onClick={onSkip}
            >
                {t('pages.trust.skipService')}
                <em className='icon-arrow_right bg-gray-2 text-white-1 rounded-circle ms-2 font-xs d-flex justify-content-center align-items-center'></em>
            </button>
            <Article activeArticle={activeArticle} />
        </article>
    </div >;
}
export default TrustArticleList;