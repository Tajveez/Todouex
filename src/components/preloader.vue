<template>
    <div class="preloader" v-if="loadingStatus">
        <p class="loader-text"><i class="fa fa-compass"></i> <em>Loading...</em></p>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'preloader',
    computed: {
      ...mapGetters(['loadingStatus'])
    }
}
</script>
<style scoped>
.fa-compass {
  animation: spin 2s linear infinite;
}
.loader-text {
  font-size: 50px;
  color: white;
}
.preloader {
  position: fixed; /* Sit on top of the page content */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  text-align: center;
  padding-top: 20%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  overflow: hidden;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>