import {
  ProForm,
  ProFormGroup,
  ProFormSelect,
  ProTable,
} from '@ant-design/pro-components';
import { Modal } from 'antd';
import { useState } from 'react';

export type Props = {
  // 当用户点击取消按钮时触发
  onCancel: () => void;
  // 当用户提交表单时,将用户输入的数据作为参数传递给后台
  onSubmit: (values: API.InterfaceInfo) => Promise<void>;
  // 模态框是否可见
  visible: boolean;
  // values不用传递
  // values: Partial<API.RuleListItem>;
};

type InterfaceInfoAdd = {
  description?: string;
  method?: string;
  name?: string;
  requestHeader?: string;
  responseHeader?: string;
  url?: string;
}


const Demo: React.FC<Props> = (props) => {

  // 使用解构赋值获取props中的属性
  const { visible, columns, onCancel, onSubmit } = props;

  return (

    <Modal visible={visible} footer={null} onCancel={() => onCancel?.()}>

      <ProTable
        type='form'
        columns={columns}
        onSubmit={async (value) => {
          onSubmit?.(value);
        }}>


      </ProTable>

    </Modal>

  );
};

export default Demo;