import {Images} from '../theme';

const settingData = [
  {
    route: 'ChangePassword',
    label: 'Change Password',
    icon: Images.icons.card,
    testLabel: 'Change Password menu',
  },
  {
    route: 'Languages',
    label: 'Change Language',
    icon: Images.icons.card,
    testLabel: 'Change Language',
  },
  {
    route: 'Logout',
    label: 'Logout',
    icon: Images.icons.setting,
    testLabel: 'Logout menu',
  },
];

const languagesData = [
  {
    language: 'en',
    title: 'English',
    isRtl: false,
  },
  {
    language: 'ar',
    title: 'Arabic',
    isRtl: true,
  },
  {
    language: 'he',
    title: 'Hebrew',
    isRtl: true,
  },
  {
    language: 'fr',
    title: 'French',
    isRtl: false,
  },
];

export {settingData, languagesData};
