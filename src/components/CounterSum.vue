<template>
    <div class="counter-sum">
        <h2>
            Counter Sum: <span>{{counterSum}}</span>
        </h2>
    </div>
</template>

<script>
    export default {
        name: 'counter-sum',
        computed:{
            counterSum:function(){
                return this.$store.getters.counterSum;
            }
        }
    }
</script>
<style scoped>

</style>
