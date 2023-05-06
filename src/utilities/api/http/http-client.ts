import axios from "axios";
import { errorInterceptor, updateHeaderInterceptor } from "@utilities/api/http";

export const generateHttpClient = (url: string) => {
    const client = axios.create({ baseURL: url });
    errorInterceptor(client);
    updateHeaderInterceptor(client);
    return client;
}
