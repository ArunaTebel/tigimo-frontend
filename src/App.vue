<template>
  <TigimoTopNavBar/>
  <input placeholder="Channel Name" v-model="channelName">
  <input placeholder="Channel Description" v-model="channelDescription">
  <button @click="addChannel">Add Channel</button>
</template>
<script>
import TigimoTopNavBar from "./components/layouts/TigimoTopNavBar.vue";
import WS from "./lib/TigimoWebService";

export default {
  components: {TigimoTopNavBar},
  data: () => {
    return {
      channelName: '',
      channelDescription: '',
    }
  },
  methods: {
    addChannel: function () {
      WS.models.channels.create({
        name: this.channelName,
        description: this.channelDescription
      });
    }
  }
};
</script>