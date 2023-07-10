//const { axios } = require('../imports');
const axios = require('axios');


async  function listGames() {
  const url = 'https://api.steampowered.com/ISteamApps/GetAppList/v2/';

  try {
    const response = await axios.get(url);
    const appList = response.data.applist.apps;
    console.log("appList\n",appList)
    return appList
    // Faça algo com a lista de aplicativos obtida da API da Steam
  } catch (error) {
    console.log('Falha ao acessar a API da Steam.');
    return []; // Em caso de erro, retorna uma lista vazia
  }
}
module.exports = listGames  ;

