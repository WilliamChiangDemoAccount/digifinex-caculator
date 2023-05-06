import { Link } from "react-router-dom";
import "./style.scss";

import ContentLayout from "@shared/components/ContentLayout";
import { routeMap } from "@utilities/config/routes";
import { ProductModule } from "@shared/enums/modules.enum";


interface Props { }

const Guideline = (props: Props) => <ContentLayout testId="Guideline">
  <header className="d-flex flex-row align-items-center justify-content-between">
    <h1>開發概覽</h1>
    <button
      data-testid="theme-switch"
      className="border border-text-6_85 border-text-6--hover border-radius-sm p-1 text-text-6_85 text-text-6--hover font-xs"
      onClick={() => {
        const html = document.getElementsByTagName('html')[0];
        const theme = html.getAttribute('theme');
        html.setAttribute('theme', theme === 'dark' ? 'light' : 'dark');
      }}>切換主題</button>
  </header>

  <ul className="mt-4 row">
    {routeMap.get(ProductModule.Guideline)!.children!.map(({ path, i18n }) => <li className="col-md-3 col-4" key={path}>
      <Link
        to={path}
        className="text-text-4 text-text-7--hover"
      >{i18n}
      </Link>
    </li>)}
  </ul>
</ContentLayout>;

export default Guideline;
