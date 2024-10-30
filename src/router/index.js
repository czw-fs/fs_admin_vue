import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// 转换路径中 @ 为 /src
function resolveComponentPath(componentPath) {
  return componentPath ? () => import(componentPath.replace(/^@/, '/src')) : null
}

// 递归函数，处理父子路由关系
function addRoutesFromConfig(routesConfig, parentName = null) {
  routesConfig.forEach(route => {
    const { path, name, component, children, ...rest } = route;

    const resolvedPath = resolveComponentPath(component);



    // 生成路由记录
    const routeRecord = {
      path,
      name,
      component: resolvedPath,
      ...rest
    };

    // 如果有父路由，作为子路由添加
    if (parentName) {
      router.addRoute(parentName, routeRecord);
    } else {
      router.addRoute(routeRecord);
    }

    // 如果有子路由，递归调用
    if (children && children.length > 0) {
      addRoutesFromConfig(children, name); // 使用当前路由的名称作为父路由
    }
  });
}

// 从后端获取的动态路由配置
const dynamicRoutes = [
  {
    "path": "/",
    "name": "layout",
    "redirect": "/home",
    "component": "@/layout/index.vue",
    "children": [
      {
        "path": "/home",
        "name": "home",
        "component": "@/views/home/index.vue",
        "meta": {
          "type": "doc"
        }
      },
      {
        "path": "/system",
        "name": "system",
        "meta": {
          "type": "menu"
        },
        "children": [
          {
            "path": "user",
            "name": "user",
            "component": "@/views/system/user/index.vue",
            "meta": {
              "type": "doc"
            }
          },
          {
            "path": "role",
            "name": "role",
            "component": "@/views/system/role/index.vue",
            "meta": {
              "type": "doc"
            }
          },
          {
            "path": "menu",
            "name": "menu",
            "component": "@/views/system/menu/index.vue",
            "meta": {
              "type": "doc"
            }
          }
        ]
      }
    ]
  }
];

addRoutesFromConfig(dynamicRoutes);

export default router;
