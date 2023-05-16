import ContentLayout from '@shared/components/ContentLayout';
import './style.scss';
import { useTranslation } from 'react-i18next';
import Expand from '@shared/components/Expand';
import { getSrc } from '@shared/helpers/file.helper';

const EsopPage = () => {
    const { t, i18n: { language } } = useTranslation();
    return <ContentLayout classes='page-esop' testId="EsopPage">
        <section className='page-esop__banner d-flex flex-column justify-content-center align-items-center'>
            <h1 className='text-orange-1 text-center'>{t('pages.esop.banner.title-1')}</h1>
            <h1 className='text-white-1 text-center'>{t('pages.esop.banner.title-2')}</h1>
        </section>
        <section className='py-12 py-sm-20 px-5 px-sm-5_5 px-lg-27 d-flex flex-column align-items-center'>
            <h2 className='text-center'>{t('pages.esop.stable-system.title')}</h2>
            <div className='mt-7 mt-sm-10 mt-lg-15 px-4 px-sm-8 px-lg-10 py-6 py-sm-11_5 py-lg-17 bg-white-1 border-radius-sm d-flex flex-column align-items-end position-relative page-esop__stable-system'>
                <ul>
                    <li className='border-bottom-1 border-gray-1 pb-4 pb-sm-5 pb-lg-6'>
                        <Expand title='pages.esop.stable-system.online-esop.title'>
                            <p className='font-sm font-lg-lg text-gray-2 mt-2 mt-sm-3 mt-lg-4 pe-0 pe-sm-16 pe-lg-20_5'>
                                {t('pages.esop.stable-system.online-esop.content')}
                            </p>
                        </Expand>
                    </li>
                    <li className='border-bottom-1 border-gray-1 py-4 py-sm-5 py-lg-6'>
                        <Expand title='pages.esop.stable-system.detail.title'>
                            <ul
                                style={{ listStyle: 'disc' }}
                                className='font-sm font-lg-lg text-gray-2 mt-2 mt-sm-3 mt-lg-4 pe-0 pe-sm-16 pe-lg-20_5 ps-4'>
                                <li>{t('pages.esop.stable-system.detail.content-1')}</li>
                                <li>{t('pages.esop.stable-system.detail.content-2')}</li>
                                <li>{t('pages.esop.stable-system.detail.content-3')}</li>
                            </ul>
                        </Expand>
                    </li>
                    <li className='pt-4 pt-sm-5 pt-lg-6'>
                        <Expand title='pages.esop.stable-system.online-esop.title'>
                            <p className='font-sm font-lg-lg text-gray-2 mt-2 mt-sm-3 mt-lg-4 pe-0 pe-sm-16 pe-lg-20_5'>
                                {t('pages.esop.stable-system.online-esop.content')}
                            </p>
                        </Expand>
                    </li>
                </ul>
                <img
                    className='layer-cover d-none d-sm-block position-absolute'
                    src={getSrc(`stable-system-${language || 'en'}`, 'esop')} alt="" />
            </div>
            <div className='position-relative d-block d-sm-none w-100  bg-white-1__before'>
                <img
                    className='layer-cover w-100'
                    src={getSrc(`stable-system-mobile-${language || 'en'}`, 'esop')} alt="" />
            </div>
        </section>
        <h2 className='text-center px-5 px-sm-26 px-lg-30_5'>{t('pages.esop.service.title')}</h2>
        <section className='page-esop__service bg-white-1 px-5 px-sm-26 px-lg-30_5'>
            <ul className='d-flex flex-row align-items-start justify-content-between'>
                {
                    ['participent', 'admin', 'manager'].map((service, index) => (<li
                        key={service}
                        className='d-flex flex-column layer-cover'>
                        <img src={getSrc(`service-${index + 1}-icon`, 'esop')} alt="" />
                        <p className='text-blue-2 text-center font-lg font-sm-xl font-lg-3xl fw-bold'>
                            {t(`pages.esop.service.${service}.title`)}
                        </p>
                        <ul className='pe-lg-8'>
                            <li className='text-gray-2 font-sm font-sm-lg mt-lg-6 d-flex flex-row align-items-top'>
                                {t(`pages.esop.service.${service}.content-1`)}
                            </li>
                            <li className='text-gray-2 font-sm font-sm-lg mt-lg-6 d-flex flex-row align-items-top'>
                                {t(`pages.esop.service.${service}.content-2`)}
                            </li>
                            <li className='text-gray-2 font-sm font-sm-lg mt-lg-6 d-flex flex-row align-items-top'>
                                {t(`pages.esop.service.${service}.content-3`)}
                            </li>
                        </ul>
                    </li>))
                }
            </ul>
            <div className='mt-sm-50 layer-normal'>

            </div>
        </section>
    </ContentLayout>
}
export default EsopPage;