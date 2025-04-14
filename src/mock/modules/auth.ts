import Mock from 'mockjs'

export default [
  /**
   * 用户登录
   * */
  {
    url: '/api/mock/login',
    type: 'post',
    response: (options: any) => {
      const body = JSON.parse(options.body)
      const { username, password } = body
      if (username === 'Mason' && password === '123456') {
        return Mock.mock({
          code: 200,
          data: {
            expires: 17722518421,
            id: 13,
            token:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMyIsImlhdCI6MTYyMzI1MTg0MjEsInVzZXJuYW1lIjoiTWFzb24iLCJleHAiOjE2MjMyNTE4NDIxLCJpYXQiOjE2MjMyNTE4NDIxLCJzdWIiOiIxMyJ9.f123456789012345678901',
            username: 'Mason'
          },
          msg: '登录成功'
        })
      } else {
        return {
          code: 400,
          data: null,
          msg: '用户名或密码错误'
        }
      }
    }
  },
  /**
   * 获取动态路由列表
   * */
  {
    url: '/api/mock/menu/list',
    type: 'get',
    response: () => {
      return Mock.mock({
        code: 200,
        data: [
          {
            id: 1,
            name: 'dashboard',
            path: '/dashboard',
            component: '/dashboard/index',
            parentId: 0,
            sort: 1,
            meta: {
              title: '仪表盘',
              icon: 'icon-chart-bar',
              isEnable: true,
              isLink: false,
              isAffix: false,
              isKeepAlive: false
            },
            createdAt: '2024-10-22 22:29:15',
            children: [
              {
                id: 26,
                name: 'workbench',
                path: '/dashboard/workbench',
                component: '/dashboard/workbench/index',
                parentId: 1,
                sort: 1,
                meta: {
                  title: '工作台',
                  icon: '',
                  isEnable: true,
                  isLink: false,
                  isAffix: true,
                  isKeepAlive: false
                },
                createdAt: '2025-03-09 19:25:44',
                children: []
              }
            ]
          },
          {
            id: 67,
            name: 'visualization',
            path: '/visualization',
            component: '/visualization/index',
            parentId: -1,
            sort: 2,
            meta: {
              title: '数据大屏',
              icon: 'icon-data-view',
              isEnable: true,
              isLink: false,
              isAffix: false,
              isKeepAlive: false
            },
            createdAt: '2025-04-01 17:01:15',
            children: []
          },
          {
            id: 2,
            name: 'system',
            path: '/system',
            component: '/system/index',
            parentId: 0,
            sort: 3,
            meta: {
              title: '系统管理',
              icon: 'icon-tiaojianfenzu',
              isEnable: true,
              isLink: false,
              isAffix: false,
              isKeepAlive: false
            },
            createdAt: '2024-10-22 22:29:15',
            children: [
              {
                id: 3,
                name: 'accountManage',
                path: '/system/accountManage',
                component: '/system/accountManage/index',
                parentId: 2,
                sort: 1,
                meta: {
                  title: '账号管理',
                  icon: '',
                  isEnable: true,
                  isLink: false,
                  isAffix: false,
                  isKeepAlive: false
                },
                createdAt: '2024-10-22 22:29:15',
                children: []
              },
              {
                id: 4,
                name: 'roleManage',
                path: '/system/roleManage',
                component: '/system/roleManage/index',
                parentId: 2,
                sort: 1,
                meta: {
                  title: '角色管理',
                  icon: '',
                  isEnable: true,
                  isLink: false,
                  isAffix: false,
                  isKeepAlive: false
                },
                createdAt: '2024-10-22 22:29:15',
                children: []
              },
              {
                id: 5,
                name: 'menuManage',
                path: '/system/menuManage',
                component: '/system/menuManage/index',
                parentId: 2,
                sort: 1,
                meta: {
                  title: '菜单管理',
                  icon: '',
                  isEnable: true,
                  isLink: false,
                  isAffix: false,
                  isKeepAlive: false
                },
                createdAt: '2024-10-22 22:29:15',
                children: []
              },
              {
                id: 6,
                name: 'departmentManage',
                path: '/system/departmentManage',
                component: '/system/departmentManage/index',
                parentId: 2,
                sort: 1,
                meta: {
                  title: '部门管理',
                  icon: '',
                  isEnable: true,
                  isLink: false,
                  isAffix: false,
                  isKeepAlive: false
                },
                createdAt: '2024-10-22 22:29:15',
                children: []
              }
            ]
          },
          {
            id: 10,
            name: 'menu',
            path: '/menu',
            component: '/menu/index',
            parentId: 0,
            sort: 4,
            meta: {
              title: '路由缓存',
              icon: 'icon-lock',
              isEnable: true,
              isLink: false,
              isAffix: false,
              isKeepAlive: true
            },
            createdAt: '2024-06-20 15:52:44',
            children: [
              {
                id: 11,
                name: 'menu1',
                path: '/menu/menu1',
                component: '/menu/menu1/index',
                parentId: 10,
                sort: 1,
                meta: {
                  title: '菜单1',
                  icon: '',
                  isEnable: true,
                  isLink: false,
                  isAffix: false,
                  isKeepAlive: true
                },
                createdAt: '2024-06-20 15:52:44',
                children: []
              },
              {
                id: 12,
                name: 'menu2',
                path: '/menu/menu2',
                component: '/menu/menu2/index',
                parentId: 10,
                sort: 1,
                meta: {
                  title: '菜单2',
                  icon: '',
                  isEnable: true,
                  isLink: false,
                  isAffix: false,
                  isKeepAlive: true
                },
                createdAt: '2024-06-20 15:52:44',
                children: [
                  {
                    id: 13,
                    name: 'menu21',
                    path: '/menu/menu2/menu21',
                    component: '/menu/menu2/menu21/index',
                    parentId: 12,
                    sort: 1,
                    meta: {
                      title: '菜单2-1',
                      icon: '',
                      isEnable: true,
                      isLink: false,
                      isAffix: false,
                      isKeepAlive: true
                    },
                    createdAt: '2024-06-20 15:52:44',
                    children: []
                  },
                  {
                    id: 14,
                    name: 'menu22',
                    path: '/menu/menu2/menu22',
                    component: '/menu/menu2/menu22/index',
                    parentId: 12,
                    sort: 1,
                    meta: {
                      title: '菜单2-2',
                      icon: '',
                      isEnable: true,
                      isLink: false,
                      isAffix: false,
                      isKeepAlive: true
                    },
                    createdAt: '2024-06-20 15:52:44',
                    children: [
                      {
                        id: 15,
                        name: 'menu221',
                        path: '/menu/menu2/menu22/menu221',
                        component: '/menu/menu2/menu22/menu221/index',
                        parentId: 14,
                        sort: 1,
                        meta: {
                          title: '菜单2-2-1',
                          icon: '',
                          isEnable: true,
                          isLink: false,
                          isAffix: false,
                          isKeepAlive: true
                        },
                        createdAt: '2024-06-20 15:52:44',
                        children: []
                      },
                      {
                        id: 16,
                        name: 'menu222',
                        path: '/menu/menu2/menu22/menu222',
                        component: '/menu/menu2/menu22/menu222/index',
                        parentId: 14,
                        sort: 1,
                        meta: {
                          title: '菜单2-2-2',
                          icon: '',
                          isEnable: true,
                          isLink: false,
                          isAffix: false,
                          isKeepAlive: true
                        },
                        createdAt: '2024-06-20 15:52:44',
                        children: []
                      }
                    ]
                  },
                  {
                    id: 17,
                    name: 'menu23',
                    path: '/menu/menu2/menu23',
                    component: '/menu/menu2/menu23/index',
                    parentId: 12,
                    sort: 1,
                    meta: {
                      title: '菜单2-3',
                      icon: '',
                      isEnable: true,
                      isLink: false,
                      isAffix: false,
                      isKeepAlive: true
                    },
                    createdAt: '2024-06-20 15:52:44',
                    children: []
                  }
                ]
              },
              {
                id: 18,
                name: 'menu3',
                path: '/menu/menu3',
                component: '/menu/menu3/index',
                parentId: 10,
                sort: 1,
                meta: {
                  title: '菜单3',
                  icon: '',
                  isEnable: true,
                  isLink: false,
                  isAffix: false,
                  isKeepAlive: true
                },
                createdAt: '2024-06-20 15:52:44',
                children: []
              }
            ]
          },
          {
            id: 25,
            name: 'business-components',
            path: '/business-components',
            component: '/business-components/index',
            parentId: 0,
            sort: 5,
            meta: {
              title: '组件中心',
              icon: 'icon-dianlinengyuan',
              isEnable: true,
              isLink: false,
              isAffix: false,
              isKeepAlive: false
            },
            createdAt: '2025-03-09 19:20:03',
            children: [
              {
                id: 28,
                name: 'icon-view',
                path: '/business-components/icon-view',
                component: '/business-components/icon-view/index',
                parentId: 25,
                sort: 1,
                meta: {
                  title: '图标预览',
                  icon: '',
                  isEnable: true,
                  isLink: false,
                  isAffix: false,
                  isKeepAlive: false
                },
                createdAt: '2025-03-14 13:26:10',
                children: []
              },
              {
                id: 55,
                name: 'flow-chart',
                path: '/business-components/flow-chart',
                component: '/business-components/flow-chart/index',
                parentId: 25,
                sort: 1,
                meta: {
                  title: '流程图',
                  icon: '',
                  isEnable: true,
                  isLink: false,
                  isAffix: false,
                  isKeepAlive: false
                },
                createdAt: '2025-03-27 17:32:31',
                children: []
              },
              {
                id: 69,
                name: 'sse',
                path: '/business-components/sse',
                component: '/business-components/sse/index',
                parentId: 25,
                sort: 1,
                meta: {
                  title: 'SSE',
                  icon: '',
                  isEnable: true,
                  isLink: false,
                  isAffix: false,
                  isKeepAlive: false
                },
                createdAt: '2025-04-03 19:00:41',
                children: []
              },
              {
                id: 27,
                name: 'icon-picker',
                path: '/business-components/icon-picker',
                component: '/business-components/icon-picker/index',
                parentId: 25,
                sort: 2,
                meta: {
                  title: '图标选择器',
                  icon: '',
                  isEnable: true,
                  isLink: false,
                  isAffix: false,
                  isKeepAlive: false
                },
                createdAt: '2025-03-09 19:55:48',
                children: []
              },
              {
                id: 29,
                name: 'image-crepping',
                path: '/business-components/image-cropping',
                component: '/business-components/image-cropping/index',
                parentId: 25,
                sort: 3,
                meta: {
                  title: '图片裁剪',
                  icon: '',
                  isEnable: true,
                  isLink: false,
                  isAffix: false,
                  isKeepAlive: false
                },
                createdAt: '2025-03-14 19:11:09',
                children: []
              },
              {
                id: 56,
                name: 'camera',
                path: '/business-components/camera',
                component: '/business-components/camera/index',
                parentId: 25,
                sort: 3,
                meta: {
                  title: '摄像头',
                  icon: '',
                  isEnable: true,
                  isLink: false,
                  isAffix: false,
                  isKeepAlive: false
                },
                createdAt: '2025-03-27 17:51:10',
                children: []
              },
              {
                id: 57,
                name: 'video-conversation',
                path: '/business-components/video-conversation',
                component: '/business-components/video-conversation/index',
                parentId: 25,
                sort: 3,
                meta: {
                  title: '视频聊天',
                  icon: '',
                  isEnable: true,
                  isLink: false,
                  isAffix: false,
                  isKeepAlive: false
                },
                createdAt: '2025-03-28 10:26:53',
                children: []
              },
              {
                id: 64,
                name: 'file-view',
                path: '/business-components/file-view',
                component: '/business-components/file-view/index',
                parentId: 25,
                sort: 3,
                meta: {
                  title: 'file-view',
                  icon: '',
                  isEnable: true,
                  isLink: false,
                  isAffix: false,
                  isKeepAlive: false
                },
                createdAt: '2025-03-31 20:38:29',
                children: []
              },
              {
                id: 30,
                name: 'form-generator',
                path: '/business-components/form-generator',
                component: '/business-components/form-generator/index',
                parentId: 25,
                sort: 4,
                meta: {
                  title: '表单生成器',
                  icon: '',
                  isEnable: true,
                  isLink: false,
                  isAffix: false,
                  isKeepAlive: false
                },
                createdAt: '2025-03-14 20:55:45',
                children: []
              },
              {
                id: 46,
                name: 'editor',
                path: '/business-components/editor',
                component: '/business-components/editor/index',
                parentId: 25,
                sort: 5,
                meta: {
                  title: '富文本编辑器',
                  icon: '',
                  isEnable: true,
                  isLink: false,
                  isAffix: false,
                  isKeepAlive: false
                },
                createdAt: '2025-03-23 21:18:54',
                children: []
              }
            ]
          },
          {
            id: 31,
            name: 'basic-components',
            path: '/basic-components',
            component: '/basic-components/index',
            parentId: 0,
            sort: 6,
            meta: {
              title: '基础组件',
              icon: 'icon-code',
              isEnable: true,
              isLink: false,
              isAffix: false,
              isKeepAlive: false
            },
            createdAt: '2025-03-15 22:51:00',
            children: [
              {
                id: 32,
                name: 'table',
                path: '/basic-components/table',
                component: '/basic-components/table/index',
                parentId: 31,
                sort: 1,
                meta: {
                  title: '表格',
                  icon: '',
                  isEnable: true,
                  isLink: false,
                  isAffix: false,
                  isKeepAlive: false
                },
                createdAt: '2025-03-15 23:03:14',
                children: [
                  {
                    id: 34,
                    name: 'custom-table',
                    path: '/basic-components/table/custom-table',
                    component: '/basic-components/table/custom-table/index',
                    parentId: 32,
                    sort: 1,
                    meta: {
                      title: '自定义表格',
                      icon: '',
                      isEnable: true,
                      isLink: false,
                      isAffix: false,
                      isKeepAlive: false
                    },
                    createdAt: '2025-03-16 19:04:39',
                    children: []
                  },
                  {
                    id: 35,
                    name: 'configurable-table',
                    path: '/basic-components/table/configurable-table',
                    component: '/basic-components/table/configurable-table/index',
                    parentId: 32,
                    sort: 1,
                    meta: {
                      title: '配置型表格',
                      icon: '',
                      isEnable: true,
                      isLink: false,
                      isAffix: false,
                      isKeepAlive: false
                    },
                    createdAt: '2025-03-16 19:07:20',
                    children: []
                  }
                ]
              },
              {
                id: 33,
                name: 'form',
                path: '/basic-components/form',
                component: '/basic-components/form/index',
                parentId: 31,
                sort: 2,
                meta: {
                  title: '表单',
                  icon: '',
                  isEnable: true,
                  isLink: false,
                  isAffix: false,
                  isKeepAlive: false
                },
                createdAt: '2025-03-15 23:06:05',
                children: [
                  {
                    id: 36,
                    name: 'dynamic-form',
                    path: '/basic-components/form/dynamic-form',
                    component: '/basic-components/form/dynamic-form/index',
                    parentId: 33,
                    sort: 1,
                    meta: {
                      title: '动态表单',
                      icon: '',
                      isEnable: true,
                      isLink: false,
                      isAffix: false,
                      isKeepAlive: false
                    },
                    createdAt: '2025-03-16 19:10:56',
                    children: []
                  },
                  {
                    id: 38,
                    name: 'step-form',
                    path: '/basic-components/form/step-form',
                    component: '/basic-components/form/step-form/index',
                    parentId: 33,
                    sort: 2,
                    meta: {
                      title: '分步表单',
                      icon: '',
                      isEnable: true,
                      isLink: false,
                      isAffix: false,
                      isKeepAlive: false
                    },
                    createdAt: '2025-03-16 20:52:06',
                    children: []
                  }
                ]
              },
              {
                id: 39,
                name: 'column',
                path: '/column',
                component: '/column/index',
                parentId: 31,
                sort: 3,
                meta: {
                  title: '分栏',
                  icon: '',
                  isEnable: true,
                  isLink: false,
                  isAffix: false,
                  isKeepAlive: false
                },
                createdAt: '2025-03-16 20:53:36',
                children: [
                  {
                    id: 51,
                    name: 'classify-list',
                    path: '/basic-components/column/classify-list',
                    component: '/basic-components/column/classify-list/index',
                    parentId: 39,
                    sort: 1,
                    meta: {
                      title: '左分类右列表',
                      icon: '',
                      isEnable: true,
                      isLink: false,
                      isAffix: false,
                      isKeepAlive: false
                    },
                    createdAt: '2025-03-27 12:51:29',
                    children: []
                  },
                  {
                    id: 52,
                    name: 'tree-list',
                    path: '/basic-components/column/tree-list',
                    component: '/basic-components/column/tree-list/index',
                    parentId: 39,
                    sort: 2,
                    meta: {
                      title: '左树右列表',
                      icon: '',
                      isEnable: true,
                      isLink: false,
                      isAffix: false,
                      isKeepAlive: false
                    },
                    createdAt: '2025-03-27 12:52:27',
                    children: []
                  }
                ]
              },
              {
                id: 40,
                name: 'tree',
                path: '/tree',
                component: '/tree/index',
                parentId: 31,
                sort: 4,
                meta: {
                  title: '树状图',
                  icon: '',
                  isEnable: true,
                  isLink: false,
                  isAffix: false,
                  isKeepAlive: false
                },
                createdAt: '2025-03-16 20:54:27',
                children: [
                  {
                    id: 53,
                    name: 'flat-tree',
                    path: '/tree/flat-tree',
                    component: '/tree/flat-tree/index',
                    parentId: 40,
                    sort: 1,
                    meta: {
                      title: '水平树状图',
                      icon: '',
                      isEnable: true,
                      isLink: false,
                      isAffix: false,
                      isKeepAlive: false
                    },
                    createdAt: '2025-03-27 12:56:50',
                    children: []
                  }
                ]
              },
              {
                id: 58,
                name: 'toast',
                path: '/basic-components/toast',
                component: '/basic-components/toast/index',
                parentId: 31,
                sort: 5,
                meta: {
                  title: '提示框',
                  icon: '',
                  isEnable: true,
                  isLink: false,
                  isAffix: false,
                  isKeepAlive: false
                },
                createdAt: '2025-03-28 14:02:08',
                children: []
              },
              {
                id: 59,
                name: 'mason-pro-form',
                path: '/basic-components/mason-pro-form',
                component: '/basic-components/mason-pro-form/index',
                parentId: 31,
                sort: 5,
                meta: {
                  title: '基础表单二次封装',
                  icon: '',
                  isEnable: true,
                  isLink: false,
                  isAffix: false,
                  isKeepAlive: false
                },
                createdAt: '2025-03-29 16:36:11',
                children: [
                  {
                    id: 60,
                    name: 'mason-pro-input',
                    path: '/basic-components/mason-pro-form/mason-pro-input',
                    component: '/basic-components/mason-pro-form/mason-pro-input/index',
                    parentId: 59,
                    sort: 1,
                    meta: {
                      title: 'mason-pro-input',
                      icon: '',
                      isEnable: true,
                      isLink: false,
                      isAffix: false,
                      isKeepAlive: false
                    },
                    createdAt: '2025-03-29 16:53:08',
                    children: []
                  }
                ]
              },
              {
                id: 61,
                name: 'element-hook',
                path: '/basic-components/element-hook',
                component: '/basic-components/element-hook/index',
                parentId: 31,
                sort: 6,
                meta: {
                  title: 'ElementPlusHooks',
                  icon: '',
                  isEnable: true,
                  isLink: false,
                  isAffix: false,
                  isKeepAlive: false
                },
                createdAt: '2025-03-31 15:58:19',
                children: [
                  {
                    id: 62,
                    name: 'useForm',
                    path: '/basic-components/element-hook/use-form',
                    component: '/basic-components/element-hook/use-form/index',
                    parentId: 61,
                    sort: 1,
                    meta: {
                      title: 'useForm',
                      icon: '',
                      isEnable: true,
                      isLink: false,
                      isAffix: false,
                      isKeepAlive: false
                    },
                    createdAt: '2025-03-31 15:59:48',
                    children: []
                  },
                  {
                    id: 63,
                    name: 'use-table',
                    path: '/basic-components/element-hook/use-table',
                    component: '/basic-components/element-hook/use-table/index',
                    parentId: 61,
                    sort: 2,
                    meta: {
                      title: 'useTable',
                      icon: '',
                      isEnable: true,
                      isLink: false,
                      isAffix: false,
                      isKeepAlive: false
                    },
                    createdAt: '2025-03-31 17:47:07',
                    children: []
                  }
                ]
              }
            ]
          },
          {
            id: 48,
            name: 'vue-directive',
            path: '/vue-directive',
            component: '/vue-directive/index',
            parentId: 0,
            sort: 6,
            meta: {
              title: '指令中心',
              icon: 'icon-icon-test6',
              isEnable: true,
              isLink: false,
              isAffix: false,
              isKeepAlive: false
            },
            createdAt: '2025-03-23 22:09:25',
            children: []
          },
          {
            id: 49,
            name: 'template',
            path: '/template',
            component: '/template/index',
            parentId: 0,
            sort: 6,
            meta: {
              title: '模板中心',
              icon: 'icon-modular',
              isEnable: true,
              isLink: false,
              isAffix: false,
              isKeepAlive: false
            },
            createdAt: '2025-03-24 18:39:02',
            children: [
              {
                id: 50,
                name: 'aigc',
                path: '/template/aigc',
                component: '/template/aigc/index',
                parentId: 49,
                sort: 1,
                meta: {
                  title: 'AIGC模板',
                  icon: '',
                  isEnable: true,
                  isLink: false,
                  isAffix: false,
                  isKeepAlive: false
                },
                createdAt: '2025-03-24 20:35:01',
                children: []
              }
            ]
          },
          {
            id: 41,
            name: 'qx-monitor',
            path: '/qx-monitor',
            component: '/qx-monitor/index',
            parentId: 0,
            sort: 7,
            meta: {
              title: '七星监控',
              icon: 'icon-AloT',
              isEnable: true,
              isLink: false,
              isAffix: false,
              isKeepAlive: false
            },
            createdAt: '2025-03-23 15:24:34',
            children: []
          },
          {
            id: 42,
            name: 'config',
            path: '/config',
            component: '/config/index',
            parentId: 0,
            sort: 8,
            meta: {
              title: '系统配置',
              icon: 'icon-jingbao',
              isEnable: true,
              isLink: false,
              isAffix: false,
              isKeepAlive: false
            },
            createdAt: '2025-03-23 15:26:24',
            children: [
              {
                id: 43,
                name: 'config-setting',
                path: '/config/config-setting',
                component: '/config/config-setting/index',
                parentId: 42,
                sort: 1,
                meta: {
                  title: '系统设置',
                  icon: '',
                  isEnable: true,
                  isLink: false,
                  isAffix: false,
                  isKeepAlive: false
                },
                createdAt: '2025-03-23 15:40:10',
                children: []
              },
              {
                id: 44,
                name: 'config-api',
                path: '/config/config-api',
                component: '/config/config-api/index',
                parentId: 42,
                sort: 2,
                meta: {
                  title: 'API管理',
                  icon: '',
                  isEnable: true,
                  isLink: false,
                  isAffix: false,
                  isKeepAlive: false
                },
                createdAt: '2025-03-23 15:42:14',
                children: []
              },
              {
                id: 45,
                name: 'config-log',
                path: '/config/config-log',
                component: '/config/config-log/index',
                parentId: 42,
                sort: 3,
                meta: {
                  title: '系统日志',
                  icon: '',
                  isEnable: true,
                  isLink: false,
                  isAffix: false,
                  isKeepAlive: false
                },
                createdAt: '2025-03-23 15:43:09',
                children: []
              }
            ]
          },
          {
            id: 24,
            name: 'user',
            path: '/user',
            component: '/user/index',
            parentId: 0,
            sort: 9,
            meta: {
              title: '个人中心',
              icon: 'icon-guanli',
              isEnable: true,
              isLink: false,
              isAffix: false,
              isKeepAlive: false
            },
            createdAt: '2024-11-16 15:34:37',
            children: []
          },
          {
            id: 65,
            name: 'link-element-plus',
            path: 'https://element-plus.org/zh-CN/#/zh-CN',
            component: 'https://element-plus.org/zh-CN/#/zh-CN/index',
            parentId: 0,
            sort: 12,
            meta: {
              title: 'ElementPlus官网',
              icon: '',
              isEnable: true,
              isLink: true,
              isAffix: false,
              isKeepAlive: false
            },
            createdAt: '2025-04-01 14:32:52',
            children: []
          }
        ],
        msg: '获取菜单列表成功'
      })
    }
  },
  /**
   * 获取用户信息
   * */
  {
    url: '/api/mock/info/13',
    type: 'get',
    response: () => {
      return Mock.mock({
        code: 200,
        data: {
          id: 13,
          username: 'Mason',
          email: 'mason@example.com',
          role: 'admin',
          permissions: [
            'dashboard',
            'kafka-cluster',
            'kafka-overview',
            'kafka-topic',
            'kafka-consumer',
            'kafka-host-load',
            'kafka-topic-load'
          ],
          avatar: 'http://example.com/avatar.jpg',
          createTime: '2021-06-15 16:20:00'
        },
        msg: '获取用户信息成功'
      })
    }
  }
]
