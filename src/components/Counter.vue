<template>
  <div class="counter">
    <button class="plus" @click="plus">+</button>
    <span class="value">{{value}}</span>
    <button class="minus" @click="minus">-</button>
  </div>
</template>

<script>
export default {
  name: "counter",
  props: {
    index: Number,
    value: Number
  },
  methods: {
    minus: function() {
      var element = this.$store.state.counters[this.index];
      this.$store.commit("minusValue", this.index, element.value);
    },
    plus: function() {
      var element = this.$store.state.counters[this.index];
      this.$store.commit("plusValue", this.index, element.value);
      if(this.$store.getters.counterSum>=10){
          this.$router.push({path:'/'});
      }
    }
  }
};
</script>
<style scoped>
</style>
