import { useWindowSize } from "@shared/hooks/useWindowSize";
import { IBaseComponentProp } from "@shared/interfaces/base-component.interface";
import { ReactEventHandler, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

interface Props extends IBaseComponentProp {
    /**
     * locale html should place in public/docs folder
     */
    htmlFile: string;
}
const IframeLoader = ({ htmlFile, classes }: Props) => {
    const ref = useRef<HTMLIFrameElement>(null);
    const { i18n: { language } } = useTranslation();
    const [height, setHeight] = useState(0);

    const onLoad: ReactEventHandler<HTMLIFrameElement> = ({ target }) => {
        const link = document.createElement('link');
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "../style.css";
        (target as HTMLIFrameElement).contentWindow!.document
            .getElementsByTagName('html')[0]
            .getElementsByTagName('head')[0]
            .appendChild(link);

        setHeight(ref.current!.contentWindow!.document.body.scrollHeight);
    };

    const windowSize = useWindowSize();
    useEffect(() => setHeight(ref.current!.contentWindow!.document.body.scrollHeight), [windowSize]);

    return <iframe
        title='privacy-policy'
        className={`w-100 ${classes ?? ''}`}
        src={`/docs/${language}/${htmlFile}.html`}
        ref={ref}
        onLoad={onLoad}
        height={height + 'px'}
    />
}
export default IframeLoader;