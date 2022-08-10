<template>
  <div class="container-fluid mt-5 d-flex flex-wrap justify-content-center align-items-center">
    <div class="card mr-3 mb-3 card-success" style="width: 18rem;" v-for="item in yaziListesi" :key="item.id" >
        <div class="card-body">
            <h5 class="card-title">{{item.baslik}}</h5>
            <p class="card-text">{{item.icerik}}</p>
            <router-link class="btn btn-outline-info btn-sm" :to="{name: 'post-detail',params:{id:item.id}}">Görüntüle</router-link>
        </div>
    </div>
</div>

<div class="container-fluid p-5 mt-5 bg-secondary text-light">
  <blockquote class="blockquote">
    <h3>Hakkımda Söyleyebildiklerim</h3>
    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eveniet hic ipsa iusto molestias quaerat quisquam tenetur voluptatem! Commodi debitis et facilis impedit in necessitatibus odio, repudiandae sapiente sed veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, amet atque dicta dignissimos distinctio dolores enim inventore iure nam quam quis repellat ullam voluptatem! Amet fuga laudantium optio tempore. Ab? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam commodi harum nemo qui quos reiciendis repudiandae sequi, ut. Adipisci assumenda ducimus explicabo harum impedit minima porro, unde. Ad, neque, quas!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, aut dolore impedit mollitia
      nobis perspiciatis quis reprehenderit sed? Amet beatae debitis dicta libero magnam odio perferendis qui sit velit
      voluptatibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    <footer class="blockquote-footer text-warning">Someone famous in <cite title="Source Title">Source Title</cite></footer>
  </blockquote>
</div>
</template>

<script>
import {ref,onBeforeMount} from 'vue'
import {list} from '../config/sevices.js'

export default{
   setup(){
    const yaziListesi= ref([]);
    
    onBeforeMount(async()=>{
    yaziListesi.value = await list();
    console.log(yaziListesi.value)

    })
    return {yaziListesi}
}}



</script>
