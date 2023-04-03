<template>
  <div>other page...</div>

  <div>
    <button @click="go2pageHome">返回 Home page</button>
  </div>
  <div>
    参数：{{ data.params }}
  </div>
</template>

<script setup>

import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
let data = reactive({
  params: route.params
})

const go2pageHome = () => {
  router.push({
    name: 'home'
  })
}
</script>