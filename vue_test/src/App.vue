<template>
    <div id="root">
        <div class="todo-container">
            <div class= " todo-wrap" >
                <MyHeader :addTodo= " addTodo"/>
                <MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
                <MyFooter :todos= "todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"/>
            </div>
        </div>
    </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList.vue'
import MyFooter from './components/MyFooter.vue'

export default {
  name: 'App',
  components: {MyHeader,MyList,MyFooter},
}
</script>

<style>
</style>