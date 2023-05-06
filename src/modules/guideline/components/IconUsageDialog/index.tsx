import { useState } from 'react';
import './style.scss';
import { Radio } from 'antd';
interface Props {
}

const iconList = ['ic_hunt_12px'];

const IconUsageDialog = (props: Props) => {
    const [theme, setTheme] = useState('fill-0');
    return (<div
        className='bg-white-2 p-5 shadow-2 position-relative compnent-icon-usage-dialog'>
        <h4 className='text-center'>icon使用說明</h4>
        <p className='mt-4'>全系統icon使用icomoon系統搭建，以特定class方式使用，下表為對應表</p>
        <nav className='d-flex flex-row align-items-center justify-content-between mt-2'>
            <Radio.Group onChange={({ target: { value } }) => setTheme(value)} value={theme}>
                <Radio value={'black-1'}>fill-0</Radio>
                <Radio value={'orange-1'}>orange-1</Radio>
            </Radio.Group>
            <div className='d-flex flex-row align-items-center justify-content-end'>
                <em className='icon-ic_hunt_12px font-xs me-1 text-red-1__before'></em>
                <small className='text-red-1'>統一使用em標籤</small>
            </div>
        </nav>
        <table className='mt-4 w-100'>
            <thead>
                <tr className='border-bottom-1 border-line-3'>
                    <th className='p-2'>Name</th>
                    <td className='p-2'>Demo</td>
                </tr>
            </thead>
            <tbody>
                {iconList.map(icon => <tr key={icon}>
                    <th className='p-2'>{`icon-${icon}`}</th>
                    <td className='p-2'>
                        <em className={`icon-${icon} text-${theme}__before`}></em>
                    </td>
                </tr>)}
            </tbody>
        </table>
    </div>);
}
export default IconUsageDialog;