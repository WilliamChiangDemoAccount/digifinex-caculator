import ContentLayout from '@shared/components/ContentLayout';
import './style.scss';
import { useTranslation } from 'react-i18next';
interface Props {
}
const EsopPage = (props: Props) => {
    const { t } = useTranslation();
    return <ContentLayout classes='page-esop' testId="EsopPage">
        <section className='page-esop__banner'>
            <h1 className='text-orange-1'>{t('pages.esop.menu')}</h1>
        </section>
    </ContentLayout>
}
export default EsopPage;