import React, { useCallback } from 'react';
import Unstated from '@/unstated';
import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';

import './index.scss';

const Index = () => {
  const unstated = Unstated.useContainer();

  const onGoToTestPage = useCallback(url => {
    void Taro.navigateTo({ url });
  }, []);

  return (
    <View className='index'>
      <Text className='index'>Hello world! </Text>
      <View onClick={onGoToTestPage.bind(null, '/pages/test/index')}>
        Go To Test Page {unstated.toString()}
      </View>
      <View onClick={onGoToTestPage.bind(null, '/pages/order/index')}>
        Go To Order Page
      </View>
    </View>
  );
};
export default Index;
