<template lang="pug">
.home.text-center
  img(alt='Room With a Vue' src='../assets/alchemy-sulphuric.svg' width="125px")
  h1
    i.fas.fa-chess.fa-3x
  h1 Addio Mondo Crudele 
  h2 Muddy Waters, Muddy Boots
  mdb-btn(color='primary') Print Me
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
