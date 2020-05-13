<template>
  <div id="app">
    <div class="container">
      <h1>
        Todouex Manager
      </h1>
      <preloader />
      <AddTodo />
      <filterTodo />
      <h3>Sort by:</h3>
      <sortTodos />
      <Todos />
      <NotificationList />
    </div>
  </div>
</template>

<script>
import Todos from './components/ToDos.vue'
import AddTodo from './components/AddTodo.vue'
import preloader from './components/preloader.vue'
import filterTodo from './components/filterTodo.vue'
import sortTodos from './components/sortTodos.vue'
import NotificationList from './components/NotificationList.vue'

export default {
  name: 'App',
  components: {
    Todos,
    AddTodo,
    preloader,
    filterTodo,
    sortTodos,
    NotificationList
  }
}
</script>

<style>
body {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  background: #e8f7f0;
  line-height: 1.6;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
