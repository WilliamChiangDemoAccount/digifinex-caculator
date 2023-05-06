import { Environment } from "@shared/enums/common.enum";
import { IEnvConfig } from "@shared/interfaces/env.interface";

export const getEnvConfig = (): IEnvConfig => {
  const {
    REACT_APP_DOMAIN,
    NODE_ENV,
  } = process.env as { [key: string]: string };
  return {
    env: NODE_ENV as Environment,
    url: {
      domain: REACT_APP_DOMAIN,
    },
  };
};
