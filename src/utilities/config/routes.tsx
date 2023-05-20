import { ProductModule } from '@shared/enums/modules.enum';
import { Navigate, Route, useLocation } from 'react-router-dom';
import React from 'react';
import { useAuthGuard } from '@shared/hooks/useAuthGuard';
import { canGuidelineModuleActive } from '@utilities/auth/canGuidelineModuleActive';

export type RouteConfig = {
  path: string;
  component: any;
  /**
   * 路由名稱
   */
  i18n: string;
  icon?: string;
  /**
   * 子路由
   */
  children?: RouteConfig[];
  /**
   * 啟動規則，默認繼承父層規則
   */
  canActive?: (() => Promise<boolean>)[];
};

export const routeMap = new Map<ProductModule, RouteConfig>([
  [
    ProductModule.Guideline,
    {
      path: '',
      i18n: '開發概覽',
      component: React.lazy(() => import(`@modules/guideline/pages/Guideline`)),
      canActive: [canGuidelineModuleActive],
      children: [
        {
          path: 'style',
          i18n: '樣式使用說明',
          component: React.lazy(() => import(`@modules/guideline/pages/StyleGuidelinePage`))
        },
        {
          path: 'component',
          i18n: '共用元件使用說明',
          component: React.lazy(() => import(`@modules/guideline/pages/SharedComponentUsagePage`)),
          children: [
            {
              path: 'card',
              i18n: '卡片元件',
              component: React.lazy(() => import(`@modules/guideline/pages/CardUsagePage`)),
            },
            {
              path: 'overlay',
              i18n: '彈窗系統',
              component: React.lazy(() => import(`@modules/guideline/pages/OverlayUsagePage`)),
            }
          ]
        }
      ],
    } as RouteConfig,
  ],
  [
    ProductModule.Main,
    {
      path: '',
      i18n: 'pages.main.menu',
      component: React.lazy(() => import(`@modules/main/pages/MainPage`)),
      children: [
        {
          path: 'about',
          i18n: 'pages.about.menu',
          component: React.lazy(() => import(`@modules/main/pages/IntroductionPage`)),
        },
        {
          path: 'esop',
          i18n: 'pages.esop.menu',
          component: React.lazy(() => import(`@modules/main/pages/EsopPage`)),
        },
        {
          path: 'trust',
          i18n: 'pages.trust.menu',
          component: React.lazy(() => import(`@modules/main/pages/TrustPage`)),
          children: [{
            path: ':serviceType',
            i18n: 'pages.trust.menu',
            component: React.lazy(() => import(`@modules/main/pages/TrustPage`)),
            children: [{
              path: ':article',
              i18n: 'pages.trust.menu',
              component: React.lazy(() => import(`@modules/main/pages/TrustPage`)),
            }]
          }]
        }
      ]
    } as RouteConfig
  ]
]);

/**
 * 巢狀路由
 * @param param0 當前路由設置
 * @param rootPath 父層路徑
 * @param parentCanActive 父層路由守衛
 * @returns 截至目前為止的路由目錄
 */
export const NestRoute = (
  { path, component: Component, children, canActive }: RouteConfig,
  rootPath: string,
  parentCanActive: (() => Promise<boolean>)[] = []
): React.ReactElement[] => {
  let childrenRoutes: React.ReactElement[] = [];
  const currentPath = path ? `${rootPath}/${path}` : rootPath;
  const currentCanAvtice = [...parentCanActive, ...(canActive ?? [])];
  const location = useLocation();
  const enabled: boolean = useAuthGuard({ canActive: currentCanAvtice });

  if (!!children && children?.length > 0) {
    childrenRoutes = children.flatMap((config) => NestRoute(config, currentPath, currentCanAvtice));
  }

  return [...childrenRoutes, <Route
    key={currentPath}
    path={currentPath}
    element={
      enabled ? <Component /> : <Navigate to='/' state={{ from: location }} replace />
    } />
  ];
};
