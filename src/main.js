import {createApp} from 'vue'
import {createAuth0} from '@auth0/auth0-vue'
import App from './App.vue'

const app = createApp(App)

app.use(
    createAuth0({
        domain: "archeun.us.auth0.com",
        client_id: "NcgYsWDqReSz9IKDkP3DdYECl48c9Tek",
        redirect_uri: window.location.origin,
        audience: 'https://archeun-tigimo/api',
    })
)

app.mount('#app')
