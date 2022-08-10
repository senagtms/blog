<template>

<div class="container mt-5 d-flex flex-column justify-content-center align-items-center">

  <blockquote class="blockquote" >
    <h3>{{detay.baslik}}</h3>
    <p>{{detay.icerik}}</p>
    <p class="mb-0">{{detay.icerikDetay}}</p>
  </blockquote>
</div>
</template>
<script >
import {ref,onBeforeMount} from 'vue'
import {icerikDetay} from '../config/sevices';
import {useRoute} from 'vue-router'

export default{
  setup(){
      const route= useRoute();
     const id = route.params.id //linkimdeki id yi aldım
     const detay = ref([])
  onBeforeMount(async()=>{
 
    detay.value = await icerikDetay(id);
    console.log(detay.value)
    

  })
  return { detay }
  }
}

</script>

<style>

</style>