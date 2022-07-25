<template>
  <input placeholder="Title" v-model="title">
  <input placeholder="URL" v-model="url">
  <input placeholder="Note" v-model="note">
  <button @click="addChannel">Add Posting</button>
  <TigimoChannelSelector v-on:channelSelectionChanged="setSelectedChannelId"/>
</template>

<script>
import WS from "../../lib/TigimoWebService";
import TigimoChannelSelector from "../widgets/TigimoChannelSelector.vue";

export default {
  name: "TigimoAddPostingComponent",
  components: {TigimoChannelSelector},
  data: () => {
    return {
      title: '',
      url: '',
      note: '',
      channelId: '',
    }
  },
  methods: {
    addChannel: function () {
      WS.models.postings.create({
        title: this.title,
        url: this.url,
        note: this.note,
        channel: this.channelId
      });
    },
    setSelectedChannelId: function (channel) {
      this.channelId = channel._id
    }
  },
  setup() {

  }
}
</script>
