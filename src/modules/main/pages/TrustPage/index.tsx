import ContentLayout from '@shared/components/ContentLayout';

import './style.scss';
import { useTranslation } from 'react-i18next';
import TrustArticleList from '@modules/main/components/TrustArticleList';
import { useRef } from 'react';
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
        <section ref={service} className='page-trust__service'>
            <TrustArticleList
                goTop={() => window.scrollTo({
                    top: service.current?.offsetTop,
                    behavior: 'smooth'
                })}
                onSkip={() => window.scrollTo({
                    top: advance.current?.offsetTop,
                    behavior: 'smooth'
                })} />
        </section>
        <section ref={advance} className='page-trust__advance'>
            <h1 style={{ height: 864 }}>柏盛的優勢</h1>
        </section>
    </ContentLayout>;
}
export default TrustPage;