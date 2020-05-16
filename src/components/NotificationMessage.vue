<template>
  <div :class="'alert-'+type" class="alert alert-dismissible fade show" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
    {{ message }}
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: 'NotificationMessage',
    props: [
      'message',
      'type'
    ],
    data() {
      return {
        timeout: null
      }
    },
    methods: {
      ...mapActions(['removeNotification'])
    },
    created() {
      this.timeout = setTimeout(()=>{
        this.removeNotification()
      }, 3000)
    },
    beforeDestroy () {
      clearTimeout(this.timeout)
    }
}
</script>

<style>
.alert{
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.888);
}
</style>