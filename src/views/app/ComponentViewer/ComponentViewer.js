import React from "react";
import Container from "@mui/material/Container";
import {makeStyles} from "@mui/styles";
import Grid from "@mui/material/Grid";
import Button from "../../../StyledComponents/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CheckBox from "../../../StyledComponents/Checkbox";
import {Page} from "../../../components/Page/Page";

const styles = makeStyles({
    container: {
        // border: '1px solid grey',
        padding: 5,
        '&>*': {
            marginBottom: 10
        }
    }
});
export const ComponentViewer = (props) => {
    const classes = styles();
    return (
        <Page>
            <Container maxWidth={'xl'} className={classes.container}>
                <Typography variant={'h6'}>Components Viewer</Typography>
                <Card>
                    <CardHeader title={'Buttons'} component={Typography}/>
                    <CardContent>
                        <Grid container direction={'row'}
                              spacing={1} justifyContent={'space-between'} alignItems={'center'}>
                            <Grid item xs>
                                <Button size={'small'}>Small</Button>
                            </Grid>
                            <Grid item xs>
                                <Button size={'small'} backgroundColor={'#ff6161'} borderRadius={5}>Small
                                    Rounded</Button>
                            </Grid>
                            <Grid item xs>
                                <Button size={'medium'}>Medium </Button>
                            </Grid>
                            <Grid item xs>
                                <Button size={'medium'} backgroundColor={'#ff6161'} borderRadius={5}>Medium
                                    Rounded</Button>
                            </Grid>
                            <Grid item xs>
                                <Button size={'large'}>Large </Button>
                            </Grid>
                            <Grid item xs>
                                <Button size={'large'} backgroundColor={'#ff6161'} borderRadius={5}>Large
                                    Rounded</Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader title={'Check Boxes'} component={Typography}/>
                    <CardContent>
                        <Grid container direction={'row'}
                              spacing={1} justifyContent={'space-between'} alignItems={'center'}>
                            <Grid item xs>
                                <CheckBox size={'10'} color={'#ff0000'} checked={true}/>
                            </Grid>
                            <Grid item xs>
                                <CheckBox size={'20'} color={'#add937'} checked={false}/>
                            </Grid>
                            <Grid item xs>
                                <CheckBox size={'30'} color={'#3078f1'} checked={true}/>
                            </Grid>
                            <Grid item xs>
                                <CheckBox size={'40'} color={'#fca72e'} checked={false}/>
                            </Grid>
                            <Grid item xs>
                                <CheckBox size={'50'} color={'#070707'} checked={true}/>
                            </Grid>
                            <Grid item xs>
                                <CheckBox size={'60'} color={'#828282'} checked={false}/>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
        </Page>
    );
}