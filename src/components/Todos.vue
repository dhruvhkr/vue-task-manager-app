<template>
  <h1>Todos</h1>
  <AddTodo />
  <div class="todos">
    <div
      @dblclick="updateHandler(todo)"
      :class="todo.completed && 'complete'"
      :key="todo.id"
      class="todo"
      v-for="todo in getTodos"
    >
      <h2>{{ todo.title }}</h2>
      <i
        @click="deleteTodo(todo.id)"
        class="fa fa-trash"
        aria-hidden="true"
      ></i>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddTodo from "./AddTodo.vue";

export default {
  name: "Todos",
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
    updateHandler(todo) {
      const upTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed,
        userId: todo.userId,
      };
      this.updateTodo(upTodo);
    },
  },
  created() {
    this.fetchTodos();
  },
  computed: mapGetters(["getTodos"]),
  components: {
    AddTodo,
  },
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.todo {
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: lightblue;
  border: 2px solid lightcoral;
  margin: 5px;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
}
.complete {
  background: green;
}
@media (max-width: 600px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
