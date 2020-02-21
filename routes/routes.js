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