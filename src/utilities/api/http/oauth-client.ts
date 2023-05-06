import { generateHttpClient } from "@utilities/api/http";
import { getEnvConfig } from "@utilities/config/env";

const httpClient = generateHttpClient(getEnvConfig().url.auth.base);

export default httpClient;
