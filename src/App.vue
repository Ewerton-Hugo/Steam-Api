<template>
  <button @click="listSteamGames">Show Games</button>
  <div v-if="showGames">
    <ul>
      <li>aaaaaaaaaaa</li>
      <li v-for="item in lista" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */
import HelloWorld from './components/HelloWorld.vue';
import listGames from './steam/ListGames.js';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      lista: [], // The list of items to display
      showGames: false,
    };
  },
  methods: {
    async listSteamGames() {
      try {
      this.lista = await listGames();
      console.log("@@@@@@@@", this.lista[0]);
      this.showGames = true; // Defina showGames como true para exibir a lista
    } catch (error) {
      console.log('Falha ao obter a lista de jogos.');
    }               
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
