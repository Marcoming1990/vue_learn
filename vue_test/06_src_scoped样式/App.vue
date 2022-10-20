<template>
  <div>
    <School/>
    <hr>
    <Student/>
  </div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'

export default {
  name: 'App',
  components: {School,Student},
}
</script>

<style>
/* 加scoped其他组件就不能用到，一般不写 */
/* <style scoped> */ 
  .title{
    color:red
  }
</style>