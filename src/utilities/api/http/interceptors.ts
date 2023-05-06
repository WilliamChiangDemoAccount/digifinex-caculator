import { Environment } from "@shared/enums/common.enum";
import { getEnvConfig } from "@utilities/config/env";
import { AxiosResponse } from "axios";
import { AxiosError, AxiosInstance, HttpStatusCode } from "axios";

export const errorInterceptor = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.response.use(
    (response: AxiosResponse<any>) => response,
    (error: AxiosError) => {
      if (error.request?.status === HttpStatusCode.Unauthorized) {
        //Unauthorized
        //redirect to Login
      } else {
        if (getEnvConfig().env !== Environment.Prod) {
          console.group("Error");
          console.error(`code: ${error.code}, message: ${error.message}`);
          console.groupEnd();
          throw error;
        }
      }
    }
  );
};

export const updateHeaderInterceptor = (axiosInstance: AxiosInstance, authorization?: string) => {
  axiosInstance.interceptors.request.use((config: any) => {
    const jwtToken = authorization ?? localStorage.getItem("accessToken");
    if (jwtToken) {
      config.headers.Authorization = `Bearer ${authorization ?? localStorage.getItem("accessToken")}`;
    }
    config.headers['Access-Control-Allow-Origin'] = '*';
    return config;
  });
};
