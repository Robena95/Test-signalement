import axios, { AxiosError } from 'axios';

const baseURL = 'https://reqres.in/api/';

export interface HttpDataParams {
  url: string;
  data?: any;
  config?: any;
}

class Http {
  axiosConfig = () => {
    return axios.create({
      baseURL: baseURL,
    });
  };

  get = async (params: HttpDataParams) => {
    return this.axiosConfig()
      .get(params.url)
      .then((res) => {
        return { data: res };
      })
      .catch((err: AxiosError) => {
        if (err.response) {
          return { data: err.response.data };
        } else if (err.request) {
          return { data: { status: 404 } };
        } else {
          return { data: { status: 500 } };
        }
      });
  };
}

export default new Http();
