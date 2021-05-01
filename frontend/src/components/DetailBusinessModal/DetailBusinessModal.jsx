import { Modal } from 'antd';

import useGetBusinessDetail from '../../hooks/useGetBusinessDetail';
import './DetailBusinessModal.css';

const DetailBusinessModal = ({ ...rest }) => {
  const { content, footer } = useGetBusinessDetail(true);

  return (
    <Modal {...rest} footer={footer}>
      {content}
    </Modal>
  );
};

export default DetailBusinessModal;
