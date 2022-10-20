<template>
    <div>
        <h2 @click="showName">学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
    //引入一个混合
    import {mixin,mixin2} from '../mixin.js'
    export default {
        name:'School', 
        data(){
            return {
                name:'清华小学',
                address:'北京市',
            }
        },
        mixins:[mixin,mixin2],
    }
</script>
