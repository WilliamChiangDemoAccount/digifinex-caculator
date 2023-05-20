import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { TrustArticle, TrustService } from '@shared/enums/trust.enum';
import Category from '@modules/main/components/TrustArticleCategory';
import Article from '@modules/main/components/TrustArticle';

import './style.scss';
import { useWindowSize } from '@shared/hooks/useWindowSize';

interface Props {
    onSkip: () => void;
    /**
     * 桌面版切換文章時自動回到列表頂部，初次載入不執行
     * @param offset 指定高度
     */
    goTop: (offset?: number) => void;
}

const TrustArticleList = ({ onSkip, goTop }: Props) => {
    const { t } = useTranslation();
    const { width } = useWindowSize();
    const { serviceType } = useParams();
    const headerHeight: number = useMemo(() => width < 1440 ? 60 : 100, [width]);
    const [isOptionTrustExpand, setOptionTrustExpand] = useState(true);
    const [isFamilyTrustExpand, setFamilyTrustExpand] = useState(false);
    const enterpriseService = useRef<HTMLLIElement>(null);
    const personalService = useRef<HTMLLIElement>(null);
    const [{ section1, section2, section3, section4 }, setFamilyTrustChildrenExpand] = useState({
        section1: false,
        section2: false,
        section3: false,
        section4: false
    });
    const [isFamilyOfficeExpand, setFamilyOfficeExpand] = useState(false);
    const [activeService, setServiceActive] = useState<TrustService>(TrustService.Enterprise);
    const [activeArticle, setArtcleActive] = useState<TrustArticle>(TrustArticle.OptionScene);

    const switchArticle = useCallback((article: TrustArticle) => {
        const enterpriseArticles: TrustArticle[] = [TrustArticle.OptionScene, TrustArticle.OptionTarget, TrustArticle.OptionUsage];
        setTimeout(() => goTop((enterpriseArticles.includes(article) ?
            enterpriseService.current!.offsetTop :
            personalService.current!.offsetTop
        ) - headerHeight), 0);
        setArtcleActive(article);
    }, [setArtcleActive, goTop, headerHeight]);

    const activeEnterprise = useCallback((article: TrustArticle) => {
        switchArticle(article);
        setOptionTrustExpand(true);
        setFamilyTrustExpand(false);
        setFamilyOfficeExpand(false);
        setServiceActive(TrustService.Enterprise);
    }, [switchArticle]);

    useEffect(() => {
        switch (serviceType) {
            case TrustService.Enterprise:
                activeEnterprise(TrustArticle.OptionScene);
                break;
            case TrustService.Personal:
                setFamilyTrustExpand(true);
                setFamilyTrustChildrenExpand({ section1: true, section2: false, section3: false, section4: false });
                setFamilyOfficeExpand(false);
                setOptionTrustExpand(false);
                switchArticle(TrustArticle.RightIntroduction);
                setServiceActive(TrustService.Personal);
                break;
            default: break;
        }
    }, [serviceType, activeEnterprise, switchArticle]);

    return <div className='compnent-trust-article-list d-flex flex-row justify-content-between'>
        <ul className='compnent-trust-article-list__article-list border-gray-1'>
            <li
                ref={enterpriseService}
                className={`d-flex flex-row fw-bold white-space-nowrap ${activeService === TrustService.Enterprise ? 'bg-orange-1__before text-orange-1' : 'bg-gray-1__before text-gray-1'} compnent-trust-article-list__topic`}>
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
            <li
                ref={personalService}
                className={`mt-10 d-flex flex-row fw-bold white-space-nowrap ${activeService === TrustService.Personal ? 'bg-orange-1__before text-orange-1' : 'bg-gray-1__before text-gray-1'} compnent-trust-article-list__topic`}>
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
                        switchArticle(article);
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
                        switchArticle(article);
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
                        switchArticle(article);
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
                        switchArticle(article);
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
                    switchArticle(article);
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