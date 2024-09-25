import { MainPage } from "@/pages/MainPage";
import { ReactNode } from "react";

export enum RouteNames {
    MAIN_PAGE = '/',
    PROFILE_PAGE = '/profile',
    NOT_FOUND_PAGE = '*'
}

export interface Route {
    path: string;
    element: ReactNode;
    isPrivate: boolean;
    layout: boolean | 'footer' | 'header';
    role?: string[];
}

export const routeConfig: Route[] = [
    {
        path: RouteNames.MAIN_PAGE,
        element: <MainPage />,
        isPrivate: false,
        layout: true,
    },
    {
        path: RouteNames.PROFILE_PAGE,
        element: <div>ProfilePage</div>,
        isPrivate: true,
        layout: 'header',
    }
]