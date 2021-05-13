import { Modal } from 'antd';

import useGetBusinessServicesDetail from '../../hooks/useGetBusinessServicesDetail';
import './DetailBusinessServicessModal.css';

const DetailBusinessServicessModal = ({ ...rest }) => {
  const { content, footer } = useGetBusinessServicesDetail(true);

  return (
    <Modal {...rest} footer={footer}>
      {content}
    </Modal>
  );
};

export default DetailBusinessServicessModal;
