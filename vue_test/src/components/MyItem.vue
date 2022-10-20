<template>
    <li>
        <label>
            <!--如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
            <!-- <input type="checkbox" v-mode1="todo.done"/> -->
            <input type="checkbox" :checked= "todo.done" @change="handleCheck(todo.id)"/>
            <span>{{todo.title}}</span>
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    </li>
</template>

<script>
    export default {
        name:'MyItem',
    }
</script>

<style>

</style>