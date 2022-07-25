<template>
  <input placeholder="Channel Name" v-model="channelName">
  <input placeholder="Channel Description" v-model="channelDescription">
  <button @click="addChannel">Add Channel</button>
  <TigimoChannelSelector v-on:channelSelectionChanged="setSelectedChannelId"/>
</template>

<script>
import WS from "../../lib/TigimoWebService";
import TigimoChannelSelector from "../widgets/TigimoChannelSelector.vue";

export default {
  name: "TigimoAddChannelComponent",
  components: {TigimoChannelSelector},
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
    },
    setSelectedChannelId: (channel) => {
      this.channelId = channel._id
    }
  },
  setup() {

  }
}
</script>
