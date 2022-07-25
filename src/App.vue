<template>
  <TigimoTopNavBarComponent/>
  <router-view></router-view>
</template>
<script>
import TigimoTopNavBarComponent from "./components/layouts/TigimoTopNavBarComponent.vue";

export default {
  components: {TigimoTopNavBarComponent},
};
</script>