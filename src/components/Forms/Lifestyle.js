import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography  } from '@material-ui/core';
// import CustomInput from '../../components/CustomInput/CustomInput';
import Checkbox from '@material-ui/core/Checkbox';
import { useForm, Controller } from "react-hook-form";

import Button from '../../components/CustomButtons/Button';
import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import CardIcon from '../../components/Card/CardIcon';
import CardBody from '../../components/Card/CardBody';
import CardFooter from '../../components/Card/CardFooter';
import { Page } from 'components';
import styles from "../../assets/jss/material-dashboard-react/views/DoctorBio";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(styles);

const Vitals = () => {
    const classes = useStyles();

    const { handleSubmit, errors, control, watch } = useForm();

	const onSubmit = data => {
		// alert(JSON.stringify(data));
	};


    const alcohol = watch('alcohol');
    const tobacco = watch('tobacco');
    const sleep_pattern = watch('sleep_pattern');
  
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
                            <h4 className={classes.cardTitleWhite}>Lifestyle</h4>
                        </CardHeader>
                        <CardBody>
                        <form onSubmit={handleSubmit(onSubmit)}> 
                                 <Grid container spacing={2}>
                                    <Grid item xs={12} sm={1} md={1} >
                                    <Controller control={control} as={<Checkbox />}
                                        name="alcohol"
                                        defaultValue={false}
                                    />
                                    </Grid>

                                    <Grid item xs={12} sm={1} md={1} >
                                        <Typography style={{ fontWeight: 500, marginTop: '23px' }} variant="body2">
                                        Alcohol :
                                    </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={1} md={1} >
                                    <TextField
                                        id="alcohol_current_status"
                                        label="Current Status"
                                       
                                        value="Quit"
                                         inputProps={{
                                            	readOnly: true,
                                            }}
                                        fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={1} md={1} >
                                    <TextField
                                        id="alcohol_frequency"
                                        name="alcohol_frequency"
                                        label="Frequency"
                                        value="Daily"
                                        inputProps={{
                                            readOnly: true,
                                        }}
                                        fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={1} md={1} >
                                    <TextField
                                        id="alcohol_quantity"
                                        name="alcohol_quantity"
                                        label="Quantity"
                                        value="10"
                                        inputProps={{
                                            readOnly: true,
                                        }}
                                        fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={2} md={2} >
                                    <TextField
                                        id="alcohol_start_date"
                                        name="alcohol_start_date"
                                        label="Start Date"
                                        value="10/06/2020"
                                        inputProps={{
                                            readOnly: true,
                                        }}
                                        fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={2} md={2} >
                                    <TextField
                                        id="alcohol_end_date"
                                        name="alcohol_end_date"
                                        label="Start Date"
                                        value="10/06/2020"
                                        inputProps={{
                                            readOnly: true,
                                        }}
                                        fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3} >
                                    {alcohol && (
                                    <Controller
                                    as={<TextField />}
                                    error={Boolean(errors.alcohol_error)}
                                    name="alcohol_error"
                                    rules={{ required: "Please Fill the Error" }}
                                    control={control}
                                    defaultValue=""
                                    label="Error Marked"
                                    type="text"
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                    helperText={errors.alcohol_error && errors.alcohol_error.message}
                                    fullWidth
                                />
                                    )}
                                    </Grid>
                                    <Grid item xs={12} sm={1} md={1} >
                                    <Controller control={control} as={<Checkbox />}
                                        name="tobacco"
                                        defaultValue={false}
                                    />
                                    </Grid>

                                    <Grid item xs={12} sm={1} md={1} >
                                        <Typography style={{ fontWeight: 500, marginTop: '23px' }} variant="body2">
                                        Tobacco :
                                    </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={1} md={1} >
                                    <TextField
                                        id="tobacco_current_status"
                                        label="Current Status"
                                       
                                        value="Quit"
                                         inputProps={{
                                            	readOnly: true,
                                            }}
                                        fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={1} md={1} >
                                    <TextField
                                        id="tobacco_frequency"
                                        name="tobacco_frequency"
                                        label="Frequency"
                                        value="Daily"
                                        inputProps={{
                                            readOnly: true,
                                        }}
                                        fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={1} md={1} >
                                    <TextField
                                        id="tobacco_quantity"
                                        name="tobacco_quantity"
                                        label="Quantity"
                                        value="10"
                                        inputProps={{
                                            readOnly: true,
                                        }}
                                        fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={2} md={2} >
                                    <TextField
                                        id="tobacco_start_date"
                                        name="tobacco_start_date"
                                        label="Start Date"
                                        value="10/06/2020"
                                        inputProps={{
                                            readOnly: true,
                                        }}
                                        fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={2} md={2} >
                                    <TextField
                                        id="tobacco_end_date"
                                        name="tobacco_end_date"
                                        label="Start Date"
                                        value="10/06/2020"
                                        inputProps={{
                                            readOnly: true,
                                        }}
                                        fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3} >
                                    {tobacco && (
                                    <Controller
                                    as={<TextField />}
                                    error={Boolean(errors.tobacco_error)}
                                    name="tobacco_error"
                                    rules={{ required: "Please Fill the Error" }}
                                    control={control}
                                    defaultValue=""
                                    label="Error Marked"
                                    type="text"
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                    helperText={errors.tobacco_error && errors.tobacco_error.message}
                                    fullWidth
                                />
                                    )}
                                    </Grid>
                                    <Grid item xs={12} sm={1} md={1} >
                                    <Controller control={control} as={<Checkbox />}
                                        name="sleep_pattern"
                                        defaultValue={false}
                                    />
                                    </Grid>

                                    <Grid item xs={12} sm={1} md={1} >
                                        <Typography style={{ fontWeight: 500, marginTop: '23px' }} variant="body2">
                                        Sleep Pattern :
                                    </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={1} md={1} >
                                    <TextField
                                        id="sleep_pattern_current_status"
                                        label="Current Status"
                                       
                                        value="Quit"
                                         inputProps={{
                                            	readOnly: true,
                                            }}
                                        fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={1} md={1} >
                                    <TextField
                                        id="sleep_pattern_frequency"
                                        name="sleep_pattern_frequency"
                                        label="Frequency"
                                        value="Daily"
                                        inputProps={{
                                            readOnly: true,
                                        }}
                                        fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={1} md={1} >
                                    <TextField
                                        id="sleep_pattern_quantity"
                                        name="sleep_pattern_quantity"
                                        label="Quantity"
                                        value="10"
                                        inputProps={{
                                            readOnly: true,
                                        }}
                                        fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={2} md={2} >
                                    <TextField
                                        id="sleep_pattern_start_date"
                                        name="sleep_pattern_start_date"
                                        label="Start Date"
                                        value="10/06/2020"
                                        inputProps={{
                                            readOnly: true,
                                        }}
                                        fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={2} md={2} >
                                    <TextField
                                        id="sleep_pattern_end_date"
                                        name="sleep_pattern_end_date"
                                        label="Start Date"
                                        value="10/06/2020"
                                        inputProps={{
                                            readOnly: true,
                                        }}
                                        fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3} >
                                    {sleep_pattern && (
                                    <Controller
                                    as={<TextField />}
                                    error={Boolean(errors.sleep_pattern_error)}
                                    name="sleep_pattern_error"
                                    rules={{ required: "Please Fill the Error" }}
                                    control={control}
                                    defaultValue=""
                                    label="Error Marked"
                                    type="text"
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                    helperText={errors.sleep_pattern_error && errors.sleep_pattern_error.message}
                                    fullWidth
                                />
                                    )}
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} >
										<CardFooter style={{ float: 'right' }}>
											<Button type="submit" >Submit</Button>
										</CardFooter>
									</Grid>
                                    
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
