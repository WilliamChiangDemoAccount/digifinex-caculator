import { RouteConfig } from "@utilities/config/routes";
import { useEffect, useState } from "react";

/**
 * 檢查當前路由是否啟用且當前使用者具備使用權限
 * @returns {boolean} 是否放行
 */
export const useAuthGuard = ({ canActive }: Required<Pick<RouteConfig, 'canActive'>>) => {
  const [isActive, setActive] = useState(true);

  useEffect(() => {
    Promise.all(canActive.map((_) => _())).then((results) => {
      setActive(results.reduce((a, b) => a && b, true));
    });
  }, [canActive]);

  return isActive;
};
