import Constants from 'constants';

export const awardsList = [
  {
    img: require('assets/award-logo.png'),
    title: 'Footer-AwardsSection-Subtitle-1',
    description: 'Footer-AwardsSection-Description-1',
    link: 'https://www.youtube.com/watch?v=5ku99qSbZOI'
  },
  {
    img: require('assets/apdc.png'),
    title: 'Footer-AwardsSection-Subtitle-2',
    description: 'Footer-AwardsSection-Description-2',
    link: 'https://youtu.be/8VHslZ4dYWM?t=532'
  }
];

export const projectLinks = [
  {
    path: Constants.Routes.Community,
    name: 'CommunityPage-PageName'
  },
  {
    path: Constants.Routes.Activities,
    name: 'ActivitiesPage-PageName'
  },
  {
    path: Constants.Routes.Partners,
    name: 'PartnersPage-PageName'
  },
  {
    path: Constants.Routes.About,
    name: 'AboutLabel'
  },
  {
    path: Constants.Routes.Contacts,
    name: 'ContactsPage-PageName'
  }
];
