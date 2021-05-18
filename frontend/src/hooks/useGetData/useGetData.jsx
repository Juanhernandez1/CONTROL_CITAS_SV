/* eslint-disable unicorn/filename-case */
import { useEffect, useState } from 'react';

import { getData } from '../../api/baseClient';

const useGetData = (path, param, callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    if (path !== '')
      (async () => {
        setIsLoading(true);
        try {
          const { data } = await getData(path, param);
          setData(data);
          setIsLoading(false);
          setIsError(false);
        } catch (error) {
          setIsLoading(false);
          setIsError(true);
          callback(error.message);
        }
      })();
  }, [path, param]);

  return [isLoading, data, isError];
};

export default useGetData;
