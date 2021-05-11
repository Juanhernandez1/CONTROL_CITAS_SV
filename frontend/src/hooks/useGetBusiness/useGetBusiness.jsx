/* eslint-disable unicorn/filename-case */
import { useContext, useEffect, useState } from 'react';

import { getData } from '../../api/baseClient';
import { business as getBusinessPath } from '../../config/urls';
import { GlobalContext } from '../../context/GlobalState';

const useGetBusiness = callback => {
  const { businessSearchName } = useContext(GlobalContext);
  const [isLoading, setIsLoading] = useState(false);
  const [business, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const path = businessSearchName
        ? getBusinessPath.getBusinessByName(businessSearchName)
        : getBusinessPath.getAllBusiness;
      try {
        const { data } = await getData(path);
        setData(data.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        callback(error.message);
      }
    })();
  }, [businessSearchName]);

  return { isLoading, business };
};

export default useGetBusiness;
