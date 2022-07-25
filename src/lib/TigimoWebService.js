import TigimoHttp from "./TigimoHttp";
import {auth0} from "./auth0";

const WS = {
    core: {
        getApiUrl: () => {
            return import.meta.env.VITE_API_URL
        },
        getAccessToken: async () => {
            return auth0.getAccessTokenSilently();
        },
        getWithAuth: async (endpointUrl) => {
            return await TigimoHttp.getJson(
                `${WS.core.getApiUrl()}/${endpointUrl}`,
                {'Authorization': `Bearer ${await WS.core.getAccessToken()}`}
            )
        },
        postWithAuth: async (endpointUrl, postData) => {
            return await TigimoHttp.postJson(
                `${WS.core.getApiUrl()}/${endpointUrl}`,
                postData,
                {'Authorization': `Bearer ${await WS.core.getAccessToken()}`}
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
        },
        postings: {
            fetchChannelPostings: async (channelId) => {
                return await WS.core.getWithAuth(`postings/channel/${channelId}`)
            },
            create: async (postingData) => {
                return await WS.core.postWithAuth('postings', postingData)
            }
        }
    }
};
export default WS;