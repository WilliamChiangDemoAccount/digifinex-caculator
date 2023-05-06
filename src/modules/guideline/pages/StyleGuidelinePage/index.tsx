
import Card from "@shared/components/Card";
import "./style.scss";
import ContentLayout from '@shared/components/ContentLayout';
import { toggleOverlay } from "@shared/hooks/useOverlay";
import IconUsageDialog from "@modules/guideline/components/IconUsageDialog";

interface Props {

}

const StyleGuidelinePage = (props: Props) => (<ContentLayout testId="StyleGuidelinePage" classes="page-style-guideline">
    <article>
        <h3 className="text-black-1">使用規範</h3>
        <p>系統樣式分為以下三大類</p>
        <ul className="row mt-md-4 mt-0">
            <li className="col-md-4 col-12 mt-md-0 mt-4">
                <Card classes="h-100">
                    <h4>Bootstrap 5</h4>
                    <p className="mt-2">系統中除客製化主題、顏色等相關樣式，皆可使用bootstrap libary內提供的樣式進行拼接</p>
                    <small className="mt-2 fst-italic text-gray-1">使用方式參考
                        <a
                            className="text-gray-1 text-decoration-underline"
                            target="_blank"
                            rel="noreferrer"
                            href="https://getbootstrap.com/docs/5.0/getting-started/introduction/">官方文件</a>
                    </small>
                </Card>
            </li>
            <li className="col-md-4 col-12 mt-md-0 mt-4">
                <Card classes="h-100">
                    <h4>Component Style</h4>
                    <p className="mt-2">元件本身的樣式設定，可透過toolbox cli生成component時添加--style控制項產出，檔案格式以scss為主，命名格式須符合<a
                        className="text-gray-1 text-decoration-underline"
                        href="https://www.infoq.cn/article/vfnfwdle0zmga9psvbug"
                        target="_blank"
                        rel="noreferrer"
                    >BEM命名原則</a>且不可與style libery及bootstrap名稱重複，主要用於極為複雜且特殊的單一元件樣式客製</p>
                    <small className="mt-2 fw-bold text-red-1">*常規情況下無需使用</small>
                </Card>
            </li>
            <li className="col-md-4 col-12 mt-md-0 mt-4">
                <Card classes="h-100">
                    <h4>Customize Style Libary</h4>
                    <p className="mt-2">針對設計文件特別指定及bootstrap不支援的使用情境進行擴充的客製化libary，使用方式可參照以下章節說明：</p>
                    <ol className="mt-2">
                        <li>文字標籤</li>
                        <li><button>主題與色彩</button></li>
                        <li><button>間距</button></li>
                        <li><button>修飾器</button></li>
                        <li><button>圖層</button></li>
                        <li><button>鼠標圖示</button></li>
                        <li><button onClick={() => toggleOverlay({ backdropClose: true }, IconUsageDialog)}>icon使用</button></li>
                    </ol>
                    <small className="mt-2 fst-italic text-text-4 text-end">
                        設計文件參照
                        <a
                            className="text-gray-1 text-decoration-underline"
                            href="https://www.figma.com/file/V9pZG5DABoYesBA6AlcIhB/ESOP-Guideline?node-id=2-2&t=ZxgXHaaqO5r2FaLy-0"
                            target="_blank"
                            rel="noreferrer"
                        >Figma</a>
                    </small>
                </Card>
            </li>
        </ul>
    </article>


</ContentLayout>);

export default StyleGuidelinePage;
