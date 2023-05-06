import DialogExample from '@modules/guideline/components/DialogExample';
import Button from '@shared/components/Button';
import ContentLayout from '@shared/components/ContentLayout';
import { IModal } from '@shared/components/Modal';
import { IPopup } from '@shared/components/Popup';
import { IToast } from '@shared/components/Toast';
import { OverlayType } from '@shared/enums/common.enum';
import { toggleOverlay } from '@shared/hooks/useOverlay';

import Checkbox from 'antd/es/checkbox/Checkbox';
import { useState } from 'react';

interface Props {
}

const OverlayUsagePage = (props: Props) => {
    const [backdrop, setBackdrop] = useState(false);
    const [backdropClose, setBackdropClose] = useState(false);

    return <ContentLayout testId="OverlayUsagePage">
        <article>
            <h3>用處</h3>
            <p className='text-start'>使用於各頁面，透過<small className='mx-1 code-snippet'>toggleOverlay</small>觸發彈出視窗顯示額外資訊，依照情境可分為以下彈窗種類:</p>
            <ul className='mt-3'>
                <li className='d-flex flex-row align-items-center'>
                    <label className='code-snippet'>dialog</label>
                    <p className='ms-2'>自定義彈出視窗</p>
                </li>
                <li className='d-flex flex-row align-items-center mt-2'>
                    <label className='code-snippet'>toast</label>
                    <p className='ms-2'>系統提示</p>
                    <small className="ms-2 fw-bold text-red-1">*toast元件固定無遮罩且無法手動關閉</small>
                </li>
                <li className='d-flex flex-row align-items-center mt-2'>
                    <label className='code-snippet'>popup</label>
                    <p className='ms-2'>無標題互動窗口</p>
                </li>
                <li className='d-flex flex-row align-items-center mt-2'>
                    <label className='code-snippet'>modal</label>
                    <p className='ms-2'>有標題互動窗口</p>
                </li>
            </ul>
        </article>
        <article className='mt-4'>
            <h3>元件參數</h3>
            <ul className='mt-3'>
                <li className='d-flex flex-row align-items-center'>
                    <label className='code-snippet me-2'>type</label>
                    <p>觸發彈出視窗種類，預設為<small className='code-snippet ms-1'>dialog</small></p>
                </li>
                <li className='d-flex flex-row align-items-center mt-2'>
                    <label className='code-snippet me-2'>animation</label>
                    <p>彈窗動畫，預設為<small className='code-snippet ms-1'>fade-in-top</small></p>
                </li>
                <li className='d-flex flex-row align-items-center mt-2'>
                    <label className='code-snippet me-2'>backdrop</label>
                    <p>是否開啟背景遮罩，預設為<small className='code-snippet ms-1'>true</small></p>
                </li>
                <li className='d-flex flex-row align-items-center mt-2'>
                    <label className='code-snippet me-2'>backdropClose</label>
                    <p>是否開啟背景關閉，預設為<small className='code-snippet ms-1'>false</small></p>
                </li>
            </ul>
        </article>
        <article className='mt-4'>
            <h3>API</h3>
            <ul className='mt-3'>
                <li className='d-flex flex-row align-items-center'>
                    <label className='code-snippet me-2'>handleOnClose</label>
                    <p>自訂關閉事件</p>
                </li>
            </ul>
        </article>
        <article className='mt-4'>
            <h3>Demo</h3>
            <nav className='d-flex flex-row align-items-center mt-3'>
                <Checkbox
                    onChange={({ target: { checked } }) => setBackdrop(checked)}
                    checked={backdrop}
                >
                    backdrop
                </Checkbox>
                <Checkbox
                    onChange={({ target: { checked } }) => setBackdropClose(checked)}
                    checked={backdropClose}
                >
                    backdrop close
                </Checkbox>
            </nav>
            <div className='row'>
                <div className='col-sm-3 col-12 mt-3'>
                    <Button
                        testId='dialog-example'
                        onClick={() => toggleOverlay({
                            backdrop, backdropClose,
                            params: { title: '自訂彈出視窗範例' }
                        }, DialogExample)}
                    >
                        toggle dialog
                    </Button>
                </div>
                <div className='col-sm-3 col-12 mt-3'>
                    <Button
                        testId='toast-example'
                        onClick={() => toggleOverlay<IToast>({
                            type: OverlayType.Toast,
                            params: {
                                message: '系統提示'
                            }
                        })}
                    >
                        toggle toast
                    </Button>
                </div>
                <div className='col-sm-3 col-12 mt-3'>
                    <Button
                        testId='popup-example'
                        onClick={() => toggleOverlay<IPopup>({
                            type: OverlayType.Popup,
                            backdrop, backdropClose,
                            params: {
                                title: '無標題互動窗口',
                                content: '使用範例',
                                btnText: '關閉',
                                handleOnClose: () => { }
                            }
                        })}
                    >
                        toggle popup
                    </Button>
                </div>
                <div className='col-sm-3 col-12 mt-3'>
                    <Button
                        testId='modal-example'
                        onClick={() => toggleOverlay<IModal>({
                            type: OverlayType.Modal,
                            params: {
                                title: '有標題互動窗口',
                                content: '使用範例',
                                primaryBtn: {
                                    children: '送出',
                                    onClick: () => {
                                        toggleOverlay<IToast>({
                                            type: OverlayType.Toast,
                                            params: {
                                                message: '交易成功'
                                            }
                                        })
                                    }
                                },
                                secondaryBtn: {
                                    children: '取消',
                                    onClick: () => { }
                                }
                            }
                        })}
                    >
                        toggle modal
                    </Button>
                </div>
            </div>
        </article>
    </ContentLayout>;
}
export default OverlayUsagePage;