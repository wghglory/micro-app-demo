import React from 'react';
import { NavLink } from 'react-router-dom';
import { Switch, Route } from 'react-router';

/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event';
import microApp from '@micro-zoe/micro-app';

export default function HomePage() {
  return (
    <div>
      <h1>Main React App Home Page</h1>
      <hr />
      <p>Child Apps</p>
      <nav>
        <ul>
          <li>
            <NavLink to='/home/child-react'>React</NavLink>
          </li>
          <li>
            <NavLink to='/home/child-vue'>Vue</NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path='/home/child-react'>
          <micro-app
            name='childReact'
            url='http://localhost:3001/'
            baseurl='/home/child-react'
            shadowDOM='false'
            data={{ name: 'derek' }} // data只接受对象类型，采用严格对比(===)，当传入新的data对象时会重新发送
          ></micro-app>
        </Route>
        <Route path='/home/child-vue'>
          <button
            onClick={() => {
              // 发送数据给子应用 my-app
              microApp.setData('childVue', { type: '新的数据' });
            }}
          >
            Send Data
          </button>
          <micro-app
            name='childVue'
            url='http://localhost:4001/'
            baseurl='/home/child-vue'
            shadowDOM='false'
          ></micro-app>
        </Route>
      </Switch>
      {/* baseurl: 子应用的路由前缀, 在微前端环境下，子应用可以从window上获取baseurl的值，用于设置路由前缀。 */}
      {/* shadowDOM 具有更强的样式隔离能力，开启后，<micro-app>标签会成为一个真正的WebComponent。但shadowDOM在React16及以下、vue3中的兼容不是很好，请谨慎使用。 */}
    </div>
  );
}
