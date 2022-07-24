<template>
  <TopNavBar/>
  <input placeholder="Channel Name" v-model="channelName">
  <input placeholder="Channel Description" v-model="channelDescription">
  <button @click="addChannel">Add Channel</button>
</template>
<script>
import TopNavBar from "./components/layouts/TopNavBar.vue";
import WS from "./lib/WebService";

export default {
  components: {TopNavBar},
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