import { Environment } from "@shared/enums/common.enum";
import { IEnvConfig } from "@shared/interfaces/env.interface";

export const getEnvConfig = (): IEnvConfig => {
  const {
    REACT_APP_DEFAULT_MODULE,
    REACT_APP_PARTICIPANT_END_POINT,
    REACT_APP_API_URL,
    REACT_APP_SSO_URL,
    REACT_APP_AUTH_URL,
    REACT_APP_DOMAIN,
    NODE_ENV,
  } = process.env as { [key: string]: string };
  return {
    defaultPath: REACT_APP_DEFAULT_MODULE,
    env: NODE_ENV as Environment,
    url: {
      domain: REACT_APP_DOMAIN,
      graphql: {
        base: REACT_APP_API_URL,
        esop: REACT_APP_PARTICIPANT_END_POINT,
      },
      auth: {
        base: REACT_APP_AUTH_URL,
        sso: REACT_APP_SSO_URL
      }
    },
  };
};
