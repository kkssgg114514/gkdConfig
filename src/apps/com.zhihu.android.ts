import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zhihu.android',
  name: '知乎',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击右上角跳过按钮',
      activityIds: '.app.ui.activity.LauncherActivity',
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
            '@[clickable=true] > [vid="btn_skip"][visibleToUser=true]',
            '@[clickable=true] > [text*="跳过"][text.length<8][visibleToUser=true]',
            '@[clickable=true] > [desc*="跳过"][desc.length<8][visibleToUser=true]',
          ],
        },
        {
          key: 1,
          action: 'clickCenter',
          anyMatches: [
            '[vid="btn_skip"][visibleToUser=true]',
            '[text*="跳过"][text.length<8][width<300 && height<200][visibleToUser=true]',
            '[desc*="跳过"][desc.length<8][width<300 && height<200][visibleToUser=true]',
          ],
        },
        {
          key: 2,
          action: 'clickCenter',
          matches:
            '([id="com.zhihu.android:id/launch_layout"][clickable=true][visibleToUser=true]) && ([text="向上滑动"][visibleToUser=true]) && ([text*="跳转至详情页"][visibleToUser=true]) && ([name="android.view.View"][clickable=true][right>1000][top<520][width<180][height<180][visibleToUser=true])',
        },
      ],
    },
  ],
});
