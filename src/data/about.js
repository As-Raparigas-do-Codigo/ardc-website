import image1 from '../assets/home/missao5.png';
import image2 from '../assets/home/missao3.jpeg';
import image3 from '../assets/home/missao.png';

const AboutData = (translation) => {
  return [
    {
      id: 1,
      title: translation('AboutUsPage-Row1-Title'),
      subtitle: translation('AboutUsPage-Row1-Subtitle'),
      description: translation('AboutUsPage-Row1-Description'),
      img: image1,
      pictureRight: true
    },
    {
      id: 2,
      title: translation('AboutUsPage-Row2-Title'),
      subtitle: translation('AboutUsPage-Row2-Subtitle'),
      description: translation('AboutUsPage-Row2-Description'),
      img: image2,
      pictureRight: false
    },
    {
      id: 3,
      title: translation('AboutUsPage-Row3-Title'),
      subtitle: translation('AboutUsPage-Row3-Subtitle'),
      description: translation('AboutUsPage-Row3-Description'),
      img: image3,
      pictureRight: true
    }
  ];
};

export default AboutData;
