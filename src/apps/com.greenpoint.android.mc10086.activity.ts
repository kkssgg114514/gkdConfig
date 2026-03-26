import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.greenpoint.android.mc10086.activity',
  name: '中国移动',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击右上角“跳过”按钮',
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
            '@[clickable=true] > [text="跳过"][visibleToUser=true]',
            '@[clickable=true] > [desc="跳过"][visibleToUser=true]',
            '@[clickable=true] > [text*="跳过"][text.length<8][visibleToUser=true]',
            '@[clickable=true] > [desc*="跳过"][desc.length<8][visibleToUser=true]',
          ],
        },
        {
          key: 1,
          action: 'clickCenter',
          anyMatches: [
            '[text*="跳过"][text.length<8][width<300 && height<200][visibleToUser=true]',
            '[desc*="跳过"][desc.length<8][width<300 && height<200][visibleToUser=true]',
          ],
        },
        {
          key: 2,
          matches: '([text*="广告"][visibleToUser=true]) && (@[parent=null])',
          position: {
            right: 'width*0.07',
            top: 'height*0.09',
          },
        },
        {
          key: 3,
          matches:
            '(([text*="立即前往"][visibleToUser=true]) || ([desc*="立即前往"][visibleToUser=true])) && (@[parent=null])',
          position: {
            right: 'width*0.07',
            top: 'height*0.09',
          },
        },
      ],
    },
  ],
});
