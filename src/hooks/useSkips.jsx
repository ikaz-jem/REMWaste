import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchSkips = async () => {
  const endpoint = import.meta.env.VITE_SKIPS_ENDPOINT+"dd/da5445";

  try {
    const response = await axios.get(endpoint);
    return response.data;
   
    
  } catch (error) {
    throw new Error(error?.response?.data?.message || 'Failed to fetch skips data');
  }
};

/**
 * 
 * @returns cashes Data For 1Hr && Returns Fetching Status 
 */

export const useSkips = () => {
    const { isLoading, error, data } = useQuery({
        queryKey: ['skips'],
        queryFn: fetchSkips,
        staleTime: 1000 * 60 *0 , 
        cacheTime: 1000 * 60 *0, 
        retry: 2,
    });

    return { isLoading, error, data };
};
