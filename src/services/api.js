import { API_CONFIG } from './config';

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'API request failed');
  }
  return response.json();
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
          electricity_unit: data.unit,
          electricity_value: data.value,
          country: data.country
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

  // Vehicle estimate
  getVehicleEstimate: async (data) => {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/estimates`, {
        method: 'POST',
        headers: API_CONFIG.HEADERS,
        body: JSON.stringify({
          type: 'vehicle',
          distance_unit: data.unit,
          distance_value: data.value,
          vehicle_model_id: data.modelId
        })
      });
      return handleResponse(response);
    } catch (error) {
      console.error('Vehicle estimate error:', error);
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
          weight_unit: data.weightUnit,
          weight_value: data.weightValue,
          distance_unit: data.distanceUnit,
          distance_value: data.distanceValue,
          transport_method: data.method
        })
      });
      return handleResponse(response);
    } catch (error) {
      console.error('Shipping estimate error:', error);
      throw error;
    }
  }
};