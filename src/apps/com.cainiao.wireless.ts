import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cainiao.wireless',
  name: '菜鸟',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击右上角圆圈“跳过”按钮',
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
            '@[text="跳过"][visibleToUser=true]',
            '@[desc="跳过"][visibleToUser=true]',
          ],
        },
        {
          key: 1,
          anyMatches: [
            '@[clickable=true] > [text*="跳过"][visibleToUser=true]',
            '@[clickable=true] > [desc*="跳过"][visibleToUser=true]',
            '@[text*="跳过"][visibleToUser=true]',
            '@[desc*="跳过"][visibleToUser=true]',
          ],
        },
      ],
    },
  ],
});
