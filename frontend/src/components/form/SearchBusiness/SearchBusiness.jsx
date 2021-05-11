import { Button, Form, Input } from 'antd';
import React, { useContext, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { messages } from '../../../config/messages';
import { GlobalContext } from '../../../context/GlobalState';
import { paths } from '../../../config/paths';
import './SearchBusiness.css';

const { Item } = Form;
const { onRequired } = messages;

const SearchBusiness = () => {
  const { setBusinessSearch } = useContext(GlobalContext);
  const [seacrh, SetSearch] = useState('');
  return (
    <div className="search-business">
      <Form className="landing-form" layout="inline" name="landingForm">
        <Item name="businessSearch" rules={[{ required: true, message: onRequired }]}>
          <Input
            placeholder="Buscar negocio"
            value={seacrh}
            onChange={e => {
              if (e.target.value === '') setBusinessSearch('');
              else SetSearch(e.target.value);
            }}
          />
        </Item>
        <Item>
          <Button
            htmlType="submit"
            type="primary"
            onClick={() => {
              setBusinessSearch(seacrh);
            }}
          >
            {window.location.pathname === '/business' ? (
              'Buscar'
            ) : (
              <RouterLink to={paths.businessResult}> Buscar </RouterLink>
            )}
          </Button>
        </Item>
      </Form>
    </div>
  );
};

export default SearchBusiness;
