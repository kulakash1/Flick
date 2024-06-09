import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import SearchInput from '../searchInput/SearchInput';
import { TfiMenu } from "react-icons/tfi";

const MultiLevelDrawer = () => {
  const [open, setOpen] = useState(false);
  const [childrenDrawer, setChildrenDrawer] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onCloseDrawer = () => {
    setOpen(false);
  };
  const showChildrenDrawer = () => {
    setChildrenDrawer(true);
  };
  const onChildrenDrawerClose = () => {
    setChildrenDrawer(false);
  };
  return (
    <>
      {/* <Button type="primary" onClick={showDrawer}>
        Open drawer
      </Button> */}
      <TfiMenu onClick={showDrawer} className='text-[#FFFCF9]'/>
      <Drawer placement="left" width={520} closable={false} onClose={onCloseDrawer} open={open}>
        <h2 className="w-2">Flick</h2>
        {/* <hr /> */}
        <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
        <Button type="primary" onClick={showChildrenDrawer}>
          Two-level drawer
        </Button>
        <SearchInput />
        <Drawer
          title="Two-level Drawer"
          width={320}
          closable={false}
          onClose={onChildrenDrawerClose}
          open={childrenDrawer}
        >
          This is two-level drawer
        </Drawer>
      </Drawer>
    </>
  );
};
export default MultiLevelDrawer;