import { Link } from "react-router-dom";
import "./style.scss";

import ContentLayout from "@shared/components/ContentLayout";
import { routeMap } from "@utilities/config/routes";
import { ProductModule } from "@shared/enums/modules.enum";


interface Props { }

const Guideline = (props: Props) => <ContentLayout testId="Guideline">
  <header className="d-flex flex-row align-items-center justify-content-between">
    <h1>開發概覽</h1>
  </header>

  <ul className="mt-4 row">
    {routeMap.get(ProductModule.Guideline)!.children!.map(({ path, i18n }) => <li className="col-md-3 col-4" key={path}>
      <Link
        to={path}
        className="text-gray-1 text-black-1--hover"
      >{i18n}
      </Link>
    </li>)}
  </ul>
</ContentLayout>;

export default Guideline;
