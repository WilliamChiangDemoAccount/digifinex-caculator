import ContentLayout from '@shared/components/ContentLayout';

import './style.scss';
import { useTranslation } from 'react-i18next';
import TrustArticleList from '@modules/main/components/TrustArticleList';
import { useRef } from 'react';
import TrustArticleListMobile from '@modules/main/components/TrustArticleListMobile';
interface Props {
}
const TrustPage = (props: Props) => {
    const { t } = useTranslation();
    const service = useRef<HTMLDivElement>(null);
    const advance = useRef<HTMLDivElement>(null);
    return <ContentLayout classes='page-trust' testId="TrustPage">
        <section className='page-trust__banner'>
            <h1 className='text-white-1'>{t('pages.trust.banner.title')}</h1>
            <h1>{t('pages.trust.banner.subtitle')}</h1>
            <p className='mt-lg-6 mt-sm-5 text-white-1'>{t('pages.trust.banner.content')}</p>
        </section>
        <section ref={service} className='d-none d-sm-block pt-sm-20 pt-lg-30'>
            <TrustArticleList
                goTop={() => {
                    if (window.scrollY > 0) {
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
        <section className='d-block d-sm-none px-5 py-10'>
            <TrustArticleListMobile />
        </section>
        <section ref={advance} className='page-trust__advance'>
            <h3 className='text-white-1 text-center'>柏盛的優勢</h3>
            <ul className='d-flex flex-column flex-sm-row mt-7 mt-sm-7_5 mt-lg-15 flex-wrap justify-content-center'>
                <li className='bg-white-1 border-radius-sm py-6 px-3 py-sm-5 px-sm-5 py-lg-8 px-lg-8'>
                    <h4 className='text-blue-2 font-lg font-sm-xl font-lg-xxxl'>{t('pages.trust.advance.advance-1.title')}</h4>
                    <p className='ps-11 ps-sm-13 ps-lg-14_5 font-sm text-gray-2 font-lg-lg mt-3 mt-sm-2 mt-lg-5_5'>{t('pages.trust.advance.advance-1.content')}</p>
                </li>
                <li className='bg-white-1 border-radius-sm mt-5 mt-sm-0 py-6 px-3 py-sm-5 px-sm-5 py-lg-8 px-lg-8'>
                    <h4 className='text-blue-2 font-lg font-sm-xl font-lg-xxxl'>{t('pages.trust.advance.advance-2.title')}</h4>
                    <p className='ps-11 ps-sm-13 ps-lg-14_5 font-sm text-gray-2 font-lg-lg mt-3 mt-sm-2 mt-lg-5_5'>{t('pages.trust.advance.advance-2.content')}</p>
                </li>
                <li className='bg-white-1 border-radius-sm mt-5 mt-lg-7_5 py-6 px-3 py-sm-5 px-sm-5 py-lg-8 px-lg-8'>
                    <h4 className='text-blue-2 font-lg font-sm-xl font-lg-xxxl'>{t('pages.trust.advance.advance-3.title')}</h4>
                    <p className='ps-11 ps-sm-13 ps-lg-14_5 font-sm text-gray-2 font-lg-lg mt-3 mt-sm-2 mt-lg-5_5'>{t('pages.trust.advance.advance-3.content')}</p>
                </li>
                <li className='bg-white-1 border-radius-sm mt-5 mt-lg-7_5 py-6 px-3 py-sm-5 px-sm-5 py-lg-8 px-lg-8'>
                    <h4 className='text-blue-2 font-lg font-sm-xl font-lg-xxxl'>{t('pages.trust.advance.advance-4.title')}</h4>
                    <p className='ps-11 ps-sm-13 ps-lg-14_5 font-sm text-gray-2 font-lg-lg mt-3 mt-sm-2 mt-lg-5_5'>{t('pages.trust.advance.advance-4.content')}</p>
                </li>
            </ul>
        </section>
    </ContentLayout>;
}
export default TrustPage;