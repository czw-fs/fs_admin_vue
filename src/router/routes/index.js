import {routeJson} from "@/router/routes/routeJson.js";


const obj = JSON.stringify(routeJson);
console.log(obj)


export default {}

// export const routes = [
//     {
//         path: '/',
//         name: 'layout',
//         redirect: '/home',
//         component: ()=> import('@/layout/index.vue'),
//         children:[
//             {
//                 path: '/home',
//                 name: 'home',
//                 component:()=>import('@/views/home/index.vue'),
//                 meta:{
//                     type: 'doc'
//                 }
//             },
//             {
//                 path: '/system',
//                 name: 'system',
//                 meta:{
//                     type: 'menu'
//                 },
//                 children:[
//                     {
//                         path: 'user',
//                         name: 'user',
//                         component:()=>import("@/views/system/user/index.vue"),
//                         meta:{
//                             type: 'doc'
//                         }
//                     },
//                     {
//                         path: 'role',
//                         name: 'role',
//                         component:()=>import("@/views/system/role/index.vue"),
//                         meta:{
//                             type: 'doc'
//                         }
//                     },
//                     {
//                         path: 'menu',
//                         name: 'menu',
//                         component:()=>import("@/views/system/menu/index.vue"),
//                         meta:{
//                             type: 'doc'
//                         }
//                     }
//                 ]
//             }
//         ]
//     },
// ]


