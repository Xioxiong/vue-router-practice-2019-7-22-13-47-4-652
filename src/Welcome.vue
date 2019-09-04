<template>
    <div id="welcome">
        <h2>Welcome to {{name}} !</h2>
        <router-link :to="'/'">首页</router-link><br>
        <router-link :to="'/welcome/'+name">Welcome</router-link><br>
        <router-link :to="{name:'counter'}">go to Counter</router-link><br>
        <router-link :to="{name:'createform'}">go to todoList</router-link>
        <router-view></router-view><br>
    </div>
</template>
<script>
    export default{
        name:"",
        props:['name']
    }
</script>