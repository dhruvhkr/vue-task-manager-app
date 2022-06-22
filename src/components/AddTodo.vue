<template>
  <form @submit="onSubmit">
    <input type="text" placeholder="title" v-model="title" />
    <input type="submit" value="Submit" />
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit(e) {
      e.preventDefault();
      if (!this.title) {
        alert("Please enter the title");
      }
      this.addTodo(this.title);
      this.title = "";
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  padding: 4px;
  border-radius: 2px;
  outline: none;
  border: 2px solid lightgray;
  flex: 0.9;
}
input[type="submit"] {
  padding: 8px;
  border-radius: 2px;
  outline: none;
  border: 2px solid lightgray;
}
</style>
