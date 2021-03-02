const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
	'sk_test_51IPQFREDm1qUx19mvrW1N7VVZSDFTSJvTiCzoXQOA7ukwWkp3AyDUWPjK0PuesObdklUfC15nRwyfvEGoDbLIFIZ00oj6xpoIA'
);

// App config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// Api routes
app.get('/', (req, res) => res.status(200).send('hello world'));

app.post('/payments/create', async (req, res) => {
	// quering the total from payments url
	const total = req.query.total;

	console.log('logging payments Boom!!! >>', Math.round(total));

	const paymentIntent = await stripe.paymentIntents.create({
		amount: Math.round(total),
		currency: 'gbp',
	});

	// 201 - ok & created
	res.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});
});

// Listen command
exports.api = functions.https.onRequest(app);
