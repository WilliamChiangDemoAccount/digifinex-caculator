import { IBaseComponentProp } from '@shared/interfaces/base-component.interface';
import './style.scss';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface Props extends IBaseComponentProp {
    title: string;
    /**
     * 強制開啟
     */
    forceExpand?: boolean;
    onExpand?: () => void;
    onClose?: () => void;
}

const Expand = ({
    classes = '',
    children,
    title,
    forceExpand = false,
    testId = 'component-expand',
    onClose = () => { },
    onExpand = () => { }
}: Props) => {
    const [isExpand, setExpand] = useState(false);
    const { t } = useTranslation();
    useEffect(() => {
        setExpand(forceExpand);
    }, [forceExpand]);
    return <>
        <div className={`d-flex flex-row align-items-start justify-content-between ${classes}`}>
            <p className='fw-bold font-sm font-sm-xl font-lg-3xl text-blue-2'>{t(title)}</p>
            <button
                onClick={() => {
                    isExpand ? onClose() : onExpand();
                    setExpand(!isExpand);
                }}
                data-testid={testId}
                style={{
                    transition: '0.5s',
                    transform: `rotate(${isExpand ? 0 : -180}deg)`
                }}
            >
                <em className='icon-arrow_up fw-bold text-blue-2 font-xs font-sm-xl font-lg-4xl'></em>
            </button>
        </div>
        {isExpand && children}
    </>
};

export default Expand;