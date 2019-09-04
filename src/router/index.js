import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '../Welcome.vue'
import User from '../components/User.vue'
import CounterGroup from '../components/CounterGroup.vue'
import TodoList from '../components/TodoList.vue'
import todolistfilter from '../components/TodoListFilter.vue'
import createform from '../components/CreateForm.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: User
    },
    {
      path: '/welcome/:name',
      component: Welcome,
      props: true,
      children: [
        {
          path: 'counter',
          name: 'counter',
          component: CounterGroup
        },
        {
          path: 'toDoList',
          name: 'todo',
          component: TodoList
        },
        {
          path: 'createform',
          name: 'createform',
          component: createform
        }
      ]
    },
    {
      path: '/counter',
      name: 'counter',
      component: CounterGroup
    },
    {
      path: '/toDoList',
      name: 'todo',
      component: TodoList
    },
    {
      path: '/todolistfilter',
      name: 'todolistfilter',
      component: todolistfilter
    },
    {
      path: '/createform',
      name: 'createform',
      component: createform
    }
  ]
})
