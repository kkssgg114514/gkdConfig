import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.greenpoint.android.mc10086.activity',
  name: '中国移动',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击右上角跳过按钮',
      activityIds: '.view.tabs.AppTabFragment',
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
            '[id="com.greenpoint.android.mc10086.activity:id/top_view_right_operation"][clickable=true][visibleToUser=true]',
            '[vid="top_view_right_operation"][clickable=true][visibleToUser=true]',
          ],
          position: {
            right: 'width*0.16',
            top: 'height*0.5',
          },
        },
        {
          key: 1,
          matches:
            '([vid="top_view_right_operation"][visibleToUser=true]) && ([vid="image"][clickable=true][visibleToUser=true][width>1000][height>2000]) && (@[parent=null])',
          position: {
            right: 'width*0.05',
            top: 'height*0.09',
          },
        },
        {
          key: 2,
          anyMatches: [
            '@[clickable=true] > [text="跳过"][visibleToUser=true]',
            '@[clickable=true] > [desc="跳过"][visibleToUser=true]',
            '@[clickable=true] > [text*="跳过"][text.length<8][visibleToUser=true]',
            '@[clickable=true] > [desc*="跳过"][desc.length<8][visibleToUser=true]',
            '[text*="跳过"][text.length<8][width<420 && height<220][visibleToUser=true]',
            '[desc*="跳过"][desc.length<8][width<420 && height<220][visibleToUser=true]',
          ],
        },
      ],
    },
  ],
});
