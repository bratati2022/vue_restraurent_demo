<template>

<img class="logo" src="../assets/resto.jpg"/>
    <h1>
        LogIn
    </h1>
    <div class="login">
        
        <input type="text"  v-model="email" placeholder="Enter your email"/>
        <input type="password"  v-model="password" placeholder="Enter your password"/>
       
        <!-- <router-link class ="btn btn-primary" to='/homepage' @click="onregister">Sign Up</router-link> -->
       <button @click="onsignin">LogIn</button>
       <p>
          Not LoggedIn Yet ? <router-link to='/signup' >SignUP</router-link>
           </p>
       
        
        </div>
</template>
<script>

import axios from 'axios'
    export default {
        name:"LoginPage",
        data(){
            return{
                email:'',
                password:''
            }
           
        },
         methods:
            {
               async onsignin()
                {
                    let result= await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)
                    console.log(result)
 
                    if(result.status===200 && result.data.length>0)
                    {
                   
                    localStorage.setItem("user-info",JSON.stringify(result.data[0]))
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
            
            }
        }
        
    }
</script>

