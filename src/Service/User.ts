import http from './http';

const GetAll = async () => {
  const result = await http.get({
    url: '/users',
  });
  return result.data;
};
const Get = async (id: number | string | undefined) => {
  const result = await http.get({
    url: '/users/' + id,
  });
  return result.data;
};

export { GetAll, Get };
