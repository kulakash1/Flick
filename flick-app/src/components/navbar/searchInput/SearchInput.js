import React from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
// import './SearchInput.css';

const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

const suffix = (
    <span>
      <AudioOutlined
        style={{
          fontSize: 16,
          color: '#1677ff',
          marginRight: 8,
        }}
      />
      <AudioOutlined
        style={{
          fontSize: 16,
          color: '#1677ff',
          backgroundColor: '#FF6978'
        }} onClick={onSearch}
      />
    </span>
  );


const SearchInput = () => (
    <div>
  {/* <Input size="large" placeholder="input search text" suffix={suffix} className='custom-search' /> */}
  <Input size="large" placeholder="input search text" suffix={suffix} className='rounded-3xl' />
  {/* <Space direction="vertical">
    <Search
      placeholder="input search text"
    //   enterButton={<AudioOutlined className='bg-[#FF6978]' />}
      size="large"
      suffix={suffix}
      onSearch={onSearch}
      className='custom-search'
    />
    
  </Space> */}
  </div>
);

export default SearchInput;
