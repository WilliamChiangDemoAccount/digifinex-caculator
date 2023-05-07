import ContentLayout from '@shared/components/ContentLayout';

import './style.scss';
import { useTranslation } from 'react-i18next';
interface Props {
}
const TrustPage = (props: Props) => {
    const { t} = useTranslation();
    return <ContentLayout classes='page-trust' testId="TrustPage">
        <section className='page-trust__banner'>
            <h1 className='text-white-1'>{t('pages.trust.banner.title')}</h1>
            <h1>{t('pages.trust.banner.subtitle')}</h1>
            <p className='mt-lg-6 mt-sm-5 text-white-1'>{t('pages.trust.banner.content')}</p>
        </section>
    </ContentLayout>;
}
export default TrustPage;