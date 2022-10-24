<template>
    <li>
        <label>
            <!--如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
            <!-- <input type="checkbox" v-mode1="todo.done"/> -->
            <input type="checkbox" :checked="todo.done"/>
            <span>{{todo.title}}</span>
        </label>
        <button class="btn btn-danger">删除</button>
    </li>
</template>

<script>
    export default {
        name:'MyItem',
        //声明接收todo对象
        props:['todo'],
    }
</script>

<style scoped>
    /*item*/
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }
    li label {
        float: left;
        cursor: pointer;
    }
    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }
    li button {
        float: right;
        display: none;
        margin-top: 3px;
    }
    li:before {
        content: initial;
    }
    li:last-child {
        border-bottom: none;
    }
    li:hover{
        background: #ddd;
    }
    li:hover button{
        display: block;
    }
</style>