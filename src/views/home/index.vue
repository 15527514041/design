<template>
  <div>home page...</div>

  <div>
    <button @click="go2pageAbout">跳转页面到 About</button>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()

const go2pageAbout = () => {
  router.push({
    name: 'about',
    query: {
      id: 1,
      name: 'from home page'
    }
  })
}
</script>