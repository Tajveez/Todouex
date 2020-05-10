<template>
    <div>
        <h3>
            Add Todo
        </h3>
        <div class="add">
            <form @submit.prevent="onSubmit">
                <input type="text" v-model="title" placeholder="Add Todo..." >
                <button class="submit">
                    <span v-if="!buttonLoader">
                    Add
                    </span>
                    <i v-else class="fa fa-compass"></i>

                </button>
            </form>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'AddTodo',
    data() {
        return {
            title: '',
        }
    },
    methods: {
        ...mapActions(['addTodo']),
        onSubmit(){
            this.loading = true
            this.addTodo(this.title);
            this.title = ''

            // this.loading = false
        }
    },
    computed: {
        ...mapGetters(['buttonLoader'])
    }
}
</script>
<style scoped>
form {
    display: flex;
}

input[type="text"] {
    flex: 10;
    padding: 10px;
    border: 1px solid #41b883;
}

button[class="submit"] {
    flex: 2;
    background: #41b883;
    color: #fff;
    border: 1px #41b883 solid;
    cursor: pointer;
}
.fa-compass {
  animation: spin 2s linear infinite;
  font-size: 20px;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>