import Card from '@shared/components/Card';
import ContentLayout from '@shared/components/ContentLayout';

interface Props {
}
const CardUsagePage = (props: Props) => (<ContentLayout testId="CardUsagePage">
    <article>
        <h3>用處</h3>
        <p className='text-start'>使用於各頁面，用於內容劃分並適性調整版型內的可用空間</p>
    </article>
    <article className='mt-4'>
        <h3>元件參數</h3>
        <ul className='mt-3'>
            <li className='d-flex flex-row align-items-center'>
                <label className='code-snippet me-2'>footer</label>
                <small className='fst-italic me-2'>-optional</small>
                <p>自訂卡片延展區域</p>
            </li>
            <li className='d-flex flex-row align-items-center mt-2'>
                <label className='code-snippet me-2'>footerClasses</label>
                <small className='fst-italic me-2'>-optional</small>
                <p>自訂卡片延展區域樣式</p>
            </li>
        </ul>
    </article>
    <article className='mt-4'>
        <h3>Demo</h3>
        <Card
            testId='usage-example'
            classes='text-center mt-4'
            footer={<>卡片擴充區域</>}
        >
            卡片範例
        </Card>
    </article>
</ContentLayout>);
export default CardUsagePage;