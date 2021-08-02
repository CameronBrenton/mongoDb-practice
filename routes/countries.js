const express = require('express');
const router = express.Router();
const Country = require('../models/country');

router.get('/', async (req, res) => {
	try{
		const countries = await Country.find()
		res.json(countries);
	}catch(err){
		res.send('Error' + err);
	}
});

router.get('/:id', async (req, res) => {
	try{
		const country = await Country.findById(req.params.id)
		res.json(country);
	}catch(err){
		res.send('Error' + err);
	}
});

router.post('/', async (req, res) => {
	const country = new Country({
		name: req.body.name,
		capital: req.body.capital,
		population: req.body.population
	});

	try{
		const c1 = await country.save()
		res.json(c1);
	}catch(err){
		res.send('Error' + err);
	}
})

router.patch('/:id', async(req, res) => {
	try{
		const country = await Country.findById(req.params.id)
		country.population = req.body.population
		const c1 = await country.save()
		res.json(c1);
	}catch(err){
		res.send('Error')
	}
});

router.delete('/:id', async(req, res) => {
	try{
		const country = await Country.findById(req.params.id)
		country.population = req.body.population
		const c1 = await country.remove()
		res.json(c1);
	}catch(err){
		res.send('Error')
	}
});

module.exports = router;