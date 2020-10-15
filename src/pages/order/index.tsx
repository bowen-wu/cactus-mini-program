import React, { useCallback } from 'react';
import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import useOrder from '@/hooks/useOrder';
import { AtMessage } from 'taro-ui';

import './index.scss';

const Order = () => {
  const unstated = useOrder();

  const onClick = useCallback(() => {
    Taro.atMessage({ message: '点击了！', type: 'info' });
  }, []);

  return (
    <View className='index'>
      <Text onClick={onClick}>This is Order</Text>
      {unstated.orderList.map(order => (
        <View key={order.id}>
          <View>id：{order.id}</View>
          <View>订单名称：{order.name}</View>
          <View>订单号：{order.orderNo}</View>
          <View>备注：{order.remark}</View>
          <View>订单状态：{order.state === 0 ? '禁用' : '启用'}</View>
        </View>
      ))}
      <AtMessage />
    </View>
  );
};
export default Order;
