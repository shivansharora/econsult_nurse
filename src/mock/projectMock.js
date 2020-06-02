import uuid from 'uuid/v1';
import moment from 'moment';
import { colors } from '@material-ui/core';

import mock from '../utils/mock';

mock.onGet('/api/projects').reply(200, {
  projects: [
    {
      id: uuid(),
      title: 'Arun Kumar',
      author: {
       
        avatar: '/images/avatars/avatar_50.jpg'
      },
      doctor: 'Rahul',
      mso:"Avinash Jain",
      number: '7017483927',
      start_date: moment(),
      end_date: moment(),
      rating:'4.5/5',
      updated_at: moment().subtract(24, 'minutes')
    },
    {
      id: uuid(),
      title: 'Raj Arora',
      author: {
       
        avatar: '/images/avatars/avatar_50.jpg'
      },
      doctor: 'Avinash',
      mso:"Ram Sharma",
      number: '7017213654',
      start_date: moment(),
      end_date: moment(),
      rating:'4/5',
      updated_at: moment().subtract(24, 'minutes')
    },
    {
      id: uuid(),
      title: 'Arun Kumar',
      author: {
       
        avatar: '/images/avatars/avatar_50.jpg'
      },
      doctor: 'Avinash',
      mso:"Rahul Jain",
      number: '7017483927',
      start_date: moment(),
      end_date: moment(),
      rating:'4.6/5',
      updated_at: moment().subtract(24, 'minutes')
    },
    {
      id: uuid(),
      title: 'Prakash Singh',
      author: {
       
        avatar: '/images/avatars/avatar_50.jpg'
      },
      doctor: 'Avinash',
      mso:"Kishan Jain",
      number: '7017483927',
      start_date: moment(),
      end_date: moment(),
      rating:'3/5',
      updated_at: moment().subtract(24, 'minutes')
    },
    {
      id: uuid(),
      title: 'Saloni Chabra',
      author: {
       
        avatar: '/images/avatars/avatar_50.jpg'
      },
      doctor: 'Avinash',
      number: '7017483927',
      start_date: moment(),
      end_date: moment(),
      rating:'4/5',
      updated_at: moment().subtract(24, 'minutes')
    },
    {
      id: uuid(),
      title: 'Sandeep Kumar',
      author: {
       
        avatar: '/images/avatars/avatar_50.jpg'
      },
      doctor: 'Nitin',
      mso:"Avinash Jain",
      number: '7017483927',
      start_date: moment(),
      end_date: moment(),
      rating:'4.2/5',
      updated_at: moment().subtract(24, 'minutes')
    }
  ]
});

