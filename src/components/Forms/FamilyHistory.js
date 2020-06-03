import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from '@material-ui/core';
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
// import FamilyHistory from 'components/ReviewedForm/FamilyHistory';

const useStyles = makeStyles(styles);

const FamilyHistory = () => {
	const classes = useStyles();
	const { handleSubmit, errors, control, watch } = useForm();

	const onSubmit = data => {
		// alert(JSON.stringify(data));
	};

	const father_disease = watch('father_disease');
	const mother_disease = watch('mother_disease');
	const sibling_disease = watch('sibling_disease');
	const spouce_disease = watch('spouce_disease');
	const is_irrelevant = watch('is_irrelevant')

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
							<h4 className={classes.cardTitleWhite}>Family History</h4>
						</CardHeader>
						<CardBody>
							<form onSubmit={handleSubmit(onSubmit)}>
								<Grid container spacing={2}>
									<Grid item xs={12} sm={1} md={1} >
										<Controller control={control} as={<Checkbox />}
											name="father_disease"
											defaultValue={false}
										/>
									</Grid>

									<Grid item xs={12} sm={1} md={1} >
										<Typography style={{ fontWeight: 500, marginTop: '23px' }} variant="body2">
											Father :
										</Typography>
									</Grid>
									<Grid item xs={12} sm={3} md={3} >
										<TextField
											id="father_disease"
											label="Disease Name"
											value="Diabetes"
											inputProps={{
												readOnly: true,
											}}
											fullWidth
										/>
									</Grid>
									<Grid item xs={12} sm={3} md={3} >
										<TextField
											id="father_desc"
											name="father_desc"
											label="Description"
											multiline
											value="Controlled"
											rowsMax="4"
											inputProps={{
												readOnly: true,
											}}
											fullWidth
										/>
									</Grid>
									<Grid item xs={12} sm={4} md={4} >
										{father_disease && (
											<Controller
												as={<TextField />}
												error={Boolean(errors.father_error)}
												name="father_error"
												rules={{ required: "Please Fill the Error" }}
												control={control}
												defaultValue=""
												label="Error Marked"
												type="text"
												helperText={errors.father_error && errors.father_error.message}
												fullWidth
												variant="outlined"
												multiline
												rows={4}
											/>

										)}
									</Grid>
									<Grid item xs={12} sm={1} md={1} >
										<Controller control={control} as={<Checkbox />}
											name="mother_disease"
											defaultValue={false}
										/>
									</Grid>

									<Grid item xs={12} sm={1} md={1} >
										<Typography style={{ fontWeight: 500, marginTop: '23px' }} variant="body2">
											Mother :
										</Typography>
									</Grid>
									<Grid item xs={12} sm={3} md={3} >
										<TextField
											id="mother_disease"
											label="Disease Name"
											value="Diabetes"
											inputProps={{
												readOnly: true,
											}}
											fullWidth
										/>
									</Grid>
									<Grid item xs={12} sm={3} md={3} >
										<TextField
											id="mother_desc"
											name="mother_desc"
											label="Description"
											multiline
											value="Controlled"
											rowsMax="4"
											inputProps={{
												readOnly: true,
											}}
											fullWidth
										/>
									</Grid>
									<Grid item xs={12} sm={4} md={4} >

										{mother_disease && (
											<Controller
												as={<TextField />}
												error={Boolean(errors.mother_error)}
												name="mother_error"
												rules={{ required: "Please Fill the Error" }}
												control={control}
												defaultValue=""
												label="Error Marked"
												type="text"
												helperText={errors.mother_error && errors.mother_error.message}
												fullWidth
												variant="outlined"
												multiline
												rows={4}
											/>

										)}
									</Grid>

									<Grid item xs={12} sm={1} md={1} >
										<Controller control={control} as={<Checkbox />}
											name="sibling_disease"
											defaultValue={false}
										/>
									</Grid>

									<Grid item xs={12} sm={1} md={1} >
										<Typography style={{ fontWeight: 500, marginTop: '23px' }} variant="body2">
											Sibling :
										</Typography>
									</Grid>
									<Grid item xs={12} sm={3} md={3} >
										<TextField
											id="sibling_disease"
											label="Disease Name"
											value="Diabetes"
											inputProps={{
												readOnly: true,
											}}
											fullWidth
										/>
									</Grid>
									<Grid item xs={12} sm={3} md={3} >
										<TextField
											id="sibling_desc"
											name="sibling_desc"
											label="Description"
											multiline
											value="Controlled"
											rowsMax="4"
											inputProps={{
												readOnly: true,
											}}
											fullWidth
										/>
									</Grid>
									<Grid item xs={12} sm={4} md={4} >
										{sibling_disease && (
											<Controller
												as={<TextField />}
												error={Boolean(errors.sibling_error)}
												name="sibling_error"
												rules={{ required: "Please Fill the Error" }}
												control={control}
												defaultValue=""
												label="Error Marked"
												type="text"
												helperText={errors.sibling_error && errors.sibling_error.message}
												fullWidth
												variant="outlined"
												multiline
												rows={4}
											/>

										)}
									</Grid>
									<Grid item xs={12} sm={1} md={1} >
										<Controller control={control} as={<Checkbox />}
											name="spouce_disease"
											defaultValue={false}
										/>
									</Grid>

									<Grid item xs={12} sm={1} md={1} >
										<Typography style={{ fontWeight: 500, marginTop: '23px' }} variant="body2">
											Spouce :
										</Typography>
									</Grid>
									<Grid item xs={12} sm={3} md={3} >
										<TextField
											id="spouce_disease"
											label="Disease Name"
											value="Diabetes"
											inputProps={{
												readOnly: true,
											}}
											fullWidth
										/>
									</Grid>
									<Grid item xs={12} sm={3} md={3} >
										<TextField
											id="spouce_desc"
											name="spouce_desc"
											label="Description"
											multiline
											value="Controlled"
											rowsMax="4"
											inputProps={{
												readOnly: true,
											}}
											fullWidth
										/>
									</Grid>
									<Grid item xs={12} sm={4} md={4} >
										{spouce_disease && (
											<Controller
												as={<TextField />}
												error={Boolean(errors.spouce_error)}
												name="spouce_error"
												rules={{ required: "Please Fill the Error" }}
												control={control}
												defaultValue=""
												label="Error Marked"
												type="text"
												helperText={errors.spouce_error && errors.spouce_error.message}
												fullWidth
												variant="outlined"
												multiline
												rows={4}
											/>

										)}
									</Grid>
									<Grid item xs={12} sm={3} md={3} >
									 
									 <Controller control={control} as={<Checkbox />}
										 name="is_irrelevant"
										 defaultValue={false}

									 />
									  <label>Is Irrelevant</label>
								 </Grid>
								 {is_irrelevant && (
									 <Grid item xs={12} sm={5} md={5} >
										 <Controller
											 as={<TextField />}
											 error={Boolean(errors.is_irrelevant_error)}
											 name="is_irrelevant_error"
											 rules={{ required: "Please Fill the Error" }}
											 control={control}
											 defaultValue=""
											 label="Error Marked"
											 type="text"
											 helperText={errors.is_irrelevant_error && errors.is_irrelevant_error.message}
											 fullWidth
											 variant="outlined"
											 multiline
											 rows={4}
										 />
									 </Grid>
								 )}
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

export default FamilyHistory;
