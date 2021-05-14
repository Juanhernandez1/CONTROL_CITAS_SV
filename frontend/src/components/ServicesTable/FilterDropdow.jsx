import { Input, Button, Space } from 'antd';

import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

import React, { useState } from 'react';

const FilterDropdow = ({ dataIndex }) => {
  let searchInput;

  const [SearchState, setSearchState] = useState({
    searchText: '',
    searchedColumn: ''
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex
    });
  };

  const handleReset = clearFilters => {
    clearFilters();
    setSearchState({ searchText: '' });
  };

  return {
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            searchInput = node;
          }}
          placeholder={`Buscar ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Buscar
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Resetear
          </Button>
        </Space>
      </div>
    ),

    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,

    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.select(), 100);
      }
    },
    render: text =>
      SearchState.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[SearchState.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      )
  };
};

export default FilterDropdow;
