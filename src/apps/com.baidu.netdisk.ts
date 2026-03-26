import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.netdisk',
  name: '百度网盘',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击左上或右上圆圈“跳过”按钮',
      activityIds: '.ui.Navigate',
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
            '[text="跳过"][width<300 && height<200][visibleToUser=true]',
            '[desc="跳过"][width<300 && height<200][visibleToUser=true]',
            '[text*="跳过"][text.length<8][width<300 && height<200][visibleToUser=true]',
            '[desc*="跳过"][desc.length<8][width<300 && height<200][visibleToUser=true]',
          ],
        },
        {
          key: 2,
          matches:
            '[name="android.view.View"][clickable=true][left<220][top<400][width<220][height<220][visibleToUser=true]',
        },
        {
          key: 3,
          matches:
            '([text*="立即进入"][visibleToUser=true]) && ([text*="向上滑动"][visibleToUser=true]) && (@[parent=null])',
          position: {
            left: 'width*0.10',
            top: 'height*0.10',
          },
        },
        {
          key: 4,
          matches:
            '([text*="转动手机"][visibleToUser=true]) && ([text*="今日推荐"][visibleToUser=true]) && (@[parent=null])',
          position: {
            right: 'width*0.08',
            top: 'height*0.08',
          },
        },
      ],
    },
  ],
});
