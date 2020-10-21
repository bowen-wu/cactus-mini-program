import React, { useCallback, useState } from 'react';
import Unstated from '@/unstated';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import CustomButton from '@/components/custom/Button';
import CustomTabs, { CustomTabItem, TabsMode } from '@/components/custom/Tabs';
import CustomTags, { TagItem } from '@/components/custom/Tags';

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

const initTagList = [
  {
    label: '拍摄',
    key: 'shoot',
    active: false
  },
  {
    label: '文案',
    key: 'copyWriting',
    active: false
  },
  {
    label: '投放',
    key: 'put',
    active: true
  },
  {
    label: '设计',
    key: 'design',
    active: false
  },
  {
    label: '社群',
    key: 'community',
    active: false
  },
  {
    label: '培训',
    key: 'training',
    active: false
  },
  {
    label: '分销',
    key: 'distribution',
    active: false
  },
  {
    label: '调研',
    key: 'research',
    active: false
  },
  {
    label: '关注',
    key: 'attention',
    active: false
  },
  {
    label: '猎头',
    key: 'headhunting',
    active: false
  },
  {
    label: '直播',
    key: 'live',
    active: false
  },
  {
    label: 'KOL/KOC孵化',
    key: 'KOL/KOCIncubation',
    active: false
  }
];

const initSecondTagList = [
  {
    label: '体验官',
    key: 'first'
  },
  {
    label: '亲子vlog',
    key: 'second'
  },
  {
    label: '直播',
    key: 'third'
  },
  {
    label: '北美外教',
    key: 'fourth'
  },
  {
    label: '亲子游',
    key: 'fifth'
  },
  {
    label: '文案写作',
    key: 'sixth'
  },
  {
    label: '短视频脚本设计',
    key: 'seventh'
  }
];

const Index = () => {
  const unstated = Unstated.useContainer();
  const [tabList, setTabList] = useState<CustomTabItem[]>(initTabList);
  const [statusTabList, setStatusTabList] = useState<CustomTabItem[]>(
    initStatusTabList
  );
  const [tagList, setTagList] = useState<TagItem[]>(initTagList);
  const [secondTagList, setSecondTagList] = useState<TagItem[]>(
    initSecondTagList
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

  const onSelectedTagChange = useCallback(
    (type, selectedTagKeyList, selectedTagList, isolateTagList) => {
      switch (type) {
        case 'init':
          setTagList(isolateTagList);
          break;
        case 'second':
          setSecondTagList(isolateTagList);
          break;
        default:
          break;
      }
      selectedTagKeyList.map();
      selectedTagList.map();
    },
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

      <CustomTags
        tagList={tagList}
        onSelectedChange={onSelectedTagChange.bind(null, 'init')}
      />
      <View className='text'>Hello world! </View>

      <CustomTags
        tagList={secondTagList}
        onSelectedChange={onSelectedTagChange.bind(null, 'second')}
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
