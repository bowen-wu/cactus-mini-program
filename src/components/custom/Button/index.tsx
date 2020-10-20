import React, { ReactNode, useCallback } from 'react';
import scopedClasses from '@/utils/scopedClasses';
import { View } from '@tarojs/components';

import './index.scss';

const sc = scopedClasses('custom-button');

interface ButtonProps {
  text?: string;
  children?: ReactNode;
  onClick?: () => void;
}

const CustomButton = (props: ButtonProps) => {
  const { text = '确认', children, onClick } = props;

  const onButtonClick = useCallback(() => {
    if (onClick) {
      onClick();
    }
  }, [onClick]);

  return (
    <View className={sc()} onClick={onButtonClick}>
      {children || text}
    </View>
  );
};

export default React.memo(CustomButton);
