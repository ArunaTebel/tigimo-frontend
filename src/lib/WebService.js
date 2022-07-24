import TigimoHttp from "./TigimoHttp";

const WS = {
    core: {
        getApiUrl: () => {
            return import.meta.env.VITE_API_URL
        },
        getAccessToken: () => {
            return localStorage.getItem('access-token')
        },
        getWithAuth: async (endpointUrl) => {
            return await TigimoHttp.getJson(
                `${WS.core.getApiUrl()}/${endpointUrl}`,
                {'Authorization': `Bearer ${WS.core.getAccessToken()}`}
            )
        },
        postWithAuth: async (endpointUrl, postData) => {
            return await TigimoHttp.postJson(
                `${WS.core.getApiUrl()}/${endpointUrl}`,
                postData,
                {'Authorization': `Bearer ${WS.core.getAccessToken()}`}
            )
        }
    },
    models: {
        channels: {
            fetchAll: async () => {
                return await WS.core.getWithAuth('channels')
            },
            create: async (channelData) => {
                return await WS.core.postWithAuth('channels', channelData)
            }
        }
    }
};
export default WS;