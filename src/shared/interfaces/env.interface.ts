import { Environment } from "@shared/enums/common.enum";

type UrlConfig = {
  domain: string;
};

export interface IEnvConfig {
  env: Environment;
  url: UrlConfig;
}
