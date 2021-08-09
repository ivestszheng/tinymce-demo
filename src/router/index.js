/*
 * @Descripttion:
 * @Date: 2021-08-09 15:39:12
 * @LastEditTime: 2021-08-09 15:49:07
 */
import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'
Vue.use(Router)

export default new Router({
  mode: 'history',  //去掉url中的#
  routes: [
    {
      path: '/',
      name: 'test',
      component: test
    }
  ]
})
