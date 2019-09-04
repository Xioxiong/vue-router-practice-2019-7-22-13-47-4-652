<template>
  <div id="user">
    <img src="../assets/logo.png" alt="kaishi"/><br>
    <input type="text" v-model="name" />
    <button @click="start">Start</button>
  </div>
</template>

<script>
export default {
  name: "user",
  data: function() {
    return {
      name: ""
    };
  },
  methods: {
    start: function() {
      this.$router.push("/welcome/" + this.name);
    }
  }
};
</script>
