<template>
    <ul class= "todo-main">
        <MyItem v-for="todoObj in todos" :key= "todoObj.id" :todo="todo0bj" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
    </ul>
</template>


<script>
    import MyItem from './components/MyItem.vue'

    export default {
        name:'MyList',
        components:{MyItem}
    }
</script>

<style>

</style>