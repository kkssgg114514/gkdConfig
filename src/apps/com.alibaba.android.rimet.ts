import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.alibaba.android.rimet',
  name: '钉钉',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击右上角“跳过”按钮',
      activityIds: 'com.alibaba.android.rimet.biz.NewAdSplashActivity',
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
            '[vid="splash_advertise_pass_text"][text*="跳过"][clickable=true][visibleToUser=true]',
            '[id="com.alibaba.android.rimet:id/splash_advertise_pass_text"][text*="跳过"][clickable=true][visibleToUser=true]',
          ],
        },
        {
          key: 1,
          matches:
            '([vid="fl_splash_media_root"][visibleToUser=true]) && ([text*="互动跳转详情"][visibleToUser=true]) && (@[text*="跳过"][clickable=true][visibleToUser=true])',
        },
      ],
    },
    {
      key: 1,
      name: '打卡后广告',
      desc: '点击广告弹窗右上角关闭按钮',
      activityIds: 'com.alibaba.lightapp.runtime.ariver.TheOneActivityMainTask',
      fastQuery: true,
      matchRoot: true,
      matchTime: 10_000,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: {
        matches:
          '([vid="title"][text="格数科技"][visibleToUser=true]) && ([vid="h5_web_content"][visibleToUser=true]) && (@[parent=null])',
        position: {
          right: 'width*0.16',
          top: 'height*0.17',
        },
      },
    },
  ],
});
