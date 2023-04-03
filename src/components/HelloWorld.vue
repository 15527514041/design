<script setup>
import { ref } from 'vue'
import {useRouter,useRoute} from 'vue-router'
const router=useRouter()
const route=useRoute()

defineProps({
  msg: String,
})

const count = ref(0)

const go2page = () => {
  router.push({
    name: "about", //name的值对应routes.js中的name值
    params: {
      name: "张三", //传递参数
    },
  })
}

</script>

<template>
  <h1>{{ msg }}</h1>


  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
