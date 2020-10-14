import React, { useCallback } from 'react';
import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import useTask from '@/hooks/useTask';
import { AtMessage } from 'taro-ui';

import './index.scss';

const Test = () => {
  const unstated = useTask();

  const onClick = useCallback(() => {
    Taro.atMessage({ message: '点击了！', type: 'info' });
  }, []);

  return (
    <View className='index'>
      <Text>This is Test</Text>
      <AtMessage />
      <View onClick={onClick}>
        This is state manage date:{' '}
        {unstated.taskList[0] ? unstated.taskList[0].name : '值未返回'}
      </View>
    </View>
  );
};
export default Test;
