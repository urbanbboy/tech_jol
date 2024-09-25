import { ThemeProvider } from "@mui/material/styles"
import { FC, PropsWithChildren } from "react"
import { theme } from "../config/theme"

export const MuiThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    return (
        <ThemeProvider theme={theme} >
            { children }
        </ThemeProvider>
    )
}
