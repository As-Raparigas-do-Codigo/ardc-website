import image1 from '../assets/home/missao5.png';
import image2 from '../assets/home/missao3.jpeg';
import image3 from '../assets/home/missao.png';

const AboutData = (translation) => {
  return [
    {
      id: 1,
      title: translation('AboutUsPage-Mission-Title'),
      subtitle: translation('AboutUsPage-Mission-Subtitle'),
      description: translation('AboutUsPage-Mission-Description'),
      img: image1,
      pictureRight: true
    },
    {
      id: 2,
      title: translation('AboutUsPage-Goals-Title'),
      subtitle: translation('AboutUsPage-Goals-Subtitle'),
      description: translation('AboutUsPage-Goals-Description'),
      img: image2,
      pictureRight: false
    },
    {
      id: 3,
      title: translation('AboutUsPage-HowWeWork-Title'),
      subtitle: translation('AboutUsPage-HowWeWork-Subtitle'),
      description: translation('AboutUsPage-HowWeWork-Description'),
      img: image3,
      pictureRight: true
    }
  ];
};

export default AboutData;
