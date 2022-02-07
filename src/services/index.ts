import { logout } from "auth-provider";
import { useAuth } from "contexts/AuthContext";
import { stringify } from "qs";

const apiUrl = process.env.REACT_APP_API_URL;

interface Config extends RequestInit {
  token?: string;
  data?: object;
}

export const http = async (
  endpoint: string,
  { data, token, headers, ...customConfig }: Config = {}
) => {
  const config = {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": data ? "application/json" : "",
    },
    ...customConfig,
  };

  if (config.method.toUpperCase() === "GET") {
    endpoint += `?${stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {});
  }

  return window
    .fetch(`${apiUrl}/${endpoint}`, config)
    .then(async (response) => {
      if (response.status === 401) {
        await logout();
        window.location.reload();
        return Promise.reject({ message: "请重新登录" });
      }
      const result = await response.json();
      if (response.ok) {
        return result;
      } else {
        return Promise.reject(result);
      }
    });
};

export const useHttp = () => {
  const { user } = useAuth();
  return (...[endpoint, config]: Parameters<typeof http>) =>
    http(endpoint, { ...config, token: user?.token });
};
