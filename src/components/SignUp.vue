<template>

<img class="logo" src="../assets/resto.jpg"/>
    <h1>
        SignUp 
    </h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter your name"/>
        <input type="text"  v-model="email" placeholder="Enter your email"/>
        <input type="password"  v-model="password" placeholder="Enter your password"/>
       
        <!-- <router-link class ="btn btn-primary" to='/homepage' @click="onregister">Sign Up</router-link> -->
       <button @click="onregister">Sign Up</button>
       <p>
          Not LoggedIn Yet ? <router-link to='/login'  >Login</router-link>
           </p>
       
        
        </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:'SignUp',
        data(){
return{
   
    name:"",
    email:"",
    password:""
   
}        },
        methods:{
             async onregister()
            {
               let result=  await axios.post("http://localhost:3000/users",{
                   name:this.name,
                   email:this.email,
                   password:this.password
                   
                })
                console.log(result)
                if(result.status===201){
                   
                    localStorage.setItem("user-info",JSON.stringify(result.data))
                    // alert("Signup successfully")
                    this.$router.push({name:'HomePage'})
                    
                

                }
            }
           
        },
        mounted()
        {
           
            let user=localStorage.getItem('user-info');
            if(user)
            {
            this.$router.push({name:'HomePage'})
            console.log(user,"in singnup")
            }
        }
    }
</script>
<style>

</style>

