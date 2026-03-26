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
      rules: '[id="com.taobao.taobao:id/close"]',
    },
  ],
});
