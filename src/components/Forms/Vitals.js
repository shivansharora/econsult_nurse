import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, TextField } from '@material-ui/core';
import CustomInput from '../../components/CustomInput/CustomInput';
import Checkbox from '@material-ui/core/Checkbox';
import { useForm, Controller } from "react-hook-form";

import Button from '../../components/CustomButtons/Button';
// import { Link as RouterLink } from 'react-router-dom';
// import clsx from 'clsx';
import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import CardIcon from '../../components/Card/CardIcon';
import CardBody from '../../components/Card/CardBody';
import CardFooter from '../../components/Card/CardFooter';
// import CardAvatar from '../../components/Card/CardAvatar';
import { Page } from 'components';
import styles from "../../assets/jss/material-dashboard-react/views/DoctorBio";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles(styles);

const Vitals = () => {
    const classes = useStyles();

    const { handleSubmit, errors, control, watch } = useForm();

    const onSubmit = data => {
        // alert(JSON.stringify(data));
    };


    const weight = watch('weight');
    const height = watch('height');
    const bp = watch('bp');
    const pulse = watch('pulse');
    const respiration = watch('respiration');
    const temperature = watch('temperature');
    const temp_location = watch('temp_location');
    const oxygen_saturation = watch('oxygen_saturation');
    const head_circumference = watch('head_circumference');
    const waist_circumference = watch('waist_circumference');
    const bmi_check = watch('bmi_check');
    const bmi_status_check = watch('bmi_status_check');
    const other_notes = watch('other_notes');

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
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={1} md={1} >
                                        <Controller control={control} as={<Checkbox />}
                                            name="weight"
                                            defaultValue={false}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={2} md={2} >
                                        <Typography style={{ fontWeight: 500, marginTop: '23px' }} variant="body2">
                                            Weight :
                                    </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3} >
                                        <TextField
                                            required
                                            inputProps={{
                                                readOnly: true,
                                            }}
                                            id="weight_in_kg"
                                            name="weight_in_kg"
                                            label="kg"
                                            value="50"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3} >
                                        <TextField
                                            required
                                            inputProps={{
                                                readOnly: true,
                                            }}
                                            id="weight_in_lbs"
                                            name="weight_in_lbs"
                                            label="lbs"
                                            value="110"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3} >
                                        {weight && (
                                            <Controller
                                                as={<TextField />}
                                                error={Boolean(errors.weight_error)}
                                                name="weight_error"
                                                rules={{ required: "Please Fill the Error" }}
                                                control={control}
                                                defaultValue=""
                                                label="Error Marked"
                                                type="text"
                                                helperText={errors.weight_error && errors.weight_error.message}
                                                fullWidth
                                                variant="outlined"
                                                multiline
                                                rows={4}
                                            />
                                        )}
                                    </Grid>

                                    <Grid item xs={12} sm={1} md={1} >
                                        <Controller control={control} as={<Checkbox />}
                                            name="height"
                                            defaultValue={false}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={2} md={2} >
                                        <Typography style={{ fontWeight: 500, marginTop: '23px' }} variant="body2">
                                            Height :
                                    </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3} >
                                        <TextField
                                            required
                                            inputProps={{
                                                readOnly: true,
                                            }}
                                            id="height_in_cm"
                                            name="height_in_cm"
                                            label="cm"
                                            value="50"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3} >
                                        <TextField
                                            required
                                            inputProps={{
                                                readOnly: true,
                                            }}
                                            id="height_in_in"
                                            name="height_in_in"
                                            label="in"
                                            value="110"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3} >
                                        {height && (
                                            <Controller
                                                as={<TextField />}
                                                error={Boolean(errors.height_error)}
                                                name="height_error"
                                                rules={{ required: "Please Fill the Error" }}
                                                control={control}
                                                defaultValue=""
                                                label="Error Marked"
                                                type="text"
                                                helperText={errors.height_error && errors.height_error.message}
                                                fullWidth
                                                variant="outlined"
                                                multiline
                                                rows={4}
                                            />
                                        )}
                                    </Grid>

                                    <Grid item xs={12} sm={1} md={1} >
                                        <Controller control={control} as={<Checkbox />}
                                            name="bp"
                                            defaultValue={false}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={2} md={2} >
                                        <Typography style={{ fontWeight: 500, marginTop: '23px' }} variant="body2">
                                            BP Systolic :
                                    </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={2} md={2} >
                                        <TextField
                                            required
                                            id="bp_systolic"
                                            name="bp_systolic"
                                            label="mmHg"
                                            value="80"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={2} md={2} >
                                        <Typography style={{ fontWeight: 500, marginTop: '30px', marginLeft: '32px' }} variant="body2">
                                            BP Diastolic :
                                </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={2} md={2} >
                                        <TextField
                                            required
                                            id="bp_diastolic"
                                            name="bp_diastolic"
                                            label="mmHg"
                                            value="120"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3} >
                                        {bp && (
                                            <Controller
                                                as={<TextField />}
                                                error={Boolean(errors.bp_error)}
                                                name="bp_error"
                                                rules={{ required: "Please Fill the Error" }}
                                                control={control}
                                                defaultValue=""
                                                label="Error Marked"
                                                type="text"
                                                helperText={errors.bp_error && errors.bp_error.message}
                                                fullWidth
                                                variant="outlined"
                                                multiline
                                                rows={4}
                                            />
                                        )}
                                    </Grid>
                                    <Grid item xs={12} sm={1} md={1} >
                                        <Controller control={control} as={<Checkbox />}
                                            name="pulse"
                                            defaultValue={false}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={2} md={2} >
                                        <Typography style={{ fontWeight: 500, marginTop: '23px' }} variant="body2">
                                            Pulse :
                                </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={4} >
                                        <TextField
                                            required
                                            id="pulse"
                                            name="pulse"
                                            label="per min"
                                            value="50"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={5} md={5} >
                                        {pulse && (
                                            <Controller
                                                as={<TextField />}
                                                error={Boolean(errors.pulse_error)}
                                                name="pulse_error"
                                                rules={{ required: "Please Fill the Error" }}
                                                control={control}
                                                defaultValue=""
                                                label="Error Marked"
                                                type="text"
                                                helperText={errors.pulse_error && errors.pulse_error.message}
                                                fullWidth
                                                variant="outlined"
                                                multiline
                                                rows={4}
                                            />
                                        )}
                                    </Grid>
                                    <Grid item xs={12} sm={1} md={1} >
                                        <Controller control={control} as={<Checkbox />}
                                            name="respiration"
                                            defaultValue={false}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={2} md={2} >
                                        <Typography style={{ fontWeight: 500, marginTop: '23px' }} variant="body2">
                                        Respiration :
                                </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={4} >
                                        <TextField
                                            required
                                            id="respiration"
                                            name="respiration"
                                            label="per min"
                                            value="50"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={5} md={5} >
                                        {respiration && (
                                            <Controller
                                                as={<TextField />}
                                                error={Boolean(errors.respiration_error)}
                                                name="respiration_error"
                                                rules={{ required: "Please Fill the Error" }}
                                                control={control}
                                                defaultValue=""
                                                label="Error Marked"
                                                type="text"
                                                helperText={errors.respiration_error && errors.respiration_error.message}
                                                fullWidth
                                                variant="outlined"
                                                multiline
                                                rows={4}
                                            />
                                        )}
                                    </Grid>
                                     
                                  
                                    <Grid item xs={12} sm={1} md={1} >
                                        <Controller control={control} as={<Checkbox />}
                                            name="temperature"
                                            defaultValue={false}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={2} md={2} >
                                        <Typography style={{ fontWeight: 500, marginTop: '23px' }} variant="body2">
                                            Temperature :
                                    </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3} >
                                        <TextField
                                            required
                                            inputProps={{
                                                readOnly: true,
                                            }}
                                            id="temperature_in_f"
                                            name="temperature_in_f"
                                            label="F"
                                            value="50"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3} >
                                        <TextField
                                            required
                                            inputProps={{
                                                readOnly: true,
                                            }}
                                            id="temperature_in_c"
                                            name="temperature_in_c"
                                            label="C"
                                            value="110"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3} >
                                        {temperature && (
                                            <Controller
                                                as={<TextField />}
                                                error={Boolean(errors.temperature_error)}
                                                name="temperature_error"
                                                rules={{ required: "Please Fill the Error" }}
                                                control={control}
                                                defaultValue=""
                                                label="Error Marked"
                                                type="text"
                                                helperText={errors.temperature_error && errors.temperature_error.message}
                                                fullWidth
                                                variant="outlined"
                                                multiline
                                                rows={4}
                                            />
                                        )}
                                    </Grid>
                                    <Grid item xs={12} sm={1} md={1} >
                                        <Controller control={control} as={<Checkbox />}
                                            name="temp_location"
                                            defaultValue={false}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={2} md={2} >
                                        <Typography style={{ fontWeight: 500, marginTop: '12px' }} variant="body2">
                                        Temp Location :
                                </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={4} >
                                    <TextField
                                        id="temp_loc"
                                        name="temp_loc"
                                        value="Oral"
                                        inputProps={{
                                            readOnly: true,
                                        }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={5} md={5} >
                                        {temp_location && (
                                            <Controller
                                                as={<TextField />}
                                                error={Boolean(errors.temp_loc_error)}
                                                name="temp_loc_error"
                                                rules={{ required: "Please Fill the Error" }}
                                                control={control}
                                                defaultValue=""
                                                label="Error Marked"
                                                type="text"
                                                helperText={errors.temp_loc_error && errors.temp_loc_error.message}
                                                fullWidth
                                                variant="outlined"
                                                multiline
                                                rows={4}
                                            />
                                        )}
                                    </Grid>
                                    <Grid item xs={12} sm={1} md={1} >
                                        <Controller control={control} as={<Checkbox />}
                                            name="oxygen_saturation"
                                            defaultValue={false}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={2} md={2} >
                                        <Typography style={{ fontWeight: 500, marginTop: '12px' }} variant="body2">
                                        Oxygen Saturation  :
                                </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={4} >
                                    <TextField
                                        required
                                        id="oxygen_sat"
                                        name="oxygen_sat"
                                        label="%"
                                        value="20"
                                        inputProps={{
                                            readOnly: true,
                                        }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={5} md={5} >
                                        {oxygen_saturation && (
                                            <Controller
                                                as={<TextField />}
                                                error={Boolean(errors.oxygen_sat_error)}
                                                name="oxygen_sat_error"
                                                rules={{ required: "Please Fill the Error" }}
                                                control={control}
                                                defaultValue=""
                                                label="Error Marked"
                                                type="text"
                                                helperText={errors.oxygen_sat_error && errors.oxygen_sat_error.message}
                                                fullWidth
                                                variant="outlined"
                                                multiline
                                                rows={4}
                                            />
                                        )}
                                    </Grid>
                                      
 
                                    <Grid item xs={12} sm={1} md={1} >
                                        <Controller control={control} as={<Checkbox />}
                                            name="head_circumference"
                                            defaultValue={false}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={2} md={2} >
                                        <Typography style={{ fontWeight: 500, marginTop: '23px' }} variant="body2">
                                            Head Circumference 
                                    </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3} >
                                        <TextField
                                            required
                                            inputProps={{
                                                readOnly: true,
                                            }}
                                            id="head_circum_in_cm"
                                            name="head_circum_in_cm"
                                            label="cm"
                                            value="50"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3} >
                                        <CustomInput
                                            required
                                            inputProps={{
                                                readOnly: true,
                                            }}
                                            id="head_circum_in_in"
                                            name="head_circum_in_in"
                                            label="in"
                                            value="110"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3} >
                                        {head_circumference && (
                                            <Controller
                                                as={<TextField />}
                                                error={Boolean(errors.head_circum_error)}
                                                name="head_circum_error"
                                                rules={{ required: "Please Fill the Error" }}
                                                control={control}
                                                defaultValue=""
                                                label="Error Marked"
                                                type="text"
                                                helperText={errors.head_circum_error && errors.head_circum_error.message}
                                                fullWidth
                                                variant="outlined"
                                                multiline
                                                rows={4}
                                            />
                                        )}
                                    </Grid>

                                    <Grid item xs={12} sm={1} md={1} >
                                        <Controller control={control} as={<Checkbox />}
                                            name="waist_circumference"
                                            defaultValue={false}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={2} md={2} >
                                        <Typography style={{ fontWeight: 500, marginTop: '23px' }} variant="body2">
                                            Waist Circumference 
                                    </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3} >
                                        <TextField
                                            required
                                            inputProps={{
                                                readOnly: true,
                                            }}
                                            id="waist_circum_in_cm"
                                            name="waist_circum_in_cm"
                                            label="cm"
                                            value="50"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3} >
                                        <TextField
                                            required
                                            inputProps={{
                                                readOnly: true,
                                            }}
                                            id="waist_circum_in_in"
                                            name="waist_circum_in_in"
                                            label="in"
                                            value="110"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3} >
                                        {waist_circumference && (
                                            <Controller
                                                as={<TextField />}
                                                error={Boolean(errors.waist_circum_error)}
                                                name="waist_circum_error"
                                                rules={{ required: "Please Fill the Error" }}
                                                control={control}
                                                defaultValue=""
                                                label="Error Marked"
                                                type="text"
                                                helperText={errors.waist_circum_error && errors.waist_circum_error.message}
                                                fullWidth
                                                variant="outlined"
                                                multiline
                                                rows={4}
                                            />
                                        )}
                                    </Grid>
                                    <Grid item xs={12} sm={1} md={1} >
                                        <Controller control={control} as={<Checkbox />}
                                            name="bmi_check"
                                            defaultValue={false}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={2} md={2} >
                                        <Typography style={{ fontWeight: 500, marginTop: '12px' }} variant="body2">
                                        BMI :
                                </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={4} >
                                    <TextField
                                        id="bmi"
                                        name="bmi"
                                        label="kg/m^2"
                                        value="129.1"
                                        inputProps={{
                                            readOnly: true,
                                        }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={5} md={5} >
                                        {bmi_check && (
                                            <Controller
                                                as={<TextField />}
                                                error={Boolean(errors.bmi_error)}
                                                name="bmi_error"
                                                rules={{ required: "Please Fill the Error" }}
                                                control={control}
                                                defaultValue=""
                                                label="Error Marked"
                                                type="text"
                                                helperText={errors.bmi_error && errors.bmi_error.message}
                                                fullWidth
                                                variant="outlined"
                                                multiline
                                                rows={4}
                                            />
                                        )}
                                    </Grid>
                                    <Grid item xs={12} sm={1} md={1} >
                                        <Controller control={control} as={<Checkbox />}
                                            name="bmi_status_check"
                                            defaultValue={false}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={2} md={2} >
                                        <Typography style={{ fontWeight: 500, marginTop: '12px' }} variant="body2">
                                        BMI Status:  :
                                    </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={4} >
                                    <TextField
                                        required
                                        id="bmi_status"
                                        name="bmi_status"
                                        label="Type"
                                        value=""
                                        inputProps={{
                                            readOnly: true,
                                        }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={5} md={5} >
                                        {bmi_status_check && (
                                            <Controller
                                                as={<TextField />}
                                                error={Boolean(errors.bmi_status_error)}
                                                name="bmi_status_error"
                                                rules={{ required: "Please Fill the Error" }}
                                                control={control}
                                                defaultValue=""
                                                label="Error Marked"
                                                type="text"
                                                helperText={errors.bmi_status_error && errors.bmi_status_error.message}
                                                fullWidth
                                                variant="outlined"
                                                multiline
                                                rows={4}
                                            />
                                        )}
                                    </Grid>
                                    <Grid item xs={12} sm={1} md={1} >
                                        <Controller control={control} as={<Checkbox />}
                                            name="other_notes"
                                            defaultValue={false}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={2} md={2} >
                                        <Typography style={{ fontWeight: 500, marginTop: '23px' }} variant="body2">
                                            Other Notes :
                                    </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={5} md={5} >
                                        <TextField
                                            required
                                            inputProps={{
                                                readOnly: true,
                                            }}
                                            id="other_notes"
                                            name="other_notes"
                                            label="Other Notes"
                                            value="Correct"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={4} >
                                        {other_notes && (
                                            <Controller
                                                as={<TextField />}
                                                error={Boolean(errors.other_notes_error)}
                                                name="other_notes_error"
                                                rules={{ required: "Please Fill the Error" }}
                                                control={control}
                                                defaultValue=""
                                                label="Error Marked"
                                                type="text"
                                                helperText={errors.other_notes_error && errors.other_notes_error.message}
                                                fullWidth
                                                variant="outlined"
                                                multiline
                                                rows={4}
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
