import image1 from "../assets/about/women-computer.webp";
import image2 from "../assets/about/computer-photo.webp";
import image3 from "../assets/about/computer-photo.webp";
import { SiteContent } from "SiteContent";

const about = [
  {
    id: 1,
    title: SiteContent.AboutUsPage.Mission.Title,
    subtitle: SiteContent.AboutUsPage.Mission.Subtitle,
    description: SiteContent.AboutUsPage.Mission.Description,
    img: image1,
    pictureRight: true,
  },
  {
    id: 2,
    title: SiteContent.AboutUsPage.Goals.Title,
    subtitle: SiteContent.AboutUsPage.Goals.Subtitle,
    description: SiteContent.AboutUsPage.Goals.Description,
    img: image2,
    pictureRight: false,
  },
  {
    id: 3,
    title: SiteContent.AboutUsPage.HowWeWork.Title,
    subtitle: SiteContent.AboutUsPage.HowWeWork.Subtitle,
    description: SiteContent.AboutUsPage.HowWeWork.Description,
    img: image3,
    pictureRight: true,
  }
];

export default about;
