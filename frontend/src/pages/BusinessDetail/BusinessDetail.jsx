import React from 'react';

import useGetBusinessDetail from '../../hooks/useGetBusinessDetail';

const BusinessDetail = () => {
  const { content } = useGetBusinessDetail();

  return <>{content}</>;
};

export default BusinessDetail;
