import {createAuth0} from "@auth0/auth0-vue";

export const auth0 = createAuth0({
    domain: "archeun.us.auth0.com",
    client_id: "NcgYsWDqReSz9IKDkP3DdYECl48c9Tek",
    redirect_uri: `${window.location.origin}/authCallback`,
    audience: 'https://archeun-tigimo/api',
});