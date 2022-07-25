import {createApp} from 'vue'
import {createAuth0} from '@auth0/auth0-vue'
import App from './App.vue'
import './index.css'
import router from "./router";
import {auth0} from "./lib/auth0";

const app = createApp(App)

app.use(router)
app.use(
    auth0
)

app.mount('#app')
