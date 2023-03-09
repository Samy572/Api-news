import express from 'express';
import fs from 'fs';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
const app = express();
const port = process.env.Number;
app.use(cors());

app.get('/api', (req, res) => {
	fs.readFile('xrp.json', (err, data) => {
		if (err) throw err;
		const dataJson = JSON.parse(data);

		res.json(dataJson);
	});
});

app.listen(port, () => {
	console.log(`Connexion réussie ! port: ${port}`);
});
