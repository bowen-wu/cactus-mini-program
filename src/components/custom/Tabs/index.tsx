import React, { useCallback } from 'react';
import scopedClasses from '@/utils/scopedClasses';
import { View } from '@tarojs/components';

import './index.scss';

const sc = scopedClasses('custom-tabs');

export interface CustomTabItem {
  key: string;
  label: string;
  active: boolean;
}

export enum TabsMode {
  NORMAL = 'normal',
  TAG = 'tag'
}

interface TabsProps {
  tabList: CustomTabItem[];
  onSelectedTabChange: (
    selectedTab: CustomTabItem,
    tabList: CustomTabItem[]
  ) => void;
  mode?: TabsMode;
}

const CustomTabs = (props: TabsProps) => {
  const { tabList, onSelectedTabChange, mode = TabsMode.NORMAL } = props;

  const onTabChange = useCallback(
    (selectedTab: CustomTabItem) => {
      const isolateTabList = tabList.map(tab =>
        tab.key === selectedTab.key
          ? { ...selectedTab, active: true }
          : {
              ...tab,
              active: false
            }
      );
      onSelectedTabChange({ ...selectedTab, active: true }, isolateTabList);
    },
    [onSelectedTabChange, tabList]
  );

  return (
    <View className={`${sc()} ${sc({ [`${mode}`]: true })}`}>
      <View className={sc('inner')}>
        {tabList.map(tab => (
          <View
            className={sc({ tab: true, active: tab.active, [`${mode}`]: true })}
            key={tab.key}
            onClick={onTabChange.bind(null, tab)}
          >
            {tab.label}
          </View>
        ))}
      </View>
    </View>
  );
};

export default React.memo(CustomTabs);
