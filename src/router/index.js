import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/pages/login/index')
    },
    {
      path: '/',
      component: Layout,
      redirect: '/work-bench'
    },
    {
      path: '/work-bench',
      component: Layout,
      redirect: '/work-bench/index',
      // alwaysShow: true, // will always show the root menu
      // name: 'Permission',
      // meta: {
      //   title: 'Permission',
      //   icon: 'lock',
      //   roles: ['admin', 'editor'] // you can set roles in root nav
      // },
      children: [
        {
          path: 'index',
          component: () => import('@/pages/work-bench/index'),
          name: 'WorkIndex'
        },
        {
          path: 'work-done',
          component: () => import('@/pages/work-bench/work-done'),
          name: 'WorkDone'
        },
        {
          path: 'my-plan',
          component: () => import('@/pages/work-bench/my-plan'),
          name: 'MyPlan'
        },
        {
          path: 'task-assign',
          component: () => import('@/pages/work-bench/task-assign'),
          name: 'TaskAssign'
        },
        {
          path: 'system-info',
          component: () => import('@/pages/work-bench/system-info'),
          name: 'SystemInfo'
        }
      ]
    },
    {
      path: '/order-manage',
      component: Layout,
      redirect: '/order-manage/index',
      children: [
        {
          path: 'index',
          component: () => import('@/pages/order-manage/index'),
          name: 'OrderIndex'
        },
        {
          path: 'create-order',
          component: () => import('@/pages/order-manage/create-order'),
          name: 'CreateOrder'
        },,
        {
          path: 'check-order',
          component: () => import('@/pages/order-manage/check-order'),
          name: 'CheckeOrder'
        },
        {
          path: 'create-contract',
          component: () => import('@/pages/order-manage/create-contract'),
          name: 'CreateContract'
        },
        {
          path: 'contract-manage',
          component: () => import('@/pages/order-manage/contract-manage/index'),
          name: 'ContractManage'
        },
        {
          path: 'client-follow',
          component: () => import('@/pages/order-manage/client-follow'),
          name: 'ClientFollow'
        }
      ]
    },
    {
      path: '/project-manage',
      component: Layout,
      redirect: '/project-manage/index',
      children: [
        {
          path: 'index',
          component: () => import('@/pages/project-manage/index'),
          name: 'ProjectIndex'
        },
        {
          path: 'check-project',
          component: () => import('@/pages/project-manage/check-project'),
          name: 'CheckProject'
        },
        {
          path: 'project-detail',
          component: () => import('@/pages/project-manage/project-detail/index'),
          name: 'ProjectDetail'
        }
      ]
    },
    {
      path: '/document-manage',
      component: Layout,
      redirect: '/document-manage/index',
      children: [
        {
          path: 'index',
          component: () => import('@/pages/document-manage/index'),
          name: 'DocumentIndex'
        }
      ]
    },
    {
      path: '/finance-manage',
      component: Layout,
      redirect: '/finance-manage/index',
      children: [
        {
          path: 'index',
          component: () => import('@/pages/finance-manage/index'),
          name: 'FinanceIndex'
        }
      ]
    },
    {
      path: '/report-manage',
      component: Layout,
      redirect: '/report-manage/index',
      children: [
        {
          path: 'index',
          component: () => import('@/pages/report-manage/index'),
          name: 'ReportIndex'
        }
      ]
    },
    {
      path: '/user-center',
      component: Layout,
      redirect: '/user-center/index',
      children: [
        {
          path: 'index',
          component: () => import('@/pages/user-center/index'),
          name: 'UserCenter'
        },
        {
          path: 'create-experience',
          component: () => import('@/pages/user-center/create-experience'),
          name: 'CreateExperience'
        }
      ]
    }
  ]
})
