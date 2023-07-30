<template>
  <div id="app">
    <!-- Default view for other routes -->
    <router-view></router-view>
    <!-- Named view for the /dashboard route -->
    <router-view name="dashboard"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Your global CSS styles */
</style>
