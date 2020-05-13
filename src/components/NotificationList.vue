<template>
  <div class="notification-list">
    <NotificationMessage />
    <NotificationMessage />
    <NotificationMessage />
    <NotificationMessage />

  </div>
</template>

<script>
import NotificationMessage from "./NotificationMessage";
export default {
  name: 'NotificationList',
  components: {
    NotificationMessage
  }
}
</script>

<style>
.notification-list{
    position:fixed;
    bottom: 0px;
    right: 0px;
    width: 320px;
    margin-right: 15px;
    /* z-index: 9999; */
}
</style>