import React from 'react';
import { Layout, Space } from 'antd';

export default function InnerLayout({ children }) {
  return (
    <Space
      direction='vertical'
      style={{
        width: '100%',
      }}
      size={[0, 48]}
    >
      <Layout className='container'>
        <Layout hasSider>{children}</Layout>
      </Layout>
    </Space>
  );
}
