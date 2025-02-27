import en from './en.js';
import zh from './zh.js';

const i18n = {
  en,
  zh,
  currentLocale: 'en',

  init() {
    // 获取浏览器语言设置
    const browserLang = navigator.language.toLowerCase();
    this.currentLocale = browserLang.startsWith('zh') ? 'zh' : 'en';
  },

  t(key) {
    return this[this.currentLocale][key] || key;
  }
};

export default i18n;