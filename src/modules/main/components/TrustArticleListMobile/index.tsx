import { useTranslation } from 'react-i18next';
import enterpriseServiceIcon from 'assets/img/trust/icon-enterprise-service-mobile.svg';
import personalServiceIcon from 'assets/img/trust/icon-personal-service-mobile.svg';

import TrustArticleMobile from '@modules/main/components/TrustArticleMobile';
import { TrustArticle } from '@shared/enums/trust.enum';

import './style.scss';

interface Prop {
    onSkip: () => void
}

const TrustArticleListMobile = ({ onSkip }: Prop) => {
    const { t } = useTranslation();
    return <>
        <div className='d-flex flex-row align-items-start justify-content-between'>
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
        <h4 className='font-lg mt-3 text-blue-2'>{t('pages.trust.service.optionAwardTrust')}</h4>
        <TrustArticleMobile articles={[TrustArticle.OptionScene, TrustArticle.OptionTarget, TrustArticle.OptionUsage]} />
        <h3 className='font-xl d-flex flex-row align-items-center text-orange-1 pt-14'>
            <img src={personalServiceIcon} className='me-2' style={{ height: 24 }} alt="" />
            {t('pages.trust.service.personal')}
        </h3>
    </>
}

export default TrustArticleListMobile;