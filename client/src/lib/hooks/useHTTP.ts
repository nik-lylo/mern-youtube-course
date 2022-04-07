import { useState } from "react";
import { IGenericOblect } from "../models/Common";

export const useHTTP = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);

  async function request(
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
    body: any = null,
    headers: IGenericOblect = {}
  ) {
    setLoading(true);
    try {
      if (body) {
        body = JSON.stringify(body);
        headers["Content-Type"] = "application/json";
      }
      const response = await fetch(url, { method, body, headers });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Somethings went wrong!!!");
      }
      return data;
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }
  const clearError = () => setError(null);

  return { loading, error, request, clearError };
};
