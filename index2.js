const express = require('express');
const app = express ();
const axios = require('axios').default;


   
app.get('/pokemon', (req, res) => {
    const { nome } = req.query;
    let listaPokemon = [];
    axios.get('https://pokeapi.co/api/v2/pokemon/').then ((response) => {
        listaPokemon = response.data.results
        listaPokemon = listaPokemon.filter(i => i.name.includes(nome || ''))
        return res.send(listaPokemon)
    });
 });

app.listen(12346, () => {
    console.log('Servidor rodando na porta 12346')
});