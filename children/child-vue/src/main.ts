import './public-path';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App)
  .use(store)
  .use(router)
  .mount('#app');

declare global {
  interface Window {
    __MICRO_APP_BASE_URL__: string;
    __MICRO_APP_ENVIRONMENT__: boolean;
    microApp: any;
  }
}

function handleGlobalData(data: unknown) {
  alert(JSON.stringify(data));
}

// 数据监听
window.microApp?.addDataListener((data: unknown) => {
  console.log('data comes from main-react', data);
  alert(JSON.stringify(data));
}, true);

// 全局数据监听
window.microApp?.addGlobalDataListener(handleGlobalData);

// 监听卸载
window.addEventListener('unmount', function() {
  // microApp.clearApps()
  console.log('微应用 child react unmounted');
  // 卸载前卸载全局数据监听
  window.microApp?.removeGlobalDataListener(handleGlobalData);
  // 卸载应用
  // ReactDOM.unmountComponentAtNode(document.getElementById('root'));
});
