import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {Autocomplete, Button, TextField} from "@mui/material";

const top100Films: string[] = ["Star Wars", "Star Trek"]
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Button variant="contained">Ic do piči</Button>
        <Autocomplete
            disablePortal
            options={top100Films}
            sx={{width: 300}}
            renderInput={(params) => <TextField {...params} label="Movie"/>}
        />
        <App/>
    </StrictMode>,
)
