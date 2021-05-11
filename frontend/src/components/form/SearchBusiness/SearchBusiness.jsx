import { Button, Form, Input } from 'antd';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { GlobalContext } from '../../../context/GlobalState';
import { messages } from '../../../config/messages';
import { paths } from '../../../config/paths';
import './SearchBusiness.css';

const { Item } = Form;
const { onRequired } = messages;

const SearchBusiness = () => {
  const { setBusinessName } = useContext(GlobalContext);
  const { push } = useHistory();

  const handleSubmit = ({ businessSearch }) => {
    setBusinessName(businessSearch);
    push(paths.businessResult);
  };

  return (
    <div className="search-business">
      <Form className="landing-form" layout="inline" name="landingForm" onFinish={handleSubmit}>
        <Item name="businessSearch" rules={[{ required: true, message: onRequired }]}>
          <Input placeholder="Buscar negocio" />
        </Item>
        <Item>
          <Button htmlType="submit" type="primary">
            Buscar
          </Button>
        </Item>
      </Form>
    </div>
  );
};

export default SearchBusiness;
