import { IBaseComponentProp } from "@shared/interfaces/base-component.interface";
import "./style.scss";

interface Props extends IBaseComponentProp {

}

const ContentLayout = ({ children, testId, classes }: Props) =>
    <section data-testid={testId} className={`py-5 component-content-layout ${classes ?? ''}`}>
        {children}
    </section>;


export default ContentLayout;
