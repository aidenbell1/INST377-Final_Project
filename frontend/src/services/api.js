import { API_CONFIG } from './config';

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'API request failed');
  }
  const data = await response.json();
  return data.data.attributes; // Extract the attributes from the response
};

export const carbonAPI = {
  // Electricity estimate
  getElectricityEstimate: async (data) => {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/estimates`, {
        method: 'POST',
        headers: API_CONFIG.HEADERS,
        body: JSON.stringify({
          type: 'electricity',
          electricity_unit: data.electricity_unit,
          electricity_value: data.electricity_value,
          country: data.country,
          state: data.state
        })
      });
      return handleResponse(response);
    } catch (error) {
      console.error('Electricity estimate error:', error);
      throw error;
    }
  },

  // Flight estimate
  getFlightEstimate: async (data) => {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/estimates`, {
        method: 'POST',
        headers: API_CONFIG.HEADERS,
        body: JSON.stringify({
          type: 'flight',
          passengers: data.passengers,
          legs: data.legs
        })
      });
      return handleResponse(response);
    } catch (error) {
      console.error('Flight estimate error:', error);
      throw error;
    }
  },

  // Shipping estimate
  getShippingEstimate: async (data) => {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/estimates`, {
        method: 'POST',
        headers: API_CONFIG.HEADERS,
        body: JSON.stringify({
          type: 'shipping',
          weight_value: data.weight_value,
          weight_unit: data.weight_unit,
          distance_value: data.distance_value,
          distance_unit: data.distance_unit,
          transport_method: data.transport_method
        })
      });
      return handleResponse(response);
    } catch (error) {
      console.error('Shipping estimate error:', error);
      throw error;
    }
  },

  // Vehicle estimate
  getVehicleEstimate: async (data) => {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/estimates`, {
        method: 'POST',
        headers: API_CONFIG.HEADERS,
        body: JSON.stringify({
          type: 'vehicle',
          distance_unit: data.distance_unit,
          distance_value: data.distance_value,
          vehicle_model_id: data.vehicle_model_id
        })
      });
      return handleResponse(response);
    } catch (error) {
      console.error('Vehicle estimate error:', error);
      throw error;
    }
  }
};