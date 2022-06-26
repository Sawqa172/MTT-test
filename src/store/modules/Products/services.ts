import { $apiClient } from "utils/request/request";

export function getData() {
  const url = "products?limit=6";

  return $apiClient.get(url);
}
