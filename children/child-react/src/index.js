import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// ------------------------------------------------------

function handleGlobalData(data) {
  alert({
    title: '来全局数据',
    content: (
      <div>
        <p>{JSON.stringify(data)}</p>
      </div>
    ),
  });
}

// 数据监听
window.microApp?.addDataListener((data) => {
  console.log('data comes from main-react', data);
  alert(JSON.stringify(data));
}, true);

// 全局数据监听
window.microApp?.addGlobalDataListener(handleGlobalData);

// 监听卸载
window.addEventListener('unmount', function () {
  // microApp.clearApps()
  console.log('微应用 child react unmounted');
  // 卸载前卸载全局数据监听
  window.microApp?.removeGlobalDataListener(handleGlobalData);
  // 卸载应用
  ReactDOM.unmountComponentAtNode(document.getElementById('root'));
});
