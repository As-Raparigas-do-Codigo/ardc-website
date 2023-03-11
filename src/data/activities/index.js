import events from './events';
import media from './media';
import workshops from './workshops';

const activities = events.concat(media).concat(workshops);

export default activities;
