/* eslint-disable unicorn/filename-case */
import { useEffect, useState } from 'react';

import { getData } from '../../api/baseClient';

const useGetBusinessResolveSetting = (path, callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    (async () => {
      if (
        !path.includes('ResolveSetting') ||
        (path.includes('ResolveSetting') && path.includes('-'))
      ) {
        setIsLoading(true);
        try {
          const { data } = await getData(path);
          setData(data);
          setIsLoading(false);
          setIsError(false);
        } catch (error) {
          setIsLoading(false);
          setIsError(true);
          callback(error.message);
        }
      }
    })();
  }, [path]);

  return [isLoading, data, isError];
};

export default useGetBusinessResolveSetting;
