<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="showName">点我提示学校名</button>
    </div>
</template>

<script>
    //组件交互相关的代码（数据、方法等）
    //export default Vue.extend({ //可简写为下一行
    export default {
        name:'School', //最好跟文件名保持一直（文件名用首字母大写的方式）
        data(){
            return {
                name:'清华小学',
                address:'北京',
            }
        },
        methods: {
            showName(){
                alert(this.schoolName)
            }
        },
    }
</script>

<style>
    /*组件的样式*/
    .demo{
        background-color: orange;
    }
</style>