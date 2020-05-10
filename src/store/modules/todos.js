import axios from 'axios';

const state = {
    todos: [],
    buttonLoader: false,
    loadingStatus: false
};
const getters = {
    allTodos: (state) => state.todos,
    buttonLoader: (state) => state.buttonLoader,
    loadingStatus: (state) => state.loadingStatus
};
const actions = {
    async getTodos({ commit }){

        state.loadingStatus = true
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/todos'
            );
        state.loadingStatus = false
        console.log(response.data);
        commit('setTodos', response.data);
    },
    async addTodo({ commit }, title) {
        state.buttonLoader = true
        const response = await axios.post(
            'https://jsonplaceholder.typicode.com/todos',
            {
                title,
                completed: false
            });
        state.buttonLoader = false
        commit('newTodo', response.data);
    },
    async deleteTodo({ commit }, id) {
        state.loadingStatus = true
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        state.loadingStatus = false
        commit('removeTodo', id)
    },
    async filterTodos({ commit }, e){
        state.loadingStatus = true
        const selectIndex = e.target.options.selectedIndex;
        const limit = parseInt(e.target.options[selectIndex].innerText)
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
        );
        state.loadingStatus = false
        commit('setTodos', response.data);
    },
    async completeTodo({ commit }, todo){
        state.loadingStatus = true
        const response = await axios.put(
            `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
            todo
        );
        state.loadingStatus = false
        commit('updateTodos', response.data);
    },
    async sortTodos({ commit }, sortOrder){

        state.loadingStatus = true
        let isCompleted
        if (sortOrder == 'completed') {
            isCompleted = 'true'
        } else {
            isCompleted = 'false'
        }
        let response = ''
        try {
            response = await axios.get(
                `https://jsonplaceholder.typicode.com/todos?completed=${isCompleted}`
            );
        } catch(err) {
            state.loadingStatus = false
            return response.status(500).send(err);
        }
        state.loadingStatus = false
        console.log(response.data);
        commit('setTodos', response.data);
    },
};
const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
    updateTodos: (state, updTodo) => {
        const index = state.todos.findIndex(todo => todo.id === updTodo.id)
        if(index !== -1){
            state.todos.splice(index,1,updTodo)
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};