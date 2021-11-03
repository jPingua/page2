import {createTheme} from '@mui/material/styles';
import MuiTypography from "./overrides/MuiTypography";

const theme = createTheme({
    components: {
        MuiTypography,
    },
});
export default theme;