import axios from "axios";

const state = {
  todos: [],
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    commit("addTodos", response.data);
  },
  async addTodo({ commit }, title) {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      { title, completed: false }
    );
    console.log(response.data);
    commit("addTodo", response.data);
  },
  async deleteTodo({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    commit("deleteTodo", id);
  },
  async updateTodo({ commit }, todo) {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
      todo
    );
    commit("updateTodo", response.data);
  },
};

const getters = {
  getTodos: (state) => state.todos,
};

const mutations = {
  addTodos: (state, todos) => (state.todos = todos),
  addTodo: (state, todo) => state.todos.unshift(todo),
  deleteTodo: (state, id) =>
    (state.todos = state.todos.filter((todo) => todo.id !== id)),
  updateTodo: (state, upTodo) => {
    const index = state.todos.findIndex((todo) => todo.id === upTodo.id);
    if (index !== -1) {
      state.todos.splice(index, 1, upTodo);
    }
  },
};

export default {
  state,
  actions,
  getters,
  mutations,
};
