import axiosInstance from '@modules/axios/axios';

const showsService = (token: string | undefined) => {
  const options = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const getShows = () => axiosInstance.get('show', options);

  const getMyList = () => axiosInstance.get('list', options);

  const getShow = (id: string) => axiosInstance.get(`show/${id}`, options);

  return {
    getShows,
    getMyList,
    getShow,
  };
};

export default showsService;
