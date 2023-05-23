import ContentLayout from '@shared/components/ContentLayout';
import './style.scss';
import { useTranslation } from 'react-i18next';
import IframeLoader from '@shared/components/IframeLoader';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { announcementConfig } from '@modules/announcement/constants/announcement-config';
import { Announcement } from '@shared/enums/common.enum';
import { formatLocaleDateString } from '@shared/helpers/time.helpler';

const AnnouncementPage = () => {
    const { t, i18n: { language } } = useTranslation();
    const { announcementType } = useParams();
    const location = useLocation();
    const config = useMemo(() => announcementConfig.get(announcementType as Announcement), [announcementType]);

    useEffect(() => window.scrollTo({
        top: 0,
        behavior: 'smooth'
    }), [announcementType]);

    return <ContentLayout
        testId="AnnouncementPage"
        classes='px-5 px-sm-5_5 px-lg-27 py-5 py-sm-18 py-lg-31 mb-16_5 mb-sm-12 mb-lg-19'>
        {
            config ?
                <>
                    <div className='border-bottom-1 border-orange-1 pb-5 d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-end'>
                        <h2>{t(`pages.announcement.${announcementType}`)}</h2>
                        <table className='mt-3 mt-sm-0'>
                            <tbody>
                                <tr>
                                    <th className='font-xs font-sm-sm text-gray-2'>
                                        {t('pages.announcement.announcementDate')}
                                    </th>
                                    <td className='font-xs font-sm-sm text-gray-2 text-end ps-1'>
                                        {formatLocaleDateString(language, config.announcementDate)}
                                    </td>
                                </tr>
                                {/*<tr>
                                    <th className='font-xs font-sm-sm text-gray-2'>
                                        {t('pages.announcement.effectiveDate')}
                                    </th>
                                    <td className='font-xs font-sm-sm text-gray-2 text-end ps-1'>
                                        {formatLocaleDateString(language, config.effectiveDate)}
                                    </td>
                                </tr>*/}
                            </tbody>
                        </table>
                    </div>
                    <IframeLoader classes='mt-5 mt-sm-6_5' htmlFile={config.html} />
                </> :
                <Navigate to='/' state={{ from: location }} replace />
        }
    </ContentLayout>;
}
export default AnnouncementPage;