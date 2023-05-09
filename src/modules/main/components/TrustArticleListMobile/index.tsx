import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';

import enterpriseServiceIcon from 'assets/img/trust/icon-enterprise-service-mobile.svg';
import personalServiceIcon from 'assets/img/trust/icon-personal-service-mobile.svg';

import TrustArticleMobile from '@modules/main/components/TrustArticleMobile';
import { TrustArticle, TrustService } from '@shared/enums/trust.enum';

import './style.scss';

interface Prop {
    onSkip: () => void
}

const TrustArticleListMobile = ({ onSkip }: Prop) => {
    const { t } = useTranslation();
    const { serviceType } = useParams();
    const enterprise = useRef<HTMLDivElement>(null);
    const personal = useRef<HTMLDivElement>(null);
    useEffect(() => {
        switch (serviceType) {
            case TrustService.Enterprise:
                window.scrollTo({
                    top: enterprise.current?.offsetTop,
                    behavior: 'smooth'
                });
                break;
            case TrustService.Personal:
                window.scrollTo({
                    top: personal.current?.offsetTop,
                    behavior: 'smooth'
                });
                break;
            default: break;
        }
    }, [serviceType]);
    return <>
        <div ref={enterprise} className='d-flex flex-row align-items-start justify-content-between'>
            <h3 className='font-xl d-flex flex-row align-items-center text-orange-1'>
                <img src={enterpriseServiceIcon} className='me-2' style={{ height: 24 }} alt="" />
                {t('pages.trust.service.enterprise')}
            </h3>
            <button
                className='font-sm d-flex flex-row align-items-center text-gray-2'
                onClick={onSkip}
            >
                {t('pages.trust.skipService')}
                <em
                    className='ms-3 d-flex align-items-center justify-content-center icon-arrow_right bg-gray-2 text-white-1 rounded-circle font-xs'
                    style={{
                        width: '1rem',
                        height: '1rem',
                        transform: 'rotate(90deg)'
                    }}

                ></em>
            </button>
        </div>
        <h4 className='font-lg mt-3 fw-bold text-blue-2'>{t('pages.trust.service.optionAwardTrust')}</h4>
        <TrustArticleMobile articles={[TrustArticle.OptionScene, TrustArticle.OptionTarget, TrustArticle.OptionUsage]} />
        <h3 ref={personal} className='font-xl d-flex flex-row align-items-center text-orange-1 pt-14'>
            <img src={personalServiceIcon} className='me-2' style={{ height: 24 }} alt="" />
            {t('pages.trust.service.personal')}
        </h3>
        <h4 className='font-lg mt-3 fw-bold text-blue-2'>{t('pages.trust.service.familyTrust')}</h4>
        <p className='font-sm text-gray-2 mt-3'>{t('pages.trust.service.familyTrustIntroduction')}</p>
        <h4 className='font-lg mt-5 fw-bold text-blue-1'>{t('pages.trust.service.keepRightTrust')}</h4>
        <TrustArticleMobile articles={[TrustArticle.RightIntroduction, TrustArticle.RightUsage]} />
        <h4 className='font-lg mt-12 fw-bold text-blue-1'>{t('pages.trust.service.insuranceTrust')}</h4>
        <TrustArticleMobile articles={[TrustArticle.InsuranceIntroduction, TrustArticle.InsuranceUsage]} />
        <h4 className='font-lg mt-12 fw-bold text-blue-1'>{t('pages.trust.service.foreignGrantorTrust')}</h4>
        <TrustArticleMobile articles={[TrustArticle.ForeignGrantorIntroduction, TrustArticle.ForeignGrantorUsage]} />
        <h4 className='font-lg mt-12 fw-bold text-blue-1'>{t('pages.trust.service.charitableTrust')}</h4>
        <TrustArticleMobile articles={[TrustArticle.CharitableIntroduction, TrustArticle.CharitableUsage]} />
        <h4 className='font-lg mt-12 fw-bold text-blue-1'>{t('pages.trust.service.familyOffice')}</h4>
        <TrustArticleMobile articles={[TrustArticle.FamilyOfficeIntroduction, TrustArticle.FamilyOfficeUsage, TrustArticle.FamilyOthers]} />
    </>
}

export default TrustArticleListMobile;