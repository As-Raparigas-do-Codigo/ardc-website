const Routes = (translation) => {
  return {
    About: '/' + translation("AboutUsPage-Route"),
    Contacts: '/' + translation("ContactsPage-Route"),
    Events: '/' + translation("EventsPage-Route"),
    Home: '/',
    Mentorships: '/' + translation("MentorshipsPage-Route"),
    PrivacyPolicy: '/' + translation("PrivacyPolicyPage-Route"),
    Team: '/' + translation("TeamPage-Route"),
    Workshops:'/' + translation("WorkshopsPage-Route")
  }
};

export default Routes;