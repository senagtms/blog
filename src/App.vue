<template>
  <Headers/>      
  <router-view />
</template>
<script>
import Headers from  "./components/Headers.vue"

export default{
  components:{
    Headers
  }

}


</script>


<style lang="scss">
#app {}


 .bg{
            background-image: url(./assets/bg.jpg);
            height: 300px;
            position: relative;
        }
.bg h1{
            z-index: 1;
            font-size: 60px;
        }
        .overlay{
            width: 100%!important;
            height: 100%!important;
            background-color: rgba(0,0,0,.4);
            position: absolute;
            top: 0px;
            left:0px;
        }

</style>
