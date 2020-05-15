<template>
  <div class="alert alert-success alert-dismissible fade show" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  </div>
</template>

<script>
export default {
    name: 'NotificationMessage'
}
</script>

<style>
.alert{
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.888);
}
</style>