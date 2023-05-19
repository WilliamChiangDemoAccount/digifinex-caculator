import ContentLayout from '@shared/components/ContentLayout';
import './style.scss';
import { useTranslation } from 'react-i18next';
import { getSrc } from '@shared/helpers/file.helper';
import { useWindowSize } from '@shared/hooks/useWindowSize';
import { BreakPoint } from '@shared/enums/common.enum';
import { NavLink } from 'react-router-dom';
import { routeMap } from '@utilities/config/routes';
import { ProductModule } from '@shared/enums/modules.enum';
import enterpriseServiceIcon from 'assets/img/icons/icon-enterprise-service-blue.svg';
import personalServiceIcon from 'assets/img/icons/icon-personal-service-blue.svg';

const MainPage = () => {
    const { t, i18n: { language } } = useTranslation();
    const { breakpoint } = useWindowSize();
    return <ContentLayout classes='page-main pb-21_5 pb-sm-30 pb-lg-50' testId="MainPage">
        <section className='d-flex flex-column justify-content-center align-items-center px-5 pt-12 pb-14 page-main__banner'>
            <h1 className='text-orange-1 text-center'>{t('pages.main.banner.title')}</h1>
            <h1 className='text-white-1 text-center'>{t('pages.main.banner.subtitle')}</h1>
        </section>
        <section className='pt-12 pt-sm-20 px-4 px-sm-5_5 px-lg-12 page-main__esop'>
            <h2 className='text-orange-1 text-center font-xl font-sm-6xl font-lg-7xl'>{t('pages.main.esop.title')}</h2>
            <div className='bg-white-1 border-radius-sm w-100 py-5 py-sm-15 px-4 px-sm-6_5 px-lg-15 mt-7 mt-sm-10 d-flex flex-column-reverse flex-sm-row align-items-center'>
                <img
                    className='mt-13 mt-sm-0 me-0 me-sm-3_5 me-lg-9'
                    src={getSrc(`stable-system${breakpoint === BreakPoint.Mobile ? '-mobile' : ''}-${language || 'en'}`, 'esop')}
                    alt="" />
                <ul>
                    {
                        ['system', 'service'].map((e, index) =>
                            <li
                                key={e}
                                className={index === 0 ? '' : 'mt-8 mt-sm-12 mt-lg-20'}
                            >
                                <h3 className='text-blue-2 font-xl font-lg-6xl'>
                                    {t(`pages.main.esop.${e}.title`)}
                                </h3>
                                <p className='text-gray-2 font-sm font-sm-lg mt-2 mt-sm-4 mt-lg-3'>
                                    {t(`pages.main.esop.${e}.content`)}
                                </p>
                                <NavLink className='icon-arrow_right text-orange-1 pb-1 border-0 border-bottom-1 border-orange-1 mt-5 mt-sm-4 mt-lg-7 d-inline-flex align-items-center flex-row-reverse font-sm font-sm-lg font-lg-xl' to={routeMap.get(ProductModule.Main)!.children![1].path}>
                                    {t(`pages.main.esop.${e}.button`)}
                                </NavLink>
                            </li>
                        )
                    }
                </ul>
            </div>
        </section>
        <section className='pt-12 pt-sm-20 px-4 px-sm-5_5 px-lg-12 page-main__trust'>
            <h2 className='text-orange-1 text-center font-xl font-sm-6xl font-lg-7xl'>{t('pages.main.trust.title')}</h2>
            <div className='bg-white-1 border-radius-sm w-100 py-5 py-sm-10 py-lg-12 px-4 px-sm-4 px-lg-15 mt-7 mt-sm-10'>
                <article className='d-flex flex-column-reverse flex-sm-row align-items-center w-100'>
                    <img
                        className='mt-9 mt-sm-0 me-0 me-sm-10 me-lg-32'
                        src={getSrc(breakpoint === BreakPoint.Desktop ? `enterprise-service` : `enterprise-service-${breakpoint}`, 'main')} alt="" />
                    <section>
                        <h3 className='text-blue-2 font-xl font-lg-6xl d-flex flex-row align-items-center'>
                            <img src={enterpriseServiceIcon} className='me-3' height={32} alt="" />
                            {t('pages.main.trust.enterprise.title')}
                        </h3>
                        <p className='text-gray-2 font-sm font-sm-lg mt-2 mt-sm-4 mt-lg-3'>
                            {t(`pages.main.trust.enterprise.content`)}
                        </p>
                        <NavLink
                            className='icon-arrow_right text-orange-1 pb-1 border-0 border-bottom-1 border-orange-1 mt-5 mt-sm-4 mt-lg-7 d-inline-flex align-items-center flex-row-reverse font-sm font-sm-lg font-lg-xl'
                            to={`${routeMap.get(ProductModule.Main)!.children![2].path}/enterprise`}>
                            {t(`pages.main.trust.enterprise.button`)}
                        </NavLink>
                    </section>
                </article>
                <h2 className='text-blue-2 d-flex flex-row align-items-center mt-13 mt-sm-15 mt-lg-20 ps-0 ps-sm-5 ps-lg-0'>
                    <img src={personalServiceIcon} className='me-3' height={32} alt="" />
                    {t('pages.main.trust.personal.title')}
                </h2>
                <article className='d-flex flex-column flex-sm-row align-items-center w-100 mt-6 mt-sm-3 mt-lg-7 ps-0 ps-sm-5 ps-lg-0'>
                    <section>
                        <h3 className='text-blue-2 font-lg font-sm-xl font-lg-3xl'>
                            {t('pages.main.trust.personal.familyTrust.title')}
                        </h3>
                        <p className='text-gray-2 font-sm font-sm-lg mt-2 mt-sm-4 mt-lg-3'>
                            {t('pages.main.trust.personal.familyTrust.content')}
                        </p>
                        <h3 className='text-blue-2 font-lg font-sm-xl font-lg-3xl mt-6 mt-sm-5 mt-lg-7'>
                            {t('pages.main.trust.personal.familyOffice.title')}
                        </h3>
                        <p className='text-gray-2 font-sm font-sm-lg mt-2 mt-sm-4 mt-lg-3'>
                            {t('pages.main.trust.personal.familyOffice.content')}
                        </p>
                        <NavLink
                            className='icon-arrow_right text-orange-1 pb-1 border-0 border-bottom-1 border-orange-1 mt-5 mt-sm-4 mt-lg-7 d-inline-flex align-items-center flex-row-reverse font-sm font-sm-lg font-lg-xl'
                            to={`${routeMap.get(ProductModule.Main)!.children![2].path}/personal`}>
                            {t(`pages.main.trust.personal.familyOffice.button`)}
                        </NavLink>
                    </section>
                    <img
                        className='mt-9 mt-sm-0 ms-0 ms-sm-10 ms-lg-32'
                        src={getSrc(breakpoint === BreakPoint.Desktop ? `personal-service` : `personal-service-${breakpoint}`, 'main')} alt="" />
                </article>
            </div>
        </section>
    </ContentLayout>;
}

export default MainPage;