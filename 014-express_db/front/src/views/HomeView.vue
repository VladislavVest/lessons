<script setup>

import TheWelcome from '../components/TheWelcome.vue'
import {ref} from 'vue'
const log = console.log;
let data = ref([]);
async function run(){
  const req=await fetch('http://localhost:3000/cats');
   data.value= await req.json();
  log(data);
}
run();
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
<!-- {{data}} -->
<div class="card" v-for="card in data">
{{card.name}} {{card.color}}

</div>
  </main>
</template>
<style scoped>
.card{
  border:solid 1px black; 
  padding: 0.5rem;
  margin: 0.5rem;
}
</style>