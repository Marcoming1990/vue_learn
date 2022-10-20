<template>
  <div>
    <Student name="李四" sex="女" :age="18"/>
    <!-- v-bind:age="表达式 or Number？" -->
    <!-- <Student name="王五" sex="男" :age="55+1"/> -->
  </div>
</template>

<script>
import Student from './components/Student.vue'

export default {
  name: 'App',
  components: {Student},
}
</script>
