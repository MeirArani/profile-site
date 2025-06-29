import 'server-only';

const messages = {
  en: import('@/messages/en.json').then((module) => module.default),
  ja: import('@/messages/ja.json').then((module) => module.default),
};

export const getMessages = async (locale: 'en' | 'ja') => messages[locale];
