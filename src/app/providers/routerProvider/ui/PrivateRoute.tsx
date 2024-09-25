import { FC, PropsWithChildren } from "react"

export const PrivateRoute: FC<PropsWithChildren> = (props) => {
    const { children } = props
    
    return (
        <div>
            {children}
        </div>
    )
}
