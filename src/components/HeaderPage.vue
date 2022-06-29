<template>
   <div class="nav">
       
       <router-link to='/'>Home </router-link>
       <router-link to='/add'>Add Restaurent </router-link>
       <router-link to='/update'>Update Restaurent </router-link>
       
       <a @click="logout" href='#'>Logout </a>
   </div>
</template>

<script>
    export default {
        name:"HeaderPage",
        methods :
        {
            logout()
            {
                localStorage.clear();
                this.$router.push({name:'LoginPage'})
               
                console.log('logout')
            }
        }
    }
</script>

<style >
.nav
{
  background-color: #fff;
  min-height: 50px;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 2px rgb(233, 174, 106);
  border-radius: 0;
   
}
.nav a
{
padding: 16px ;
text-decoration: none;
font-size: 18px;
margin-right:10px;
color: rgb(54, 7, 7);
text-align: center;
}
.nav a:hover{
    color: blue;
}


</style>