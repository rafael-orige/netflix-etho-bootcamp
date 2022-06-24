import axiosInstance from '@modules/axios/axios';
import { useAppSelector as useSelector } from '@store/hooks/hooks';
import { tokenSelector } from '@store/user/user.selected';

const showsService = () => {
  const token = useSelector(tokenSelector);

  const getShows = () => {
    const options = {
      headers: { Authorization: `Bearer ${token}` },
    };

    return axiosInstance.get('show', options);
  };

  return {
    getShows,
  };
};

export default showsService;
