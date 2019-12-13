<template>

    <div>
      <div>
        <button uk-toggle="target: #my-id" type="button" uk-navbar-toggle-icon></button>
      </div>
      <div id="my-id" data-uk-offcanvas>
        <div class="uk-offcanvas-bar">
              <ul class="uk-nav uk-nav-default" v-for="item in menu" v-bind:key="item.id">
                <li class="uk-active"><a href="item.url" >{{item.name}}</a></li>
              </ul>
        </div>

          <button class="uk-offcanvas-close" type="button" uk-close></button>
        </div>


    </div>
</template>

<script>
  import menu from "../layouts/menu.js"
    export default {
        name: "SideBar"
    }
</script>

<style scoped>

</style>
