const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET);
