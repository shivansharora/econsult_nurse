import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography,TablePagination } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
// import Card from '../../components/Card/Card';
// import CardHeader from '../../components/Card/CardHeader';
// import CardIcon from '../../components/Card/CardIcon';
// import CardBody from '../../components/Card/CardBody';
// import CardFooter from '../../components/Card/CardFooter';
// import Person from "@material-ui/icons/Person";

import axios from '../../utils/axios';
import SearchBar from '../../components/SearchBar/SearchBar'; 
import ProjectCard from './PatientCard/PatientCard'; 


const styles = theme => ({
  root: {
    padding: '16px'
    
  },
  results: {
    marginTop: theme.spacing(2)
  },
  paginate: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center'
  }
});
const useStyles = makeStyles(styles);

const PatientList = () => {
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
    <div className={classes.root} style={{ marginTop:'13px' }} >
    <Grid >						
        <Grid item xs={12} sm={12} md={12} >
        <SearchBar
          onSearch={e => setSearch(e.target.value)}
        />
        <div className={classes.results}>
        <Typography
          color="textSecondary"
          gutterBottom
          variant="body2"
        >
          {filteredProjects.length} Records found. Page {page + 1} of{' '}
          {Math.ceil(filteredProjects.length / rowsPerPage)}
        </Typography>
        {filteredProjects.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(project => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
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
        </Grid>
        
      
    </Grid>
</div>
  );
};

export default PatientList;
