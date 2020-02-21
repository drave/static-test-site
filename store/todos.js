export const state = () => ({
  list: []
})

export const mutations = {
  add (state, text) {
    state.list.push({
      text,
      done: false
    })
  },
  remove (state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle (state, todo) {
    todo.done = !todo.done
  }
}

export const actions = {
  async fetchTodo ({ commit }, id) {
    const data = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    return data;
  }
}

// async GET_STARS ({ commit }) {
//     const { data } = await axios.get('http://my-api/stars')
//     commit('SET_STARS', data)
//   }