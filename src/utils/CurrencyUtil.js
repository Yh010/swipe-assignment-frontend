import axios from 'axios';

const API_KEY = 'fca_live_2yq1EhohyoNXfpbStUViNWSSAlBiUdlBCQC6BKPO';

export const fetchExchangeRates = async () => {
  try {
    const response = await axios.get(`https://api.freecurrencyapi.com/v1/latest?apikey=${API_KEY}`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
    return null;
  }
};
