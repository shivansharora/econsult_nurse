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

const useStyles = makeStyles(styles);

const Allergy = () => {
	const classes = useStyles();

	const { handleSubmit, errors, control, watch } = useForm();

	const onSubmit = data => {
		// alert(JSON.stringify(data));
	};


	const observation = watch('observation');
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
							<h4 className={classes.cardTitleWhite}>Allergy</h4>
						</CardHeader>
						<CardBody>
							<form onSubmit={handleSubmit(onSubmit)}>
								<Grid container spacing={2}>
									<Grid item xs={12} sm={1} md={1} >
										<Controller control={control} as={<Checkbox />}
											name="observation"
											defaultValue={false}
										/>
									</Grid>
									<Grid item xs={12} sm={2} md={2} >
										<Typography style={{ fontWeight: 600, marginTop: '15px' }} variant="body2">
											Observation :
										</Typography>
									</Grid>
									<Grid item xs={12} sm={4} md={4} >
										<TextField
											id="Observation"
											label="Observation"
											multiline
											rowsMax="4"
											value="Have some allergy on hand"
											inputProps={{
												readOnly: true,
											}}
											fullWidth
										/>
									</Grid>
									{observation && (
										<Grid item xs={12} sm={5} md={5} >
											<Controller
												as={<TextField />}
												error={Boolean(errors.observation_error)}
												name="observation_error"
												rules={{ required: "Please Fill the Error" }}
												control={control}
												defaultValue=""
												label="Error Marked"
												type="text"
												helperText={errors.observation_error && errors.observation_error.message}
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

export default Allergy;
