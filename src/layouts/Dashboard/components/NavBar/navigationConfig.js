
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import Person from "@material-ui/icons/Person";

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';


export default [
  {
    pages: [
      {
        title: 'Dashboard',
        href: '/dashboard',
        icon: DashboardIcon,
      },
      {
        title: 'Notification',
        href: '/notification',
        icon: NotificationImportantIcon,
      },
      {
        title: 'Profile',
        href: '/profile',
        icon: AccountCircleIcon,
      },
      {
        title: 'Old Patient Records',
        href: '/patient_list',
        icon: Person,
      },
     
     
      {
        title: 'Logout',
        href: '/auth/login',
        icon: ExitToAppIcon
      },
    ]
  }
];
