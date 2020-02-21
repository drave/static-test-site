<template>
  <section class="todo hero is-success">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          {{ todo.title }}
        </h1>
        <h2 class="subtitle">id: {{ todo.id }} (detail page)</h2>
      </div>
    </div>
  </section>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      id: this.$route.params.id,
      todo: Object
    }
  },
  async asyncData({ params, error, payload }) {
    if (payload) return { todo: payload }
    else {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${params.id}`
      )
      return {
        todo: data
      }
    }
  }
}
</script>