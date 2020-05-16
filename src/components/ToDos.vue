<template>
  <div>
    <h3>Todos</h3>
      <div class="todos">
        <!-- <div 
          class="todo isComplete">
          Making on page preloader and in button preloader
        </div>
        <div 
          class="todo isComplete">
          Making Alertboxes, success messages
        </div>
        <div  
          class="todo isComplete">
          sorting with tags
        </div>
        <div 
          class="todo isComplete">
          editing todo text
        </div> -->
        <div 
          v-for="todo in allTodos" 
          :key="todo.key" 
          class="todo"
          :class="{isComplete:todo.completed}"
          @dblclick="editTodo(todo)">
          <textarea v-if="todo.edit" v-model="todo.title" @keyup.enter="updateTodoData(todo)"></textarea>
          <span v-else>{{ todo.title }}</span>
          <div class="actions">

            <i v-if="todo.completed" @click="toggleTodo(todo)"  class="far fa-check-square"></i>
            <i v-else @click="toggleTodo(todo)"  class="far fa-square"></i>
            <i @click="deleteTodo(todo.id)" class="far fa-trash-alt"></i>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: "Todos",
  methods: {
    ...mapActions(['getTodos', 'deleteTodo', 'updateTodoData']),
    toggleTodo(todo){
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      }
      
      this.updateTodoData(updTodo)
    },
    editTodo(todo){
      todo.edit = true
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
  textarea {
    overflow: auto;
    resize: vertical;
    background: transparent;
    /* color: transparent; */
    resize: none;
    text-align: center;
    border: 0 none;
    width: 100%;
    /* font-size: 5em; */
    outline: none;
    height: 100%;
    /* position: absolute; */
  }
  .todos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }
  .todo{
    /* border: 1px solid #ccc; */
    background: #41b883;
    padding: 1.3rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    /* cursor: pointer; */
    /* transition: box-shadow 0.3s ease-in-out; */
    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .todo::after {
    /* box-shadow: 0 5px 15px rgba(0, 0, 0, 0.888); */
    opacity: 0;
    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .todo:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.888);
    -webkit-transform: scale(1.05, 1.05);
    transform: scale(1.05, 1.05);
    /* z-index: 99999; */
  }
  .todo:hover::after {
    opacity: 1;
  }
  .actions {
    position: absolute;
    bottom: 1px;
    right: 5px;
    color: #fff;
    cursor: pointer;
  }
  i {
    padding: 2px;

  }
  .isComplete {
    background: #5e6a65;
    color: white;
    font-style: italic;
    text-decoration: line-through;
  }
</style>