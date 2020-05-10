<template>
  <div>
    <h3>Todos</h3>
      <div class="todos">
        <div 
          class="todo isComplete">
          Making on page preloader and in button preloader
        </div>
        <div 
          class="todo">
          Making Alertboxes, success messages
        </div>
        <div  
          class="todo isComplete">
          sorting with tags
        </div>
        <div 
          class="todo">
          editing todo text
        </div>
        <div 
          v-for="todo in allTodos" 
          @dblclick="toggleTodo(todo)" 
          :key="todo.key" 
          class="todo"
          :class="{isComplete:todo.completed}">
          {{ todo.title }}
          <i @click="deleteTodo(todo.id)" class="far fa-trash-alt"></i>
        </div>
      </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: "Todos",
  methods: {
    ...mapActions(['getTodos', 'deleteTodo', 'completeTodo']),
    toggleTodo(todo){
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      }
      
      this.completeTodo(updTodo)
    }
  },
  computed: {
    ...mapGetters(['allTodos', 'loadingState']),
  },
  created(){
    this.getTodos()
  }
}
</script>
<style scoped>
  .todos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }
  .todo{
    border: 1px solid #ccc;
    background: #41b883;
    padding: 1.3rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
  }
  i {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #fff;
    cursor: pointer;
  }
  .isComplete {
    background: #5e6a65;
    color: white;
    font-style: italic;
    text-decoration: line-through;
  }
</style>