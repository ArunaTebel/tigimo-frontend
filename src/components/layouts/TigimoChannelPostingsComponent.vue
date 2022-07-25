<template>
  <pre><code>{{ channelPostings }}</code></pre>
</template>

<script>
import WS from "../../lib/TigimoWebService";

export default {
  name: "TigimoChannelPostingsComponent",
  data() {
    return {
      channelPostings: {}
    }
  },
  async created() {
    this.channelPostings = await this.getChannelPostings(this.$route.params.channelId)
  },
  async beforeRouteUpdate(to, from) {
    this.channelPostings = await this.getChannelPostings(to.params.channelId)
  },
  methods: {
    async getChannelPostings(channelId) {
      return await WS.models.postings.fetchChannelPostings(channelId)
    }
  }
}
</script>

<style scoped>

</style>