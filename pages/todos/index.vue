<template>
  <section class="todos hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Todos overview page
        </h1>
        <ul>
          <li v-for="todo in todos" :key="todo.id">
            <nuxt-link :to="{ name: 'todos-id', params: { id: todo.id } }">
              {{ todo.id }} - {{ todo.title }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      todos: Array
    }
  },
  async asyncData({ params, error, payload }) {
    if (payload) return { todos: payload }
    else {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/'
      )
      return {
        todos: data
      }
    }
  }
}
</script>