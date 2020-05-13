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
    box-shadow: 2px 2px 9px grey;
}
</style>