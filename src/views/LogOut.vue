 <h1>Sure you want to log out?</h1>


<template>
    <div class="log-out">
        <h1>Sure you want to log out?</h1>

        <form @submit.prevent="logOut">   
            <button type="submit">Log Out</button>
  
        </form>
        <form @submit.prevent="stayOn">   

            <button type="submit">No</button>
        </form>
 


    </div>
</template>

 <script>
import axios from 'axios'

export default{
    name: 'LogOut',
 
    methods: {
        logOut(){
            
            axios
                .post('/api/v1/token/logout')
                .then(response => {
                    console.log(response)
                    //const token = this.$store.state.token
                    this.$store.commit('removeToken')

                    localStorage.clear()
                 
                    axios.defaults.headers.common['Authorization'] = ''
      
         


                    this.$router.push('/home-view')
                 


                })
                .catch(error=> {
                    console.log(error)
                })
        }
    }
}

</script> --> -->