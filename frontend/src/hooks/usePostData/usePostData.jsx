/* eslint-disable unicorn/filename-case */
import { useEffect, useState } from 'react';

import { postData } from '../../api/baseClient';

const usePostData = (path, callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const { data } = await postData(path);
        setData(data);
        setIsLoading(false);
        setIsError(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
        callback(error.message);
      }
    })();
  }, [path]);

  return [isLoading, data, isError];
};

export default usePostData;
