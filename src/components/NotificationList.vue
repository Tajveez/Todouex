<template>
  <div class="notification-list">
    <NotificationMessage v-for="notification in getNotifications"
      :key="notification.id"
      :message="notification.message"
      :type="notification.type"
    />
  </div>
</template>

<script>
import NotificationMessage from "./NotificationMessage";
import { mapGetters } from "vuex";

export default {
  name: 'NotificationList',
  components: {
    NotificationMessage
  },
  computed: {
    ...mapGetters(['getNotifications'])
  },
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