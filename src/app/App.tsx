import { Box } from "@mui/material"
import { Routing } from "./providers/routerProvider"

function App() {

    return (
        <>
            <Box sx={{ bgcolor: '#666', height: '100dvh' }}>
                <Routing />
            </Box>
        </>
    )
}

export default App
