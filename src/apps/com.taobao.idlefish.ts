import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.idlefish',
  name: '闲鱼',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击右上角“跳过广告”',
      fastQuery: true,
      matchTime: 10_000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="跳过广告"]',
    },
  ],
});
