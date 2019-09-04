<template>
    <div id="app">
        <router-view/>
        <!-- <router-link to="/">Welcome</router-link><br/>
        <router-link to="/counter">go to Counter</router-link><br/>
        <router-link to="/toDoList">go to todo</router-link> -->
        <!-- <CounterGroup :counterNumber="counterNumbers"/> -->
    </div>
</template>

<script>
    import CounterGroup from './components/CounterGroup.vue'

    export default {
        name: 'app',
        components: {
            CounterGroup
        },
        data:function(){
            return {
                counterNumbers:3
            }
        }
    }
</script>

<style>
   #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .items {
        list-style: none;
        text-align: left;
        line-height: 30px;
    }

    .items li.completed {
        text-decoration: line-through;
    }

    .filter a {
        margin: 0 10px;
        line-height: 30px;
    }

    .filter a.active {
        color: #f60;
        border: 1px solid #ccc;
        border-radius: 2px;
        padding: 3px;
        cursor: pointer;
    }
</style>
