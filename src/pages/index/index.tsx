import React, { useCallback, useState } from 'react';
import Unstated from '@/unstated';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import CustomButton from '@/components/custom/Button';
import CustomTabs, { CustomTabItem, TabsMode } from '@/components/custom/Tabs';

import './index.scss';

const initTabList: CustomTabItem[] = [
  {
    label: '未开始',
    active: false,
    key: 'pending'
  },
  {
    label: '进行中',
    active: true,
    key: 'processing'
  },
  {
    label: '已完结',
    active: false,
    key: 'finished'
  },
  {
    label: '待平台审核',
    active: false,
    key: 'pendingReview'
  },
  {
    label: '已完结',
    active: false,
    key: 'finishedHi'
  },
  {
    label: '待平台审核',
    active: false,
    key: 'pendingReviewHi'
  }
];
const initStatusTabList: CustomTabItem[] = [
  {
    label: '待审核',
    active: false,
    key: 'pending'
  },
  {
    label: '已通过',
    active: true,
    key: 'processing'
  },
  {
    label: '未提交',
    active: false,
    key: 'finished'
  },
  {
    label: '未通过',
    active: false,
    key: 'pendingReview'
  },
  {
    label: '已完结',
    active: false,
    key: 'finishedHi'
  },
  {
    label: '待平台审核',
    active: false,
    key: 'pendingReviewHi'
  }
];

const Index = () => {
  const unstated = Unstated.useContainer();
  const [tabList, setTabList] = useState<CustomTabItem[]>(initTabList);
  const [statusTabList, setStatusTabList] = useState<CustomTabItem[]>(
    initStatusTabList
  );

  const onGoToTestPage = useCallback(url => {
    void Taro.navigateTo({ url });
  }, []);

  const onCustomButtonClick = useCallback(() => {
    Taro.showToast({
      title: '成功',
      icon: 'success'
    });
  }, []);

  const onSelectedTabChange = useCallback(
    (_, isolateTabList: CustomTabItem[]) => setTabList(isolateTabList),
    []
  );

  const onSelectedStatusTabChange = useCallback(
    (_, isolateStatusTabList) => setStatusTabList(isolateStatusTabList),
    []
  );
  return (
    <View className='index'>
      <CustomButton onClick={onCustomButtonClick}>啦啦啦</CustomButton>

      <CustomTabs onSelectedTabChange={onSelectedTabChange} tabList={tabList} />

      <View className='text'>Hello world! </View>

      <CustomTabs
        mode={TabsMode.TAG}
        onSelectedTabChange={onSelectedStatusTabChange}
        tabList={statusTabList}
      />

      <View className='text'>Hello world! </View>
      <AtButton type='primary'>测试</AtButton>
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
