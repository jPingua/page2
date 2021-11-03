import {createTheme} from '@mui/material/styles';
import {MuiTypography} from "./overrides/MuiTypography";
import {MuiCheckbox} from "./overrides/MuiCheckbox";

const theme = createTheme({
    components: {
        MuiCheckbox,
        MuiTypography
    },
});
export default theme;