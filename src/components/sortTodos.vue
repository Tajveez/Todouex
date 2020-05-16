<template>
    <div>
    <h3>Sort Todos: </h3>
    <div class="sorterbox">
        <div class="sorters"
             @click="selectSort('completed')"
             :class="{selectedSort: selectedSort === 'completed'}">
            #completed
        </div>
        <div class="sorters" 
             @click="selectSort('uncompleted')"
             :class="{selectedSort: selectedSort === 'uncompleted'}">
            #uncompleted
        </div>
    </div>
    <hr>
    </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
    name: 'sortTodos',
    data() {
        return {
            selectedSort: ''
        }
    },
    methods: {
        ...mapActions([ 'getTodos', 'sortTodos']),
        selectSort(sortby){
            if(sortby == this.selectedSort){
                this.selectedSort = ''
                this.getTodos()
            } else {
                this.selectedSort = sortby
                this.sortTodos(sortby)
            }
        }
    }
}
</script>
<style scoped>
.sorters {
    background: #5e6a65; /* #41b883; */
    padding: .7rem;
    top: 5px;
    margin-right: 5px;
    /* margin: 5px; */
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
    color: white;
}
.selectedSort {
    background:  #41b883;
}
.sorterbox {
    display: flex;
}
</style>