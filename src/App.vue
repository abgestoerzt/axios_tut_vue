<template>
  <nav>
    <router-link to="/home-view">Home /
    </router-link> 
    <router-link
    v-if="this.$store.state.isAuthenticated==false"
     to="/sign-up">
     Sign Up /
    </router-link> 
    <router-link
    v-if="this.$store.state.isAuthenticated==false"
     to="/log-in">
     Log In /
    </router-link> 

    <router-link
    v-if="this.$store.state.isAuthenticated"
     to="/log-out">
     Log Out /
      </router-link> 
  </nav>
  <router-view/>
</template>

<script>

import axios from 'axios'

export default {
  beforeCreate(){
    this.$store.commit('initializeStore')

    const token = this.$store.state.token
    if (token) {
      axios.defaults.headers.common['Authorization'] = 'Token '+ token
      
    } else{
      axios.defaults.headers.common['Authorization'] = ''
    }
  }
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
