import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField } from '@material-ui/core';
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

const MedicalProblem = () => {
    const classes = useStyles();

    const { handleSubmit, errors, control, watch } = useForm();

    const onSubmit = data => {
        // alert(JSON.stringify(data));
    };


    const chief_complaint = watch('chief_complaint');
    const duration_and_type = watch('duration_and_type');
    const progression = watch('progression');
    const occurence = watch('occurence');
    const aggravating_factor = watch('aggravating_factor');
    const relieving_factor = watch('relieving_factor');
    const current_status = watch('current_status');
    const start_and_end_date = watch('start_and_end_date');
    const associated_symtom = watch('associated_symtom')

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
                            <h4 className={classes.cardTitleWhite}>Medical Problem</h4>
                        </CardHeader>
                        <CardBody>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={2} md={2} >
                                        <Controller control={control} as={<Checkbox />}
                                            name="chief_complaint"
                                            defaultValue={false}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3} >
                                        <TextField
                                            required
                                            inputProps={{
                                                readOnly: true,
                                            }}
                                            id="chief_complaint"
                                            name="chief_complaint"
                                            label="Chief Complaint"
                                            value='Fever'
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3} >
                                        <TextField
                                            required
                                            inputProps={{
                                                readOnly: true,
                                            }}
                                            id="symtom_trans"
                                            name="symtom_trans"
                                            label="Hindi Translation"
                                            value="बुखार"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={4} >
                                        {chief_complaint && (
                                            <Controller
                                                as={<TextField />}
                                                error={Boolean(errors.chief_complaint_error)}
                                                name="chief_complaint_error"
                                                rules={{ required: "Please Fill the Error" }}
                                                control={control}
                                                defaultValue=""
                                                label="Error Marked"
                                                type="text"
                                                helperText={errors.chief_complaint_error && errors.chief_complaint_error.message}
                                                fullWidth
                                                variant="outlined"
                                                multiline
                                                rows={4}
                                            />
                                        )}
                                    </Grid>

                                    <Grid item xs={12} sm={2} md={2} >
                                        <Controller control={control} as={<Checkbox />}
                                            name="duration_and_type"
                                            defaultValue={false}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3} >
                                        <TextField
                                            required
                                            inputProps={{
                                                readOnly: true,
                                            }}
                                            id="duration"
                                            name="duration"
                                            label="Duration"
                                            value='1'
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3} >
                                        <TextField
                                            id="duration_type"
                                            name="duration_type"
                                            label="Duration Type"
                                            value="Hours"

                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={4} >
                                        {duration_and_type && (
                                            <Controller
                                                as={<TextField />}
                                                error={Boolean(errors.duration_and_type_error)}
                                                name="duration_and_type_error"
                                                rules={{ required: "Please Fill the Error" }}
                                                control={control}
                                                defaultValue=""
                                                label="Error Marked"
                                                type="text"
                                                helperText={errors.duration_and_type_error && errors.duration_and_type_error.message}
                                                fullWidth
                                                variant="outlined"
                                                multiline
                                                rows={4}
                                            />
                                        )}
                                    </Grid>

                                    <Grid item xs={12} sm={2} md={2} >
                                        <Controller control={control} as={<Checkbox />}
                                            name="progression"
                                            defaultValue={false}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3} >
                                        <TextField
                                            required
                                            inputProps={{
                                                readOnly: true,
                                            }}
                                            id="progression"
                                            name="progression"
                                            label="Progression"
                                            value='Increasing'
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3} >
                                        <TextField
                                            required
                                            inputProps={{
                                                readOnly: true,
                                            }}
                                            id="symtom_trans"
                                            name="symtom_trans"
                                            label="Hindi Translation"
                                            value="बढ़ना"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={4} >
                                        {progression && (
                                            <Controller
                                                as={<TextField />}
                                                error={Boolean(errors.progression_error)}
                                                name="progression_error"
                                                rules={{ required: "Please Fill the Error" }}
                                                control={control}
                                                defaultValue=""
                                                label="Error Marked"
                                                type="text"
                                                helperText={errors.progression_error && errors.progression_error.message}
                                                fullWidth
                                                variant="outlined"
                                                multiline
                                                rows={4}
                                            />
                                        )}
                                    </Grid>

                                    <Grid item xs={12} sm={2} md={2} >
                                        <Controller control={control} as={<Checkbox />}
                                            name="occurence"
                                            defaultValue={false}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3} >
                                        <TextField
                                            required
                                            inputProps={{
                                                readOnly: true,
                                            }}
                                            id="occurence"

                                            name="occurence"
                                            label="Occurence"
                                            value='First Time'
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3} >
                                        <TextField
                                            required
                                            inputProps={{
                                                readOnly: true,
                                            }}
                                            id="occurence_trans"
                                            name="occurence_trans"
                                            label="Hindi Translation"
                                            value="बढ़ना"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={4} >
                                        {occurence && (
                                            <Controller
                                                as={<TextField />}
                                                error={Boolean(errors.occurence_error)}
                                                name="occurence_error"
                                                rules={{ required: "Please Fill the Error" }}
                                                control={control}
                                                defaultValue=""
                                                label="Error Marked"
                                                type="text"
                                                helperText={errors.occurence_error && errors.occurence_error.message}
                                                fullWidth
                                                variant="outlined"
                                                multiline
                                                rows={4}
                                            />
                                        )}
                                    </Grid>

                                    <Grid item xs={12} sm={2} md={2} >
                                        <Controller control={control} as={<Checkbox />}
                                            name="aggravating_factor"
                                            defaultValue={false}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3} >
                                        <TextField
                                            required
                                            inputProps={{
                                                readOnly: true,
                                            }}
                                            id="aggravating_factor"

                                            name="aggravating_factor"
                                            label="Aggravating Factor"
                                            value='Walking'
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3} >
                                        <TextField
                                            required
                                            inputProps={{
                                                readOnly: true,
                                            }}
                                            id="aggravating_factor_trans"
                                            name="aggravating_factor_trans"
                                            label="Hindi Translation"
                                            value="बढ़ना"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={4} >
                                        {aggravating_factor && (
                                            <Controller
                                                as={<TextField />}
                                                error={Boolean(errors.aggravating_factor_error)}
                                                name="aggravating_factor_error"
                                                rules={{ required: "Please Fill the Error" }}
                                                control={control}
                                                defaultValue=""
                                                label="Error Marked"
                                                type="text"
                                                helperText={errors.aggravating_factor_error && errors.aggravating_factor_error.message}
                                                fullWidth
                                                variant="outlined"
                                                multiline
                                                rows={4}
                                            />
                                        )}
                                    </Grid>
                                    <Grid item xs={12} sm={2} md={2} >
                                        <Controller control={control} as={<Checkbox />}
                                            name="relieving_factor"
                                            defaultValue={false}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3} >
                                        <TextField
                                            required
                                            inputProps={{
                                                readOnly: true,
                                            }}
                                            id="relieving_factor"

                                            name="relieving_factor"
                                            label="Relieving Factor"
                                            value='Walking'
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3} >
                                        <TextField
                                            required
                                            inputProps={{
                                                readOnly: true,
                                            }}
                                            id="relieving_factor_trans"
                                            name="relieving_factor_trans"
                                            label="Hindi Translation"
                                            value="बढ़ना"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={4} >
                                        {relieving_factor && (
                                            <Controller
                                                as={<TextField />}
                                                error={Boolean(errors.relieving_factor_error)}
                                                name="relieving_factor_error"
                                                rules={{ required: "Please Fill the Error" }}
                                                control={control}
                                                defaultValue=""
                                                label="Error Marked"
                                                type="text"
                                                helperText={errors.relieving_factor_error && errors.relieving_factor_error.message}
                                                fullWidth
                                                variant="outlined"
                                                multiline
                                                rows={4}
                                            />
                                        )}
                                    </Grid>

                                    <Grid item xs={12} sm={2} md={2} >
                                        <Controller control={control} as={<Checkbox />}
                                            name="current_status"
                                            defaultValue={false}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3} >
                                        <TextField
                                            required
                                            inputProps={{
                                                readOnly: true,
                                            }}
                                            id="current_status"

                                            name="current_status"
                                            label="Current Status"
                                            value='Resolved'
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3} >
                                        <TextField
                                            required
                                            inputProps={{
                                                readOnly: true,
                                            }}
                                            id="current_status_trans"
                                            name="current_status_trans"
                                            label="Hindi Translation"
                                            value="बढ़ना"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={4} >
                                        {current_status && (
                                            <Controller
                                                as={<TextField />}
                                                error={Boolean(errors.current_status_error)}
                                                name="current_status_error"
                                                rules={{ required: "Please Fill the Error" }}
                                                control={control}
                                                defaultValue=""
                                                label="Error Marked"
                                                type="text"
                                                helperText={errors.current_status_error && errors.current_status_error.message}
                                                fullWidth
                                                variant="outlined"
                                                multiline
                                                rows={4}
                                            />
                                        )}
                                    </Grid>

                                    <Grid item xs={12} sm={2} md={2} >
                                        <Controller control={control} as={<Checkbox />}
                                            name="start_and_end_date"
                                            defaultValue={false}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3} >
                                        <TextField
                                            required
                                            inputProps={{
                                                readOnly: true,
                                            }}
                                            id="start_date"
                                            name="start_date"
                                            label="Start Date"
                                            value='26/06/2020'
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3} >
                                        <TextField
                                            required
                                            inputProps={{
                                                readOnly: true,
                                            }}
                                            id="end_date"
                                            name="end_date"
                                            label="End Date"
                                            value="25/08/2020"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={4} >
                                        {start_and_end_date && (
                                            <Controller
                                                as={<TextField />}
                                                error={Boolean(errors.date_error)}
                                                name="date_error"
                                                rules={{ required: "Please Fill the Error" }}
                                                control={control}
                                                defaultValue=""
                                                label="Error Marked"
                                                type="text"
                                                helperText={errors.date_error && errors.date_error.message}
                                                fullWidth
                                                variant="outlined"
                                                multiline
                                                rows={4}
                                            />
                                        )}
                                    </Grid>

                                    <Grid item xs={12} sm={2} md={2} >
                                        <Controller control={control} as={<Checkbox />}
                                            name="associated_symtom"
                                            defaultValue={false}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3} >
                                        <TextField
                                            required
                                            inputProps={{
                                                readOnly: true,
                                            }}
                                            id="associated_symtom"
                                            name="associated_symtom"
                                            label="Associated Symtom"
                                            value='Fever'
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3} >
                                        <TextField
                                            required
                                            inputProps={{
                                                readOnly: true,
                                            }}
                                            id="associated_symtoms_trans"
                                            name="associated_symtoms_trans"
                                            label="Hindi Translation"
                                            value=""
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={4} >
                                        {associated_symtom && (
                                            <Controller
                                                as={<TextField />}
                                                error={Boolean(errors.associated_symtom_error)}
                                                name="associated_symtom_error"
                                                rules={{ required: "Please Fill the Error" }}
                                                control={control}
                                                defaultValue=""
                                                label="Error Marked"
                                                type="text"
                                                helperText={errors.associated_symtom_error && errors.associated_symtom_error.message}
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

export default MedicalProblem;
