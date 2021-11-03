import Orders from "./views/app/Orders/Orders";
import {ComponentViewer} from "./views/app/ComponentViewer/ComponentViewer";
import {Error404} from "./views/error/Error404";
import {Warehouses} from "./views/app/Warehouses/Warehouses";

export const routes = [
    {
        path: '/orders',
        exact: true,
        component: Orders,
        name: 'Orders'
    },
    {
        path: '/component-viewer',
        exact: true,
        component: ComponentViewer,
        name: 'Components'
    },
    {
        path: '/warehouses',
        exact: true,
        component: Warehouses,
        name: 'Warehouses'
    },
    {
        path: '/error-404',
        exact: true,
        component: Error404,
        name: 'Error 404'
    },
];