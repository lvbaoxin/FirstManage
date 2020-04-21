import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: ()=>import ("@/view/home")
    },
    {
      path: '/user',
      component: ()=>import ("@/view/user/userlist")
    }
  ]
})
