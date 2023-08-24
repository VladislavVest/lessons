<script setup>
import TheWelcome from "../components/TheWelcome.vue";
import { ref } from "vue";
const log = console.log;
const data = ref([]);
const name = ref("");
const color = ref("");
const edited = ref("");

// const URL =

async function run() {
  const req = await fetch("http://localhost:3000/cats");
  data.value = await req.json();
  data.value.reverse();
  log(data);
}
run();

function edit(id) {
  log("EDIT GO", id);
  edited.value = id;
}

async function del(id) {
  log("delete processing", id);
  const req = await fetch("http://localhost:3000/cats/" + id, {
    method: "DELETE",
  });
  const result = await req.text();
  log(data, result);
  run();
}

async function add(event) {
  event.preventDefault();

  log("add cats", name.value, color.value); //ref 13 line
  const data = { name: name.value, color: color.value };
  log("VOT ONO", data);
  const response = await fetch("http://localhost:3000/cats", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.text();
  console.log("Success:", result);
  run();
}

async function editCat(event,card) {
  event.preventDefault();
log(card);

 
  const response = await fetch("http://localhost:3000/cats", {
    method: "PUT", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(card),
  });

  const result = await response.text();
  console.log("Success:", result);
  run();
  edited.value = '';
}



</script>


<template>
  <main>
    <form @submit="add($event)">
      <label for="fname">Cat name:</label><br />
      <input v-model="name" type="text" id="fname" /><br />
      <label for="lname">Color:</label><br />
      <input v-model="color" type="text" id="lname" /><br /><br />
      <input type="submit" value="Submit" />
    </form>

    <div class="card" v-for="card in data" :key="card._id">
      <div v-if="edited!=card._id">
        {{ card.name }} {{ card.color }}
        <button @click="del(card._id)">Delete</button>
        <button @click="edit(card._id)">Edit</button>
      </div>
<div v-if="edited==card._id"> 

  <form @submit="editCat($event, card)">
      <label for="fname">Cat name:</label><br />
      <input v-model="card.name" type="text" id="fname" /><br />
      <label for="lname">Color:</label><br />
      <input v-model="card.color" type="text" id="lname" /><br /><br />
      <input type="submit" value="Submit" />
    </form>
    </div>


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