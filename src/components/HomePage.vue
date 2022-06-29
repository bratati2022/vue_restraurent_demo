<template>
    

<h1>{{name}}, Welcome to Home Page..</h1>
    <h3> Below are the resturant List </h3>
  <div>
    <ul >
        
        <li v-for="items in restaurent" :key="items.id">
           <router-link to="/add" @click="showdetails"> {{items.name}}</router-link> 
            </li>     
    </ul>
    </div>

    
</template>

<script>
import axios from 'axios';



    export default {
        name:'HomePage',

       data(){
    return{
   
    name:"",
    restaurent:[],
    id:'',
   
        }       
 },
methods:{
    showdetails(id)
    {
        console.log(id)
    }
},
        async mounted()
        {
           
            let user=localStorage.getItem('user-info');
            this.name=JSON.parse(user).name;

            if(!user)
            {
            this.$router.push({name:'SignUp'})
            
            }
            let result= await axios.get("http://localhost:3000/restaurents")
            this.restaurent=result.data

            console.log(result)
        }
        
    }
</script>

<style >
ul
{
/* height: 50px;
width: 50px; */
display: table;
margin: 0 auto;
padding: 10px;
}
</style>