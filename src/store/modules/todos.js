import axios from 'axios';

const state = {
    todos: [],
    notifications: [],
    buttonLoader: false,
    loadingStatus: false
};
const getters = {
    allTodos: (state) => state.todos,
    buttonLoader: (state) => state.buttonLoader,
    loadingStatus: (state) => state.loadingStatus,
    getNotifications: (state) => state.notifications
};
const actions = {

    async getTodos({ commit }){

        state.loadingStatus = true
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/todos'
            );
        state.loadingStatus = false
        let todoData = response.data
        let result = todoData.map(obj => ({
             ...obj,
             edit: false 
        }))
        console.log(result);
        commit('setTodos', result);
    },
    async addTodo({ commit, dispatch }, title) {
        state.buttonLoader = true
        const response = await axios.post(
            'https://jsonplaceholder.typicode.com/todos',
            {
                title,
                completed: false
            });
        state.buttonLoader = false
        dispatch('addNotification', {
            message: 'New Todo Added Successfully!',
            type: 'success'
        })
        commit('newTodo', response.data);
    },
    async deleteTodo({ commit, dispatch }, id) {
        state.loadingStatus = true
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        state.loadingStatus = false
        dispatch('addNotification', {
            message: 'Todo Deleted Successfully!',
            type: 'warning'
        })
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
    async updateTodoData({ commit, dispatch }, todo){
        state.loadingStatus = true
        const response = await axios.put(
            `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
            todo
        );
        state.loadingStatus = false
        dispatch('addNotification', {
            message: 'Todo Status Updated Successfully!',
            type: 'info'
        })
        let result = {
            ...response.data,
            edit: false
        }
        commit('updateTodos', result);
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
        let todoData = response.data
        let result = todoData.map(obj => ({
             ...obj,
             edit: false
        }))
        commit('setTodos', result);
    },
    addNotification({commit}, notification){
        commit('addNewNotification', notification)
    },
    removeNotification({commit}){
        commit('removeNotification')
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
    },
    addNewNotification: (state, notification) => {
        state.notifications.unshift({
            ...notification,
            id: (Math.random().toString(32) + Date.now().toString(32)).substr(2)
        })
    },
    removeNotification: (state) => {
        state.notifications.pop()
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};