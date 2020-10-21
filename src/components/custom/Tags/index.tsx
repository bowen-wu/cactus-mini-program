import React, { useCallback } from 'react';
import { View } from '@tarojs/components';
import scopedClasses from '@/utils/scopedClasses';

import './index.scss';

const sc = scopedClasses('custom-tags');

export interface TagItem {
  label: string;
  key: string;
  active?: boolean; // 是否返回单个数据
}

interface TagsProps {
  tagList: TagItem[];
  onSelectedChange: (
    selectedTagKeyList: string | string[],
    selectedTagList: TagItem | TagItem[],
    tagList: TagItem[]
  ) => void;
}

const CustomTags = (props: TagsProps) => {
  const { tagList, onSelectedChange } = props;

  const onClickTag = useCallback(
    (selectedTag: TagItem) => {
      if (selectedTag.active === undefined) {
        onSelectedChange(selectedTag.key, selectedTag, tagList);
      } else {
        const isolateTagList = tagList.map(tag =>
          tag.key === selectedTag.key
            ? {
                ...selectedTag,
                active: !selectedTag.active
              }
            : tag
        );
        const selectedTagList = isolateTagList.filter(tag => tag.active);
        const selectedTagKeyList = selectedTagList.map(tag => tag.key);
        onSelectedChange(selectedTagKeyList, selectedTagList, isolateTagList);
      }
    },
    [onSelectedChange, tagList]
  );

  return (
    <View className={sc()}>
      {tagList.map(tag => (
        <View
          key={tag.key}
          className={sc({ item: true, active: !!tag.active })}
          onClick={onClickTag.bind(null, tag)}
        >
          {tag.label}
        </View>
      ))}
    </View>
  );
};

export default React.memo(CustomTags);
