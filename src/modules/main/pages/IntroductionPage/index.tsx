import ContentLayout from '@shared/components/ContentLayout';
import banner from 'assets/img/about-us/banner.svg';
import bannerMobile from 'assets/img/about-us/banner-mobile.svg';

import { useTranslation } from 'react-i18next';

import './style.scss';

const IntroductionPage = () => {
    const { t } = useTranslation();
    return <ContentLayout classes='page-introduction' testId="IntroductionPage">
        <img className='d-none w-100' src={banner} alt="" />
        <img className='w-100' src={bannerMobile} alt="" />
        <section className='page-introduction__container pt-12 pt-sm-20 mx-auto pb-21_5 pb-sm-30 pb-lg-50 px-5 px-sm-0'>
            <h2 className='text-black-1 text-center'>{t('pages.about.title')}</h2>
            <p className='font-xs text-gray-2 font-sm-lg mt-7 mt-sm-10 mt-lg-15'>{t('pages.about.content')}</p>
        </section>
    </ContentLayout>
}
export default IntroductionPage;