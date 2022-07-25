<template>
  <h1>Tigimo - Home</h1>
  <ul>
    <li><router-link to="/dashboard">Go to Dashboard</router-link></li>
    <li><router-link to="/add-channel">Add a Channel</router-link></li>
    <li><router-link to="/add-posting">Add a Posting</router-link></li>
  </ul>
</template>

<script>
export default {
  name: "TigimoHomeComponent"
}
</script>

<style scoped>

</style>