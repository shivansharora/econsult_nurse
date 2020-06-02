
import { makeStyles } from '@material-ui/core/styles';

import SearchBar from '../../components/SearchBar/SearchBar';
import React, { useState, useEffect } from 'react';
// import {useEffectOnce} from 'react-use';
import { Typography, TablePagination } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import axios from '../../utils/axios';

import PatientCard from './PatientCard/PatientCard'
import CustomTabs from "../../components/CustomTabs/CustomTabs";


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#eaeaea',
  },
  indicator: {
    backgroundColor: '#3cb0b3'
  },
  root1: {
    padding: '12px',
    marginTop: 22

  },
  results: {
    // marginTop: theme.spacing(2)
  },
  paginate: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center'
  }

}));

const Dashboard = (props) => {
  const classes = useStyles();
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredProjects, setFilteredProjects] = useState([]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, page) => {
    setPage(page);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(event.target.value);
  };



  useEffect(() => {
    let mounted = true;

    const fetchProjects = () => {
      axios.get('/api/projects').then(response => {
        if (mounted) {
          setProjects(response.data.projects);
        }
      });
    };

    fetchProjects();

    return () => {
      mounted = false;
    };
  }, []);


  // console.log(age);
  useEffect(() => {
    setFilteredProjects(
      projects.filter(project => {
        return Object.keys(project).some(key =>
          project[key].toString().toLowerCase().includes(search.toLowerCase())
        );
      })
    );
  }, [search, projects]);


  return (
    <div className={classes.root1}>
      <Grid>
        <Grid item xs={12} sm={12} md={12} >
          <CustomTabs
            headerColor="success"
            tabs={[
              {
                tabName: "Live Patient Data",
                // tabIcon: LocalHospitalIcon,
                tabContent: (
                  <div className={classes.results}>

                    <Grid item xs={12} sm={12} md={12} >

                      <SearchBar
                        onSearch={e => setSearch(e.target.value)}
                      />
                    </Grid>
                    <Typography
                      color="textSecondary"
                      gutterBottom
                      variant="body2"
                    >

                      {filteredProjects.length} Records found. Page {page + 1} of{' '}
                      {Math.ceil(filteredProjects.length / rowsPerPage)}
                    </Typography>
                    {filteredProjects.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(project => (
                      <PatientCard
                        key={project.id}
                        project={project}
                      />
                    ))}
                    <div className={classes.paginate}>
                      <TablePagination
                        component="div"
                        count={filteredProjects.length}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                        page={page}
                        rowsPerPage={rowsPerPage}
                        rowsPerPageOptions={[5, 10, 25]}
                      />
                    </div>
                  </div>

                )
              },
              {
                tabName: "Training Data",
                // tabIcon: StoreIcon,
                tabContent: (
                  <div className={classes.results}>
                    <Grid item xs={12} sm={12} md={12} >
                      <SearchBar
                        onSearch={e => setSearch(e.target.value)}

                      />
                    </Grid>
                    <Typography
                      color="textSecondary"
                      gutterBottom
                      variant="body2"
                    >
                      {filteredProjects.length} Records found. Page {page + 1} of{' '}
                      {Math.ceil(filteredProjects.length / rowsPerPage)}
                    </Typography>

                    {filteredProjects.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(project => (
                      <PatientCard
                        key={project.id}
                        project={project}
                      />
                    ))}

                    <div className={classes.paginate}>
                      <TablePagination
                        component="div"
                        count={filteredProjects.length}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                        page={page}
                        rowsPerPage={rowsPerPage}
                        rowsPerPageOptions={[5, 10, 25]}
                      />
                    </div>
                  </div>
                )
              }
            ]}
          />
        </Grid>
      </Grid>
    </div>
  );
}
export default Dashboard;




