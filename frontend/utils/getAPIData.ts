import { apiClient } from "./apiClient";

const token = process.env.BEARER_TOKEN ?? "";

export const getData = async () => {
    const res = await apiClient.licenses.get({
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    
    return 0;
}

