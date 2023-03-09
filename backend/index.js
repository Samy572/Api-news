import fetch from 'node-fetch';
import cheerio from 'cheerio';
import fs from 'fs/promises';
import dotenv from 'dotenv';
dotenv.config();

let newData = [];
async function fetchData(url) {
	const response = await fetch(url);
	const data = await response.text();
	getResponse(data);
}

fetchData(process.env.link);

async function getResponse(html) {
	const $ = cheerio.load(html);

	$('.hl__inner', html).each(function () {
		const newDatas = {
			id: newData.length + 1,
			title: $(this).text(),
			url: `${$(this).children('a').attr('href')}`,
		};

		if (newDatas.title.includes('XRP' || 'Ripple' || 'Xrp')) {
			newData.push(newDatas);
			// Pour supprimer les données du json
		}
	});
	try {
		await fs.truncate('xrp.json');
		await fs.writeFile('xrp.json', JSON.stringify(newData));
	} catch (err) {
		console.log(err);
	}
}

setInterval(() => {
	fetchData(process.env.link);
}, 1000 * 60 * 60);
