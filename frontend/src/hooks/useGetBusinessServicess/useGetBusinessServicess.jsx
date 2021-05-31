/* eslint-disable unicorn/filename-case */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { getData } from '../../api/baseClient';
import { business as getBusinessServicessPath } from '../../config/urls';

const useGetBusinessServicess = (reload, callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [businessServicess, setData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const path = getBusinessServicessPath.getAllBusinessServicess(id);

      try {
        const { data } = await getData(path);
        setData(data.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        callback(error.message);
      }
    })();
  }, [reload]);

  return { isLoading, businessServicess };
};

export default useGetBusinessServicess;
