import Table from "./components/Table";
import {ComponentViewer} from "./views/ComponentViewer/ComponentViewer";

export const routes = [
    {
        path: '/orders',
        exact: true,
        component: Table,
    },
    {
        path: '/component-viewer',
        exact: true,
        component: ComponentViewer,
    },
];