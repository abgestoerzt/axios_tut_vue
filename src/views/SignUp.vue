<template>
    <div class="sign-up">
        <h1>Sign Up</h1>
        <form @submit.prevent="submitForm">
        <input type="text" name="username" v-model="username">
        <input type="password" name="password" v-model="password">
        <button type="submit">Sign Up</button>
        </form>
    </div>
</template>


<script>
import axios from 'axios'


export default{
    name: 'SignUp',
    data(){ return{
        username: '',
        password: '',
    }
    },
    methods:{
        submitForm() {
            const formData = {
                username: this.username,
                password: this.password
            }

            axios
                .post('/api/v1/users/', formData)
                .then(response=> {
                    this.$router.push('/log-in')
                    console.log(response)
                })
                .catch(error=>{
                    console.log(error)
                })
        }
    }
}

</script>