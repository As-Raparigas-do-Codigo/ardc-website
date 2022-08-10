import python from "../assets/workshops/workshop-python.png";
import react from "../assets/workshops/workshop-react.png";

const workshops = [
  {
    id: 1,
    title: "React",
    image: react,
    alt: "React workshop",
    description:
      "Temos o prazer de apresentar a primeira edição do workshop de React. Esta biblioteca criada pela Meta (antiga Facebook) tem vindo a crescer imenso na popularidade e na procura no mercado das TI.",
    descriptiveDate:
      "Próxima Edição: 02 de Abril a 07 de Maio (Sábados), entre 10h e as 12h",
    startingDate: "2022-09-02T10:00:00Z",
    endingDate: "2022-10-17T12:00:00Z",
    linkUrl: "https://raparigasdocodigo.pt/atividades/",
    buttonUrl: "https://raparigasdocodigo.pt/atividades/",
    descriptiveDuration: "Longa Duração",
    sessions: {
      total: 5,
      data:[
        {
          date: "2022-04-02T10:00:00Z",
          hour: "10h",
          duration: "2h",
        },
        {
          date: "2022-04-09T10:00:00Z",
          hour: "10h",
          duration: "2h",
        },
      ] 
    }
  },
  {
    id: 2,
    title: "Introdução à programação em Python",
    image: python,
    alt: "Python workshop",
    description:
      "Temos o prazer de apresentar a primeira edição do ciclo de workshops de Python para Data Science. De acordo com a Havard Business Review Data Scientist é o trabalho mais sexy do seculo XXI. Não vais querer perder o workshop introdutório a nesta área (...)",
    descriptiveDate: "Próxima Edição: 10 de Março (Sábado) das 10h às 12h",
    startingDate: "2022-03-10T10:00:00Z",
    endingDate: null,
    linkUrl: "https://raparigasdocodigo.pt/atividades/",
    buttonUrl: "https://raparigasdocodigo.pt/atividades/",
    descriptiveDuration: "Longa Duração",
  },
];

export default workshops;
