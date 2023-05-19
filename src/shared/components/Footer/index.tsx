
import { IBaseComponentProp } from '@shared/interfaces/base-component.interface';
import './style.scss';
import { ReactComponent as Logo } from 'assets/img/logo-light.svg';
import { useTranslation } from 'react-i18next';
// import Button from '@shared/components/Button';
import { NavLink } from 'react-router-dom';
import { routeMap } from '@utilities/config/routes';
import { ProductModule } from '@shared/enums/modules.enum';

interface Props extends IBaseComponentProp { }

const Footer = (prop: Props) => {
    const { t } = useTranslation();
    return <footer
        data-testid='footer'
        className='bg-black-2 component-footer'
    >
        <section className='component-footer__container mx-auto d-flex flex-column justify-content-between'>
            <div>
                <ul className='d-block d-sm-none'>
                    {
                        [...routeMap.get(ProductModule.Main)!.children ?? []].reverse().map(
                            ({ path, i18n }) =>
                                <li key={path} className='border-bottom-1 border-gray-3 px-6 py-5'>
                                    <NavLink className='text-orange-1' to={path}>
                                        {t(i18n)}
                                    </NavLink>
                                </li>
                        )
                    }

                </ul>
                <Logo className='d-none d-sm-block' />
                <section className='d-flex flex-column flex-sm-row align-items-stretch justify-content-between mt-sm-14 pt-sm-0 pt-11_5 px-6 px-sm-0'>
                    <div className='component-footer__contact-info'>
                        <ul>
                            <li className='font-xs-xs font-sm-lg text-white d-flex flex-row align-items-top'>
                                <em className='icon-address me-3 me-sm-4 font-xs-md font-sm-lgx'></em>
                                {t('footer.address')}
                            </li>
                            <li className='mt-3 font-xs-xs font-sm-lg text-white-1 d-flex flex-row align-items-top'>
                                <em className='icon-phone me-3 me-sm-4 font-xs-md font-sm-lgx'></em>
                                {t('footer.phone')}
                            </li>
                            <li className='mt-3 font-xs-xs font-sm-lg text-white-1 d-flex flex-row align-items-top'>
                                <em className='icon-email me-3 me-sm-4 font-xs-md font-sm-lgx'></em>
                                {t('footer.email')}
                            </li>
                            <li className='mt-3 font-xs-xs font-sm-lg text-white-1 d-flex flex-row align-items-top'>
                                <em className='icon-time me-3 me-sm-4 font-xs-md font-sm-lgx'></em>
                                {t('footer.worktime')}
                            </li>
                        </ul>
                        {/* <span className='d-block mt-15 mt-sm-10_5 text-white-1 text-bold font-xs-sm font-sm-md'>{t('footer.moreInfo')}</span>
                        <Button
                            onClick={() => { }}
                            isPrimary
                            classes='mt-sm-5 mt-3 font-xs-sm font-sm-lg py-2 py-sm-4 px-13_5 px-sm-12_5'
                        >
                            {t('footer.contactUs')}
                        </Button> */}
                    </div>
                    <div className='d-none d-sm-flex flex-row align-items-start'>
                        <ul className='me-sm-10 me-lg-15'>
                            <li className='text-orange-1 font-lg font-lg-xl fw-bold'>{t('pages.trust.menu')}</li>
                            <li className='mt-4 font-lg font-lg-xl'>
                                <NavLink className='text-white-1' to={`${routeMap.get(ProductModule.Main)!.children![2].path}/enterprise`}>
                                    {t('pages.trust.service.enterprise')}
                                </NavLink>
                            </li>
                            <li className='mt-2_5 font-lg font-lg-xl'>
                                <NavLink className='text-white-1' to={`${routeMap.get(ProductModule.Main)!.children![2].path}/personal`}>
                                    {t('pages.trust.service.personal')}
                                </NavLink>
                            </li>
                        </ul>
                        <ul className='me-sm-10 me-lg-15'>
                            <li className='text-orange-1 font-lg font-lg-xl fw-bold'>{t('pages.esop.menu')}</li>
                            <li className='mt-4 font-lg font-lg-xl'>
                                <NavLink className='text-white-1' to={routeMap.get(ProductModule.Main)!.children![1].path}>
                                    {t('pages.esop.introduction')}
                                </NavLink>
                            </li>
                        </ul>
                        <ul>
                            <li className='text-orange-1 font-lg font-lg-xl fw-bold'>{t('pages.about.menu')}</li>
                            <li className='mt-4 font-lg font-lg-xl'>
                                <NavLink className='text-white-1' to={routeMap.get(ProductModule.Main)!.children![0].path}>
                                    {t('pages.about.introduction')}
                                </NavLink>
                            </li>
                        </ul>
                        {/* <ul>
                            <li className='text-orange-1 font-lg font-lg-xl text-white-1 text-end'>{t('pages.services.menu')}</li>
                            <li className='mt-4 font-lg font-lg-xl text-white-1 text-end'>{t('pages.services.insight')}</li>
                            <li className='mt-2_5 font-lg font-lg-xl text-white-1 text-end'>{t('pages.services.ipo')}</li>
                            <li className='mt-2_5 font-lg font-lg-xl text-white-1 text-end'>{t('pages.services.propagate')}</li>
                        </ul> */}
                    </div>
                </section>
            </div>
            <section className='border-top-1 border-gray-1 d-flex flex-column-reverse flex-sm-row align-items-center justify-content-between pt-4 mt-26 mt-sm-0'>
                <span className='d-block text-gray-1 font-xs-xs font-sm-md font-lg-lg mt-sm-0 mt-2_5'>Copyright © 2023 PS GROUP. All Rights Reserved</span>
                <ul className='d-flex flex-row align-items-center'>
                    <li className='pe-5 border-right-1 border-gray-1 text-gray-1 font-xs-xs font-sm-md font-lg-lg cursor-pointer'>Privacy Policy</li>
                    <li className='px-5 border-right-1 border-gray-1 text-gray-1 font-xs-xs font-sm-md font-lg-lg cursor-pointer'>Terms of Use</li>
                    <li className='ps-5 text-gray-1 font-xs-xs font-sm-md font-lg-lg cursor-pointer'>Cookie Policy</li>
                </ul>
            </section>
        </section>
    </footer>;
}

export default Footer;
