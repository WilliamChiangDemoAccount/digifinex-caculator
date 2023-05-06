
import Card from '@shared/components/Card';
import ContentLayout from '@shared/components/ContentLayout';
import { ProductModule } from '@shared/enums/modules.enum';
import { routeMap } from '@utilities/config/routes';
import { Link } from 'react-router-dom';

const SharedComponentUsagePage = () => (<ContentLayout testId="SharedComponentUsagePage">
  <ul className='row'>
    {
      routeMap.get(ProductModule.Guideline)!.children![1].children!.map(({ path, i18n }) =>
        <li key={path} className='col-sm-3 col-12 mt-2 text-center'>
          <Link to={path}>
            <Card classes='ms-0 me-4 border border-gray-1 border-orange-1--hover text-gray-1 text-orange-1--hover'>
              {i18n}
            </Card>
          </Link>
        </li>)
    }
  </ul>
</ContentLayout>);

export default SharedComponentUsagePage;
