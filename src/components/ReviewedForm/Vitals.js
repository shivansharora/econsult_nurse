import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from '@material-ui/core';
import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import CardIcon from '../../components/Card/CardIcon';
import CardBody from '../../components/Card/CardBody';
import { Page } from 'components';

import styles from "../../assets/jss/material-dashboard-react/views/DoctorBio";

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Review from '../Review/Review';


const useStyles = makeStyles(styles);

const Vitals = () => {
    const classes = useStyles();
    return (
        <Page
            className={classes.root}

        >
            <Grid container spacing={3}>

                <Grid item xs={12} sm={12} md={12} >
                    <Card style={{ marginLeft: '-1px', boxShadow: '0 2px 8px rgba(0,0,0,0.30), 0 10px 12px rgba(0,0,0,0.22)' }} >
                        <CardHeader style={{ width: '147px', padding: '4px' }} color="success" >
                            <CardIcon color="success">
                                <AccountCircleIcon />
                            </CardIcon>
                            <h4 className={classes.cardTitleWhite}>Vitals</h4>
                        </CardHeader>
                        <CardBody>
                            <form >
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6} md={6} >
                                        <div className={classes.stats}>
                                            <Typography className={classes.typo} variant="body2">Weight :</Typography>
                                            <br />
                                            <Typography className={classes.typoResult} variant="h6">
                                                <span style={{ margin: 8 }}>50 kg</span>
                                                <span>110.23 lbs</span>
                                            </Typography>

                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} >
                                        <div className={classes.stats}>
                                            <Typography className={classes.typo} variant="body2">Height :</Typography>
                                            <br />
                                            <Typography className={classes.typoResult} variant="h6">
                                                <span style={{ margin: 8 }}>20 cm</span>
                                                <span>7.87 in</span>
                                            </Typography>

                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} >
                                        <div className={classes.stats}>
                                            <Typography className={classes.typo} variant="body2">BP Systolic :</Typography>
                                            <br />
                                            <Typography className={classes.typoResult} variant="h6">
                                                120 mmHg
                                        </Typography>

                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} >
                                        <div className={classes.stats}>
                                            <Typography className={classes.typo} variant="body2">BP Diastolic :</Typography>
                                            <br />
                                            <Typography className={classes.typoResult} variant="h6">
                                                80 mmHg
                                        </Typography>

                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} >
                                        <div className={classes.stats}>
                                            <Typography className={classes.typo} variant="body2">Pulse :</Typography>
                                            <br />
                                            <Typography className={classes.typoResult} variant="h6">
                                                70 per min
                                        </Typography>

                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} >
                                        <div className={classes.stats}>
                                            <Typography className={classes.typo} variant="body2">Respiration :</Typography>
                                            <br />
                                            <Typography className={classes.typoResult} variant="h6">
                                                60 per min
                                        </Typography>

                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} >
                                        <div className={classes.stats}>
                                            <Typography className={classes.typo} variant="body2">Temperature :</Typography>
                                            <br />
                                            <Typography className={classes.typoResult} variant="h6">
                                                <span style={{ margin: 8 }}>102 F</span>
                                                <span>38.89 C</span>
                                            </Typography>

                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} >
                                        <div className={classes.stats}>
                                            <Typography className={classes.typo} variant="body2">Temp Location:</Typography>
                                            <br />
                                            <Typography className={classes.typoResult} variant="h6">
                                                Oral
                                        </Typography>

                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} >
                                        <div className={classes.stats}>
                                            <Typography className={classes.typo} variant="body2">Oxygen Saturation :</Typography>
                                            <br />
                                            <Typography className={classes.typoResult} variant="h6">
                                                50 %
                                        </Typography>

                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} >
                                        <div className={classes.stats}>
                                            <Typography className={classes.typo} variant="body2">Head Circumference :</Typography>
                                            <br />
                                            <Typography className={classes.typoResult} variant="h6">
                                                <span style={{ margin: 8 }}>102 cm</span>
                                                <span>40.16 in</span>
                                            </Typography>

                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} >
                                        <div className={classes.stats}>
                                            <Typography className={classes.typo} variant="body2">Waist Circumference </Typography>
                                            <br />
                                            <Typography className={classes.typoResult} variant="h6">
                                                <span style={{ margin: 8 }}>102 cm</span>
                                                <span>40.16 in</span>
                                            </Typography>

                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} >
                                        <div className={classes.stats}>
                                            <Typography className={classes.typo} variant="body2">Other Notes:</Typography>
                                            <br />
                                            <Typography className={classes.typoResult} variant="h6">
                                                Correct
                                        </Typography>

                                        </div>
                                    </Grid>
                                    <Review />
                                </Grid>
                            </form>
                        </CardBody>
                    </Card>
                </Grid>
            </Grid>
        </Page>
    );
};

export default Vitals;
