import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mtt',
  name: 'QQ浏览器',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击右上角倒计时“跳过”按钮',
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
            '@LinearLayout[clickable=true] > TextView[text="跳过"][visibleToUser=true]',
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
