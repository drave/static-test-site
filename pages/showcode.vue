<template>
  <section class="section">
    <h1 class="title">Code</h1>
    <pre v-highlightjs="sourcecode"><code class="javascript"></code></pre>
  </section>
</template>
<script>
export default {
  data() {
    return {
      sourcecode: `
      // index.vue
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
  

      // nuxt.config.js
      generate: {
        routes: dynamicRoutes
      },

      // route.js
      import axios from 'axios'
      export default () => {
      return axios.get('https://jsonplaceholder.typicode.com/todos/')
      .then((res) => {
          let todos = res.data.map((todo) => {
            return {
              route: '/todos/' + todo.id,
              payload: todo
            }
          })

          todos.push({
            route: '/todos/',
              payload: res.data
          })
          return todos
        })
      }

  
  `
    }
  }
}
</script>
