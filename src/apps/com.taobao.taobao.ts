import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.taobao',
  name: '淘宝',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击右上角关闭按钮',
      fastQuery: true,
      matchTime: 10_000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: '[id="com.taobao.taobao:id/close"]',
        },
        {
          key: 1,
          anyMatches: [
            '[vid="ll_close"][clickable=true][visibleToUser=true] > [vid="tv_close"][text="跳过"][visibleToUser=true]',
            '[id="com.taobao.taobao:id/ll_close"][clickable=true][visibleToUser=true] > [id="com.taobao.taobao:id/tv_close"][text="跳过"][visibleToUser=true]',
          ],
        },
      ],
    },
  ],
});
