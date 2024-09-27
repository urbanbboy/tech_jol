import { Route, Routes } from "react-router-dom"
import { routeConfig } from "../config/routeConfig"
import { ReactNode, Suspense } from "react"
import { PageLoader } from "@/shared/ui/PageLoader"
import { PrivateRoute } from "./PrivateRoute"
import { Header } from "@/widgets/Header"
import { Footer } from "@/widgets/Footer"
import { Container } from "@mui/material"

export const Routing = () => {
    const routeElement = (element: ReactNode) => {
        return <Suspense fallback={<PageLoader />} >{element}</Suspense>
    }

    const withLayout = (
        element: ReactNode,
        layout: boolean | 'footer' | 'header'
    ) => {
        switch (layout) {
        case true:
            return (
                <>
                    <Header />
                    <Container>
                        {element}
                    </Container>
                    <Footer />
                </>
            )
        case 'header':
            return (
                <>
                    <Header />
                    <Container>
                        {element}
                    </Container>
                </>
            )
        case 'footer':
            return (
                <>
                    <Container>
                        {element}
                    </Container>
                    <Footer />
                </>
            )
        }
    }

    return (
        <Routes>
            {routeConfig.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={
                        route.isPrivate ? (
                            <PrivateRoute>
                                {withLayout(routeElement(route.element), route.layout)}
                            </PrivateRoute>
                        ) : (
                            withLayout(routeElement(route.element), route.layout)
                        )
                    }
                />
            ))}
        </Routes>
    )
}