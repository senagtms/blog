<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light border-0">
    <a class="navbar-brand" href="#">Köse Yazısı</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
               <router-link class="nav-link" to="/">Yazılar</router-link>
          
            </li>

        </ul>
        <ul class="navbar-nav my-2 my-lg-0">
            <li class="nav-item mr-sm-2">
                <router-link class="nav-link" to="/admin">Admin</router-link>
            </li>
        </ul>
    </div>
</nav>
<div class="container-fluid bg p-0 d-flex justify-content-center align-items-center">
    <div class="overlay"></div>
    <h1 class="text-center text-white">Vue3 | Köse Yazıları</h1>
</div>
</template>

<script>
export default {

}
</script>
<style>
       
    </style>