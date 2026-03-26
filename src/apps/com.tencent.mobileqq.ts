import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mobileqq',
  name: 'QQ',
  groups: [
    {
      key: 0,
      name: 'QQ空间广告',
      desc: '点击广告右上角控件后关闭此条广告',
      activityIds:
        'com.qzone.reborn.feedpro.activity.QzoneFriendFeedProActivity',
      fastQuery: true,
      matchRoot: true,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          excludeMatches: '[text="关闭此条广告"][visibleToUser=true]',
          matches:
            '@[id="com.tencent.mobileqq:id/ybh"][desc="更多"][clickable=true][visibleToUser=true] > [id="com.tencent.mobileqq:id/ybk"][text="广告"][visibleToUser=true]',
        },
        {
          key: 1,
          preKeys: [0],
          matches:
            '@[clickable=true][visibleToUser=true] > [text="关闭此条广告"][visibleToUser=true]',
        },
      ],
    },
  ],
});
