<template>
  <div class="container-fluid mt-5 d-flex flex-wrap justify-content-center align-items-center">
    <form style="width: 500px" @submit.prevent="updatesave">
        <fieldset>
            <legend>Köse Yazısı Düzenle</legend>
            <div class="form-group">
                <label>Baslık</label>
                <input type="text"  v-model="yaziGuncelle.baslik"  class="form-control" placeholder="Yazının baslıgını giriniz..">
            </div>
            <div class="form-group">
                <label>Alt Baslık</label>
                <input type="text"  v-model="yaziGuncelle.icerik" class="form-control" placeholder="Yazının alt baslıgını giriniz..">
            </div>
            <div class="form-group">
                <label for="exampleTextarea">Köse Yazısı</label>
                <textarea v-model="yaziGuncelle.icerikDetay" class="form-control" rows="5"></textarea>
            </div>
            <button class="btn btn-danger">İptal</button>
            <button type="submit" class="btn btn-primary">Güncelle</button>
        </fieldset>
    </form>
</div>

</template>

<script>
import {reactive,onBeforeMount,ref} from 'vue'
import { useRoute,useRouter } from 'vue-router'
import {guncelle,icerikDetay} from '../config/sevices';
export default {
  
    setup(){
    const yaziGuncelle = reactive({
        baslik:'',
        icerik:'',
        icerikDetay:''
    })
   
    const router = useRouter();
    const route = useRoute();
    const id = route.params.id;

    const icerikler =ref({})
    
     onBeforeMount(async()=>{
         icerikler.value = await icerikDetay(id)
         yaziGuncelle.baslik= icerikler.value.baslik
         yaziGuncelle.icerik =icerikler.value.icerik
         yaziGuncelle.icerikDetay = icerikler.value.icerikDetay
        console.log(icerikler.value)

    })

    const updatesave=async()=>{
        const res = await guncelle(id,yaziGuncelle)
        router.push('post-detail/'+id)
    }
    return{updatesave,yaziGuncelle}
    }
}
</script>

<style>

</style>