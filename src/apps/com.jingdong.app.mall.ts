import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingdong.app.mall',
  name: '京东',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击右上角跳过按钮',
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
            '[id="com.jingdong.app.mall:id/b22"][desc="跳过"][clickable=true][visibleToUser=true]',
            '[vid="b22"][desc="跳过"][clickable=true][visibleToUser=true]',
            '[desc="跳过"][clickable=true][right>950][bottom<320][visibleToUser=true]',
          ],
        },
        {
          key: 1,
          matches:
            '([vid="b22"][desc="跳过"][clickable=true][visibleToUser=true]) && (@[parent=null])',
          position: {
            right: 'width*0.11',
            top: 'height*0.09',
          },
        },
      ],
    },
  ],
});
