import { useIsLoading } from "@shared/hooks/useIsLoading";
import { IOverlayTask, useOverlay } from "@shared/hooks/useOverlay";
import Loading from "@shared/components/Loading";
import Popup from "@shared/components/Popup";
import Toast from "@shared/components/Toast";
import Modal from "@shared/components/Modal";
import { OverlayType } from "@shared/enums/common.enum";
import { FunctionComponent, createElement, useRef } from "react";
import { IBaseOverlay } from "@shared/interfaces/base-component.interface";
import { Animation } from "@shared/enums/animation.enum";

interface ContainerProp extends IOverlayTask {
    onClose: (id: string) => void;
}

const Overlay = () => {
    const { spinner } = useIsLoading();
    const { overlay, onClose } = useOverlay();
    return <>
        {spinner && <Loading />}
        {overlay.length > 0 &&
            overlay.map(task => <Container {...task} key={task.id} onClose={onClose} />)
        }
    </>;
};

const Container = ({
    id,
    config: {
        type = OverlayType.Dialog,
        backdrop = true,
        backdropClose = false,
        params,
        animation = Animation.FadeInTop,
        handleOnClose
    },
    content,
    onClose
}: ContainerProp,
) => {
    const dom = useRef<HTMLDivElement>(null);
    return <div
        style={{ pointerEvents: type === OverlayType.Toast ? 'none' : 'auto' }}
        className={`vh-100 vw-100 ${backdrop ? 'bg-black-1_10' : ''} position-fixed layer-overlay top-0 left-0 d-flex align-items-start`}
        onClick={({ target }) => {
            if (backdropClose && (target as HTMLElement).contains(dom.current)) {
                onClose(id);
                if (handleOnClose) {
                    handleOnClose();
                }
            }
        }}
    >
        <div ref={dom} className={`animation-${animation} my-0 mx-auto`}>
            {
                type === OverlayType.Popup ?
                    <Popup
                        testId={id}
                        onClose={onClose}
                        handleOnClose={handleOnClose}
                        {...params}
                    /> :
                    type === OverlayType.Toast ?
                        <Toast
                            testId={id}
                            onClose={onClose}
                            handleOnClose={handleOnClose}
                            {...params}
                        /> :
                        type === OverlayType.Modal ?
                            <Modal
                                testId={id}
                                onClose={onClose}
                                handleOnClose={handleOnClose}
                                {...params}
                            /> :
                            createElement(content as FunctionComponent<IBaseOverlay>, { ...{ testId: id, onClose }, ...params })
            }
        </div>
    </div>
}

export default Overlay;