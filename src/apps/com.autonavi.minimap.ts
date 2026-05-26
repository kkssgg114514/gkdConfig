import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.autonavi.minimap',
  name: '高德地图',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击右上角“跳过广告”按钮',
      activityIds: 'com.autonavi.map.activity.NewMapActivity',
      fastQuery: true,
      forcedTime: 10_000,
      matchRoot: true,
      matchTime: 10_000,
      actionMaximum: 1,
      priorityTime: 10_000,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          anyMatches: [
            '@[clickable=true] > [text="跳过广告"][visibleToUser=true]',
            '@[clickable=true] > [text*="跳过"][text.length<8][visibleToUser=true]',
          ],
        },
        {
          key: 1,
          matches:
            '([vid="fl_splash_container"][visibleToUser=true]) && ([text*="互动跳转详情"][visibleToUser=true]) && (@[clickable=true] > [text*="跳过"][visibleToUser=true])',
        },
        {
          key: 2,
          matches:
            '([vid="fl_splash_container"][visibleToUser=true]) && ([text="跳过广告"][visibleToUser=true]) && (@[parent=null])',
          position: {
            right: 'width*0.12',
            top: 'height*0.105',
          },
        },
      ],
    },
  ],
});
