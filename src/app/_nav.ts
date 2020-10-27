import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
  },
  {
    title: true,
    name: 'Master'
  },
  {
    name: 'Master',
    url: '/master',
    icon: 'icon-calculator',
    children: [
      {
        name: 'PayScale',
        url: '/master/payscale',
        icon: 'icon-wallet'
      },
      {
        name: 'Employee',
        url: '/master/employee',
        icon: 'icon-user'
      },
      {
        name: 'Project',
        url: '/master/project',
        icon: 'icon-book-open'
      },
      {
        name: 'TimeSheet',
        url: '/master/time-sheet',
        icon: 'icon-clock'
      }
    ]
  },
  {
    name: 'Setup',
    url: '/setup',
    icon: 'icon-wrench',
    children: [
      {
        name: 'Designation',
        url: '/setup/designation',
        icon: 'icon-people'
      },
      {
        name: 'Pay Code',
        url: '/setup/paycode',
        icon: 'icon-paypal'
      },
      {
        name: 'Job Type',
        url: '/setup/jobtype',
        icon: 'icon-cursor'
      },
      {
        name: 'Country',
        url: '/setup/country',
        icon: 'icon-flag'
      },
      {
        name: 'Region',
        url: '/setup/region',
        icon: 'fa-area-chart'
      }
    ]
  },
  {
    name: 'Charts',
    url: '/charts',
    icon: 'icon-pie-chart'
  },
  {
    name: 'Icons',
    url: '/icons',
    icon: 'icon-star',
    children: [
      {
        name: 'Simple Line Icons',
        url: '/icons/simple-line-icons',
        icon: 'icon-star'
      }
    ]
  },
];
