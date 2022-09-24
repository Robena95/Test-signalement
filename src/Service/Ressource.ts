import http from './http';

const GetAll = async () => {
  const result = await http.get({
    url: '/ressources',
  });
  return result.data;
};
const Get = async (id: number | string | undefined) => {
  const result = await http.get({
    url: '/ressource/' + id,
  });
  return result.data;
};

export { GetAll, Get };
