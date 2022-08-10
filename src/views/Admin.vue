<template>
  <div class="container d-flex mt-5 justify-content-center align-items-center">
  <router-link class="btn btn-dark" to="/new-post">Yeni Yazı Ekle</router-link>
</div>
<div class="container-fluid mt-5 d-flex flex-wrap justify-content-center align-items-center">
    <div class="card mr-3 mb-3 card-success" style="width: 18rem;" v-for="item in yaziListesi" :key="item.id">
        
        <div class="card-body">
            <h5 class="card-title">{{item.baslik}}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{item.icerik}}</h6>
            <p class="card-text">{{item.icerikDetay}}</p>
            <router-link class="btn btn-outline-warning btn-sm" :to="{name:'update-post', params:{id:item.id} }"> Düzenle</router-link>
            <a href="#" class="btn btn-outline-danger btn-sm" @click="deletePost(item.id)">Sil</a>
        </div>
    </div>

</div>
</template>

<script>
import {ref,onBeforeMount} from 'vue'
import { useRoute } from 'vue-router'
import {list,sil} from '../config/sevices.js'
export default {

    setup(){
    const route = useRoute();
    const deletePost= async(id)=>{

         await sil(id);
         yaziListesi.value = yaziListesi.value.filter((item)=>{
            return item.id !== id
         })
    }
    

    const yaziListesi= ref([]);
    
    onBeforeMount(async()=>{
    yaziListesi.value = await list();
    })
    return {yaziListesi,deletePost}
    

  


    }

}
</script>

<style>

</style>