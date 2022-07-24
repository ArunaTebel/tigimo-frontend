<template>
  <header class="bg-white">
    <div class="flex items-center h-16 max-w-screen-xl gap-8 px-4 mx-auto sm:px-6 lg:px-8">
      <a class="block text-teal-600" href="/public">
        <span class="sr-only">Home</span>
        <img src="../../assets/tigimo-logo.svg" alt="tigimo logo">
      </a>

      <div class="flex items-center justify-end flex-1 md:justify-between">
        <nav class="hidden md:block" aria-labelledby="header-navigation">
          <h2 class="sr-only" id="header-navigation">Header navigation</h2>
          <ul class="flex items-center gap-6 text-sm">
            <li>
              <span class="text-gray-500 transition hover:text-gray-500/75">
                <ChannelSelector v-if="isAuthenticated"/>
              </span>
            </li>
          </ul>
        </nav>

        <div class="flex items-center gap-4">
          <div class="sm:gap-4 sm:flex">
            <a class="block px-5 py-2.5 text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 transition rounded-md"
               href="/public"
               v-if="!isAuthenticated" @click="login">
              Login/Register
            </a>
            <span
                class="hidden sm:block px-5 py-2.5 text-sm font-medium text-teal-600 hover:text-teal-600/75 transition"
                v-if="isAuthenticated">
              Hello, {{ user.given_name }}
            </span><a
              class="hidden sm:block px-5 py-2.5 text-sm font-medium text-teal-600 bg-gray-100 rounded-md hover:text-teal-600/75 transition"
              href="/public"
              v-if="isAuthenticated" @click="logout">
            Logout
          </a>
          </div>

          <button class="block p-2.5 text-gray-600 transition bg-gray-100 rounded md:hidden hover:text-gray-600/75">
            <span class="sr-only">Toggle menu</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2">
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import {useAuth0} from "@auth0/auth0-vue";
import ChannelSelector from "../widgets/ChannelSelector.vue";

export default {
  name: "TopNavBar",
  components: {ChannelSelector},
  setup() {
    const {loginWithRedirect, logout, isAuthenticated, getAccessTokenSilently, user} = useAuth0()

    return {
      isAuthenticated,
      user,
      login: async () => {
        await loginWithRedirect();
        const accessToken = await getAccessTokenSilently()
        localStorage.setItem('access-token', accessToken);
      },
      logout: () => {
        logout({returnTo: window.location.origin})
      }
    };
  }
}
</script>
