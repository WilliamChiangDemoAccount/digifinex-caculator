import { Environment } from "@shared/enums/common.enum";
import { getEnvConfig } from "@utilities/config/env";

export function canGuidelineModuleActive(): Promise<boolean> {
  return new Promise<boolean>((resolve) => {
    resolve(getEnvConfig().env !== Environment.Prod);
  });
}
