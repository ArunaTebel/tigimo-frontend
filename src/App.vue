<template>
  <h1 class="text-2xl font-bold underline">
    Hello world!
  </h1>
  <div>
    <button v-if="!isAuthenticated" @click="login">Log in</button>
    <button v-if="isAuthenticated" @click="logout">Log out</button>
    <pre v-if="isAuthenticated"><code>{{ user }}</code></pre>
    <button v-if="isAuthenticated" @click="showAccessToken">Show Access Token</button>
    <pre><code id="access-token"></code></pre>
  </div>
</template>
<script>
import {useAuth0} from '@auth0/auth0-vue';

export default {
  setup() {
    const {loginWithRedirect, logout, isAuthenticated, user, getAccessTokenSilently} = useAuth0()

    return {
      login: () => {
        loginWithRedirect();
      },
      logout: () => {
        logout({returnTo: window.location.origin})
      },
      user,
      isAuthenticated,
      showAccessToken: async () => {
        const accessToken = await getAccessTokenSilently()
        document.getElementById('access-token').innerHTML = accessToken
        localStorage.setItem('access-token', accessToken);
      }
    };
  }
};
</script>