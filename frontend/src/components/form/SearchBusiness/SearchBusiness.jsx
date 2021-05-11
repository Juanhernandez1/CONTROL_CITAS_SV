import { Button, Form, Input } from 'antd';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { paths } from '../../../config/paths';
import { GlobalContext } from '../../../context/GlobalState';

import './SearchBusiness.css';

const { Item } = Form;

const SearchBusiness = () => {
  const { setBusinessName } = useContext(GlobalContext);
  const {
    location: { pathname },
    push
  } = useHistory();

  const handleSubmit = ({ businessSearch }) => {
    setBusinessName(businessSearch);
    pathname !== paths.businessResult && push(paths.businessResult);
  };

  return (
    <div className="search-business">
      <Form className="landing-form" layout="inline" name="landingForm" onFinish={handleSubmit}>
        <Item name="businessSearch">
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
