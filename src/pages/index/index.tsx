import React, { useCallback } from 'react';
import Unstated from '@/unstated';
import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';

import './index.scss';

const Index = () => {
  const unstated = Unstated.useContainer();

  const onGoToTestPage = useCallback(() => {
    void Taro.navigateTo({ url: '/pages/test/index' });
  }, []);

  return (
    <View className='index'>
      <Text className='index'>Hello world! </Text>
      <View onClick={onGoToTestPage}>
        Go To Test Page {unstated.toString()}
      </View>
    </View>
  );
};
export default Index;
