<script setup>
import TheWelcome from "../components/TheWelcome.vue";
import { ref } from "vue";
const log = console.log;
let data = ref([]);
// const URL =

async function run() {
  const req = await fetch("http://localhost:3000/cats");
  data.value = await req.json();
  log(data);
}
run();
async function del(id) {
  log("delete processing", id);
    const req = await fetch("http://localhost:3000/cats/" + id, { method: 'DELETE',
    });
  const result = await req.text();
  log(data, result);
  run();
}
</script>


<template>
  <main>
    <!-- <TheWelcome /> -->
    <!-- {{data}} -->
    <div class="card" v-for="card in data" :key="card._id">
      {{ card.name }} {{ card.color }}
      <button @click="del(card._id)">Delete</button>
    </div>
  </main>
</template>
<style scoped>
.card {
  border: solid 1px black;
  padding: 0.5rem;
  margin: 0.5rem;
}
</style>