const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

const API_KEY = '0Jv21mL2kWlABQGSiXdVGA';

// Electricity Estimate
app.post('/api/electricity', async (req, res) => {
    try {
        const response = await axios.post(
            'https://www.carboninterface.com/api/v1/estimates',
            {
                type: 'electricity',
                electricity_unit: req.body.electricity_unit,
                electricity_value: req.body.electricity_value,
                country: req.body.country,
                state: req.body.state
            },
            {
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Flight Estimate
app.post('/api/flight', async (req, res) => {
    try {
        const response = await axios.post(
            'https://www.carboninterface.com/api/v1/estimates',
            {
                type: 'flight',
                passengers: req.body.passengers,
                legs: req.body.legs
            },
            {
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Shipping Estimate
app.post('/api/shipping', async (req, res) => {
    try {
        const response = await axios.post(
            'https://www.carboninterface.com/api/v1/estimates',
            {
                type: 'shipping',
                weight_value: req.body.weight_value,
                weight_unit: req.body.weight_unit,
                distance_value: req.body.distance_value,
                distance_unit: req.body.distance_unit,
                transport_method: req.body.transport_method
            },
            {
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Vehicle Estimate
app.post('/api/vehicle', async (req, res) => {
    try {
        const response = await axios.post(
            'https://www.carboninterface.com/api/v1/estimates',
            {
                type: 'vehicle',
                distance_value: req.body.distance_value,
                distance_unit: req.body.distance_unit,
                vehicle_model_id: req.body.vehicle_model_id
            },
            {
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});