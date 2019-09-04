import axios from "axios";
export default {
    strict: true,
    state: {
        todoList: [
            {status: 'completed', content: '吃饭'},
            {status: 'completed', content: '睡觉'},
            {status: 'completed', content: '打豆豆'}
        ],
        currentFilter: 'all',
        loadding:false
    },
    getters: {
        filteredTodoList: function (state) {
            let filteredTodoList = [];
            for (let i = 0; i < state.todoList.length; i++) {
                if (state.currentFilter === 'all' || state.currentFilter === state.todoList[i].status) {
                    filteredTodoList.push(state.todoList[i])
                }
            }
            return filteredTodoList;
        }
    },
    mutations:{
        minusValue(state,index){
            state.counters[index].value--;
            state.counterTotal--;
        },
        plusValue(state,index){
            state.counters[index].value++;
            state.counterTotal++;
        },
        addTodoList(state,value){
            state.todoList.push({
                         status: 'active',
                         content:value
            })
        },
        changeStatus(state,index){
            state.todoList[index].status = state.todoList[index].status === 'completed' ? 'active' : 'completed';
        },
        changeFilter(state,filter){
            state.currentFilter = filter;
        },
        initTodos(state,todos){
            state.todoList = todos;
        },
        startLoadding(state){
            state.loadding = true
        },
        completeLoadding(state){
            state.loadding = false
        }
    },
    actions:{
        fetchTodos(context){
            const url = "http://5b4dcb2aec112500143a2311.mockapi.io/api/todos";
            alert(fdsafasf)
            context.commit('startLoadding');
            axios.get(url).then(function(reponse){
                    context.commit('completeLoadding');
                    context.commit('initTodos',reponse.data);
            }).catch(function(error){
                alert(error.reponse)
            })           
        },
        createTodos(context,content){
            const url = "http://5b4dcb2aec112500143a2311.mockapi.io/api/todos";
            axios.post(url,{
            "id":"",
            "content":content,
            "status":"active"
        }).then(function(reponse){
            context.dispatch('fetchTodos');
        }).catch(function(error){
            alert(error)
        })
        },
        updateTodos(context,index){
            const url = "http://5b4dcb2aec112500143a2311.mockapi.io/api/todos/"+index;
            axios.put(url,{
            "id":"",
            "content":"默认修改值",
            "status":"active"
        }).then(function(reponse){
            context.dispatch('fetchTodos');
        }).catch(function(error){
            alert(error)
        })
        }
    }
}
