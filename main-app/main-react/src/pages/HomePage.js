import React from 'react';

export default function HomePage() {
  return (
    <div>
      <h1>Main React App Home Page</h1>
      <hr />
      <p>Child App</p>
      {/* baseurl: 子应用的路由前缀, 在微前端环境下，子应用可以从window上获取baseurl的值，用于设置路由前缀。 */}
      {/* shadowDOM 具有更强的样式隔离能力，开启后，<micro-app>标签会成为一个真正的WebComponent。但shadowDOM在React16及以下、vue3中的兼容不是很好，请谨慎使用。 */}
      <micro-app name='childReact' url='http://localhost:3001' baseurl='/child-react' shadowDOM='true'></micro-app>
    </div>
  );
}
