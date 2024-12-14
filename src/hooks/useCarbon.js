import { useState, useCallback } from 'react';
import { carbonAPI } from '../services/api';

export const useCarbon = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const calculateEstimate = useCallback(async (type, data) => {
    setLoading(true);
    setError(null);
    try {
      let result;
      switch (type) {
        case 'electricity':
          result = await carbonAPI.getElectricityEstimate(data);
          break;
        case 'flight':
          result = await carbonAPI.getFlightEstimate(data);
          break;
        case 'vehicle':
          result = await carbonAPI.getVehicleEstimate(data);
          break;
        case 'shipping':
          result = await carbonAPI.getShippingEstimate(data);
          break;
        default:
          throw new Error('Invalid estimate type');
      }
      return result;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return { calculateEstimate, loading, error };
};
