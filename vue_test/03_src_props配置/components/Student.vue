<template>
    <div>
        <h1>{{msg}}</h1>
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <h2>学生年龄：{{age+1}}</h2>
    </div>
</template>

<script>
    export default {
        name:'Student', 
        data(){
            return {
                msg:'---通用信息行---',
            }
        },
        //简单声明接收（一般开发用这个多）
        // props:['name','sex','age']  //这些传入的数据值不应该去改，虽然可以实现。非要修改就在data下加中间变量myAge:this.age，{{myAge}}

        //接收的同时对数据进行类型限制
        // props:{
        //     name:String,
        //     sex:String,
        //     age:Number,
        // }

        //接收的同时对数据进行类型限制+默认值的指定+必要性的限制
        props:{
            name:{
                type:String, //name的类型是字符串
                required:true //name是必要的
            },
            age:{
                type:Number,
                default:99 //默认值
            },
            sex:{
                type:String, 
                required:true 
            }
        }
    }
</script>
