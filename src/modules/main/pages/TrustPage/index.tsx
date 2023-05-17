import ContentLayout from '@shared/components/ContentLayout';
import './style.scss';
import { useTranslation } from 'react-i18next';
import TrustArticleList from '@modules/main/components/TrustArticleList';
import { useRef } from 'react';
import TrustArticleListMobile from '@modules/main/components/TrustArticleListMobile';
import advance1Svg from 'assets/img/trust/trust-advance-1.svg';
import advance2Svg from 'assets/img/trust/trust-advance-2.svg';
import advance3Svg from 'assets/img/trust/trust-advance-3.svg';
import advance4Svg from 'assets/img/trust/trust-advance-4.svg';
import securityAssetsSvg from 'assets/img/trust/security-assets.svg';
import securityDataSvg from 'assets/img/trust/security-data.svg';
import customerMedicalSvg from 'assets/img/trust/customer-medical.svg';
import customerTechSvg from 'assets/img/trust/customer-technology.svg';
import customerNetworkSvg from 'assets/img/trust/customer-network.svg';

const TrustPage = () => {
    const { t } = useTranslation();
    const service = useRef<HTMLDivElement>(null);
    const advance = useRef<HTMLDivElement>(null);
    const isMobile = window.innerWidth <= 768;
    return <ContentLayout classes='page-trust' testId="TrustPage">
        <section className='d-flex flex-column justify-content-start justify-content-sm-center px-5 pt-12 pb-14 page-trust__banner'>
            <h1 className='text-orange-1 text-start text-sm-center'>{t('pages.trust.banner.title')}</h1>
            <h1 className='text-white-1 text-start text-sm-center'>{t('pages.trust.banner.subtitle')}</h1>
        </section>
        <section ref={service} className='d-none d-sm-block pt-sm-20 pt-lg-30'>
            <TrustArticleList
                goTop={(force?: boolean) => {
                    if ((window.scrollY > 0 || force) && !isMobile) {
                        window.scrollTo({
                            top: service.current?.offsetTop,
                            behavior: 'smooth'
                        });
                    }
                }}
                onSkip={() => window.scrollTo({
                    top: advance.current?.offsetTop,
                    behavior: 'smooth'
                })} />
        </section>
        <section className='d-block d-sm-none px-5 pt-10 pb-20'>
            <TrustArticleListMobile
                onSkip={() => window.scrollTo({
                    top: advance.current?.offsetTop,
                    behavior: 'smooth'
                })}
            />
        </section>
        <section ref={advance} className='page-trust__advance'>
            <h3 className='text-white-1 text-center'>{t('pages.trust.advance.title')}</h3>
            <ul className='d-flex flex-column flex-sm-row mt-7 mt-sm-7_5 mt-lg-15 flex-wrap mx-auto'>
                <li className='bg-white-1 border-radius-sm py-6 px-3 py-sm-5 px-sm-5 py-lg-8 px-lg-8'>
                    <div className='d-flex flex-row align-items-center'>
                        <img className='me-3 me-sm-4 me-lg-6_5' src={advance1Svg} alt="" />
                        <h4 className='text-blue-2 font-lg font-sm-xl font-lg-3xl'>{t('pages.trust.advance.advance-1.title')}</h4>
                    </div>
                    <p className='ps-11 ps-sm-13 ps-lg-18_5 font-sm text-gray-2 font-lg-lg mt-3 mt-sm-2 mt-lg-5_5'>{t('pages.trust.advance.advance-1.content')}</p>
                </li>
                <li className='bg-white-1 border-radius-sm mt-5 mt-sm-0 py-6 px-3 py-sm-5 px-sm-5 py-lg-8 px-lg-8'>
                    <div className='d-flex flex-row align-items-center'>
                        <img className='me-3 me-sm-4 me-lg-6_5' src={advance2Svg} alt="" />
                        <h4 className='text-blue-2 font-lg font-sm-xl font-lg-3xl'>{t('pages.trust.advance.advance-2.title')}</h4>
                    </div>
                    <p className='ps-11 ps-sm-13 ps-lg-18_5 font-sm text-gray-2 font-lg-lg mt-3 mt-sm-2 mt-lg-5_5'>{t('pages.trust.advance.advance-2.content')}</p>
                </li>
                <li className='bg-white-1 border-radius-sm mt-5 mt-lg-7_5 py-6 px-3 py-sm-5 px-sm-5 py-lg-8 px-lg-8'>
                    <div className='d-flex flex-row align-items-center'>
                        <img className='me-3 me-sm-4 me-lg-6_5' src={advance3Svg} alt="" />
                        <h4 className='text-blue-2 font-lg font-sm-xl font-lg-3xl'>{t('pages.trust.advance.advance-3.title')}</h4>
                    </div>
                    <p className='ps-11 ps-sm-13 ps-lg-18_5 font-sm text-gray-2 font-lg-lg mt-3 mt-sm-2 mt-lg-5_5'>{t('pages.trust.advance.advance-3.content')}</p>
                </li>
                <li className='bg-white-1 border-radius-sm mt-5 mt-lg-7_5 py-6 px-3 py-sm-5 px-sm-5 py-lg-8 px-lg-8'>
                    <div className='d-flex flex-row align-items-center'>
                        <img className='me-3 me-sm-4 me-lg-6_5' src={advance4Svg} alt="" />
                        <h4 className='text-blue-2 font-lg font-sm-xl font-lg-3xl'>{t('pages.trust.advance.advance-4.title')}</h4>
                    </div>
                    <p className='ps-11 ps-sm-13 ps-lg-18_5 font-sm text-gray-2 font-lg-lg mt-3 mt-sm-2 mt-lg-5_5'>{t('pages.trust.advance.advance-4.content')}</p>
                </li>
            </ul>
        </section>
        <section className='mt-15 px-5 mt-sm-20 px-sm-26 0 px-lg-53 page-trust__security'>
            <h2 className='text-blue-2 text-center'>{t('pages.trust.security.title')}</h2>
            <ul className='mt-7 mt-sm-10 mt-lg-15 d-flex flex-row'>
                <li className='bg-white-1 border-radius-sm me-3 me-sm-4 me-lg-6 w-50 flex-grow-1'>
                    <img src={securityAssetsSvg} className='w-100' alt="" />
                    <section className='pt-3 px-3 pb-4 pt-sm-5 px-sm-5 pb-sm-15 pt-lg-13_5 px-lg-8 pb-lg-20'>
                        <h3 className='text-black-1 font-xs-lg font-sm-xl font-lg-3xl'>{t('pages.trust.security.assets.title')}</h3>
                        <p className='mt-2 mt-sm-3 mt-lg-9 text-gray-2 font-sm font-lg-lg'>
                            {t('pages.trust.security.assets.content')}
                        </p>
                    </section>
                </li>
                <li className='bg-white-1 border-radius-sm w-50 flex-grow-1'>
                    <img src={securityDataSvg} className='w-100' alt="" />
                    <section className='pt-3 px-3 pb-4 pt-sm-5 px-sm-5 pb-sm-15 pt-lg-13_5 px-lg-8 pb-lg-20'>
                        <h3 className='text-black-1 font-xs-lg font-sm-xl font-lg-3xl'>{t('pages.trust.security.data.title')}</h3>
                        <p className='mt-2 mt-sm-3 mt-lg-9 text-gray-2 font-sm font-lg-lg'>
                            {t('pages.trust.security.data.content')}
                        </p>
                    </section>
                </li>
            </ul>
        </section>
        <section className='mt-15 pb-21 mt-sm-20 pb-sm-40 mt-lg-30 pb-lg-50 page-trust__customer'>
            <h2 className='text-blue-2 text-center'>{t('pages.trust.customer.title')}</h2>
            <ul className='d-flex flex-column flex-sm-row align-items-center justify-content-center mt-7 mt-sm-15'>
                <li className='d-flex flex-column align-items-center me-0 me-sm-17_5 me-lg-45 d-flex flex-column align-items-center'>
                    <div className='rounded-circle bg-white-1 p-6_5 p-sm-13'>
                        <img src={customerMedicalSvg} alt="" />
                    </div>
                    <p className='font-xs-sm font-sm-xl text-black-1 fw-bold mt-2 mt-sm-10_5'>
                        {t('pages.trust.customer.medical.title')}
                    </p>
                    <p className='font-xs-sm font-sm-lg text-gray-2 mt-2 mt-sm-1 mt-lg-4 text-center'>
                        {t('pages.trust.customer.medical.content')}
                    </p>
                </li>
                <li className='d-flex flex-column align-items-center mt-7 mt-sm-0 me-0 me-sm-17_5 me-lg-45'>
                    <div className='rounded-circle bg-white-1 p-6_5 p-sm-13'>
                        <img src={customerTechSvg} alt="" />
                    </div>
                    <p className='font-xs-sm font-sm-xl text-black-1 fw-bold mt-2 mt-sm-10_5'>
                        {t('pages.trust.customer.technology.title')}
                    </p>
                    <p className='font-xs-sm font-sm-lg text-gray-2 mt-2 mt-sm-1 mt-lg-4 text-center'>
                        {t('pages.trust.customer.technology.content')}
                    </p>
                </li>
                <li className='d-flex flex-column align-items-center mt-7 mt-sm-0'>
                    <div className='rounded-circle bg-white-1 p-6_5 p-sm-13'>
                        <img src={customerNetworkSvg} alt="" />
                    </div>
                    <p className='font-xs-sm font-sm-xl text-black-1 fw-bold mt-2 mt-sm-10_5'>
                        {t('pages.trust.customer.network.title')}
                    </p>
                    <p className='font-xs-sm font-sm-lg text-gray-2 mt-2 mt-sm-1 mt-lg-4 text-center'>
                        {t('pages.trust.customer.network.content')}
                    </p>
                </li>
            </ul>
        </section>
    </ContentLayout>;
}
export default TrustPage;