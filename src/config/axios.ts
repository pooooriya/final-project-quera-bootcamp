import axios from 'axios';

export const BaseApiUrl = {
  dev: 'https://quera.iran.liara.run',
  prod: 'https://prod.quera.iran.liara.run'
};

export const AXIOS = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development' ? BaseApiUrl.dev : BaseApiUrl.prod, // production vs development
  timeout: 2000
});
