
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
            <Card classes='ms-0 me-4 border border-fill-5 border-orange-primary--hover text-text-4 text-orange-primary--hover'>
              {i18n}
            </Card>
          </Link>
        </li>)
    }
  </ul>
</ContentLayout>);

export default SharedComponentUsagePage;
