
import {firestoreRef} from '../config/firebase'


export const list = async()=>{
    let yazilar= await firestoreRef.collection('cards').get();
    let yaziListesi =  yazilar.docs.map(doc=>{
        return {...doc.data(),id:doc.id}
    })
    return yaziListesi
}

export const icerikDetay = async(id)=>{

    let icerikDetay = await firestoreRef.collection('cards').doc(id).get();
    return icerikDetay.data();
}

export const yeniPost =async(newPost)=>{

    let yeniYazi =  await firestoreRef.collection('cards').add(newPost)
    return yeniYazi

}

export const guncelle = async(id,yaziGuncelle)=>{
    let icerikGuncelle = await firestoreRef.collection('cards').doc(id).update(yaziGuncelle);
    return icerikGuncelle;
}

export const sil = async(id)=>{
    let icerikSil= await firestoreRef.collection('cards').doc(id).delete();
    return icerikSil
}