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

const MedicalProblem = () => {
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
							<h4 className={classes.cardTitleWhite}>Medical Problem</h4>
						</CardHeader>
						<CardBody>
							<form >
								<Grid container spacing={2}>
									<Grid item xs={12} sm={6} md={6} >
										<div className={classes.stats}>
											<Typography className={classes.typo} variant="body2">Chief Complaint</Typography>
											<br />
											<Typography className={classes.typoResult} variant="h6">
												Fever
											</Typography>

										</div>
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<div className={classes.stats}>
											<Typography className={classes.typo} variant="body2">Associated Symtom</Typography>
											<br />
											<Typography className={classes.typoResult} variant="h6">
												Cold,Cough
											</Typography>

										</div>
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<div className={classes.stats}>
											<Typography className={classes.typo} variant="body2">Duration</Typography>
											<br />
											<Typography className={classes.typoResult} variant="h6">
												1
											</Typography>

										</div>
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<div className={classes.stats}>
											<Typography className={classes.typo} variant="body2">Duration Type</Typography>
											<br />
											<Typography className={classes.typoResult} variant="h6">
												Days
											</Typography>

										</div>
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<div className={classes.stats}>
											<Typography className={classes.typo} variant="body2">Progression</Typography>
											<br />
											<Typography className={classes.typoResult} variant="h6">
												Increasing
											</Typography>

										</div>
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<div className={classes.stats}>
											<Typography className={classes.typo} variant="body2">Occurence</Typography>
											<br />
											<Typography className={classes.typoResult} variant="h6">
												First Time
											</Typography>

										</div>
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<div className={classes.stats}>
											<Typography className={classes.typo} variant="body2">Aggravating Factor</Typography>
											<br />
											<Typography className={classes.typoResult} variant="h6">
												cold,cough
											</Typography>

										</div>
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<div className={classes.stats}>
											<Typography className={classes.typo} variant="body2">Relieving Factor</Typography>
											<br />
											<Typography className={classes.typoResult} variant="h6">
												Morning,Walking
											</Typography>

										</div>
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<div className={classes.stats}>
											<Typography className={classes.typo} variant="body2">Cuurent Status</Typography>
											<br />
											<Typography className={classes.typoResult} variant="h6">
												Resolved
											</Typography>

										</div>
									</Grid>


									<Grid item xs={12} sm={6} md={6} >
										<div className={classes.stats}>
											<Typography className={classes.typo} variant="body2">Start Date</Typography>
											<br />
											<Typography className={classes.typoResult} variant="h6">
												26/06/2020
											</Typography>

										</div>
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<div className={classes.stats}>
											<Typography className={classes.typo} variant="body2">End Date</Typography>
											<br />
											<Typography className={classes.typoResult} variant="h6">
												30/06/2020
											</Typography>

										</div>
									</Grid>

								</Grid>
								<Review />
							</form>
						</CardBody>
					</Card>
				</Grid>
			</Grid>
		</Page>
	);
};

export default MedicalProblem;
