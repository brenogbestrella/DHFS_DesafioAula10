const express = require('express');
const app = express ();

const listaPokemons = [
    'Pikachu',
    'Bulbassauro',
    'Squirtle',
    'Charmander',
]

app.get('/:pokemon', (req, res) => {
   const { nome } = req.query;
   let listaRetorno = listaPokemons.filter(i => i.includes(nome || ''))
   return res.json(listaRetorno)
});

app.listen(12345, () => {
    console.log('Servidor rodando na porta 12345')
});