import { Environment } from "@shared/enums/common.enum";

type UrlConfig = {
  domain: string;
  graphql: {
    base: string;
    esop: string;
  };
  auth: {
    base: string;
    sso: string
  }
};

export interface IEnvConfig {
  defaultPath: string;
  env: Environment;
  url: UrlConfig;
}
