<template>
  <div class="container-fluid mt-5 d-flex flex-wrap justify-content-center align-items-center">
    <form style="width: 500px" @submit.prevent="savePost">
        <fieldset>
            <legend>Yeni Köse Yazısı</legend>
            <div class="form-group">
                <label>Baslık</label>
                <input type="text" v-model="addnewpost.baslik" class="form-control" placeholder="Yazının baslıgını giriniz..">
            </div>
            <div class="form-group">
                <label>İçerik</label>
                <input type="text" v-model="addnewpost.icerik" class="form-control" placeholder="Yazının alt baslıgını giriniz..">
            </div>
            <div class="form-group">
                <label for="exampleTextarea">İçerik Detay</label>
                <textarea class="form-control"  v-model="addnewpost.icerikDetay" rows="5"></textarea>
            </div>
            <button class="btn btn-danger">İptal</button>
            <button type="submit" class="btn btn-primary">Kaydet</button>
        </fieldset>
    </form>
</div>
</template>

<script>
import {reactive} from 'vue'
import { useRouter } from 'vue-router'
import {yeniPost} from '../config/sevices';
export default {
    setup(){

        const addnewpost = reactive({ //reactive kullanırken ref kullanmaya gerek yok
            baslik: '',
            icerik: '',
            icerikDetay: ''
        })

        const router = useRouter();
        const savePost = async () => {
               const res = await yeniPost(addnewpost);
                console.log(res)
                router.push({name: 'home'})
        }
        return { savePost ,addnewpost }
     }
    }

     </script>
<style>

</style>