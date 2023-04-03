<template>
  <div>about page</div>
  <div>
    <button @click="go2pageOther">跳转页面到 Other</button>
  </div>

  <div>
    参数：{{ data.query }}
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { reactive } from 'vue';
const router = useRouter()
const route = useRoute()

let data = reactive({
  query: route.query
})

const go2pageOther = () => {
  router.push({
    name: 'other',
    params: {
      name: 'from about page --'
    }
  })
}
</script>