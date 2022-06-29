<template>
<HeaderPage/>
   <router-view></router-view>
  
</template>

<script>

// import SignUp from './components/SignUp.vue'
import HeaderPage from './components/HeaderPage.vue'

export default {
  name: 'App',
  components:{
    // SignUp,
    HeaderPage
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
body{
  margin: 0;
}
.logo{
    width: 100px;
    margin: 10px;
}
.register input ,.login input{
    width: 400px;
    height: 40px;
    padding-left: 250px;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: solid 2px skyblue;
    display: block;
}
.register button , .login button{
    width:300px;
    height: 40px;
    border:solid 2px slateblue;
    background-color: blue;
    color: azure;
    font-weight: bold;
    cursor: pointer;
    
}
</style>
