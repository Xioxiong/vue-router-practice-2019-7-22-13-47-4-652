<template>
  <div class="input-form">
      <h2>添加todoList</h2><br/>
    <input type="input" v-model="inputtingItem" />
    <button @click="handleCreateTodo">Add</button>
    <TodoList></TodoList>
    <todolistfilter></todolistfilter>
  </div>
</template>

<script>
import axios from "axios";
import TodoList from "../components/TodoList.vue";
import todolistfilter from "../components/TodoListFilter.vue";

export default {
  name: "create-form",
  data: function() {
    return {
      inputtingItem: ""
    };
  },
  components: {
    TodoList,
    todolistfilter
  },
  methods: {
    handleCreateTodo: function() {
      this.$store.dispatch("createTodos", this.inputtingItem);
    }
  }
};
</script>

<style scoped>
</style>
