import "./style.css";
import Slide from "../Slide";

const Slider = () => {
  const inputs = [
    {
      img: "/img/foodorder.png",
      alt: "foodorder",
      heading: "FOOD-ORDER-APP",
      span: "HTML,CSS, JAVASCRIPT AND React",
      link1: "https://github.com/FaithChinonso/FOOD-ORDER-APP",
      link2: "https://faithchinonso.github.io/FOOD-ORDER-APP/",
    },
    {
      img: "/img/form.png",
      title: "form",
      heading: "FORM VALIDATION",
      span: "HTML,CSS, JAVASCRIPT AND REACT",
      link1: "https://github.com/FaithChinonso/FORM-VALIDATION-WITH-REACT",
      link2: "https://faithchinonso.github.io/FORM-VALIDATION-WITH-REACT/",
    },
    {
      img: "/img/natour.png",
      alt: "natour",
      heading: "NATOUR PRJECT (UDEMY)",
      span: "HTML,CSS AND SASS",
      link1: "https://github.com/FaithChinonso/NATOUR",
      link2: "https://faithchinonso.github.io/NATOUR/",
    },
    {
      img: "/img/nexter.png",
      alt: "nexter",
      heading: "NEXTER PROJECT (UDEMY)",
      span: "HTML,CSS AND SASS",
      link1: "https://github.com/FaithChinonso/NEXTER",
      link2: "https://faithchinonso.github.io/NEXTER/",
    },
    {
      img: "/img/scitylana.png",
      alt: "scitylana",
      heading: "SCITYLANA WEBSITE",
      span: "HTML,CSS AND JAVASCRIPT ",
      link1: "https://github.com/FaithChinonso/Scitylana",
      link2: "https://faithchinonso.github.io/Scitylana/",
    },
    {
      img: "/img/piggame.png",
      alt: "form",
      heading: "PIG GAME",
      span: "HTML,CSS, JAVASCRIPT AND REACT",
      link1: "https://github.com/FaithChinonso/Pig-Game",
      link2: "https://faithchinonso.github.io/Pig-Game/",
    },
    {
      img: "/img/expensetracker.png",
      alt: "expensetracker",
      heading: "EXPENSETRACKER APP",
      span: "HTML,CSS, JAVASCRIPT AND REACT",
      link1: "https://github.com/FaithChinonso/EXPENSE-TRACKER",
      link2: "https://faithchinonso.github.io/EXPENSE-TRACKER/",
    },
    {
      img: "/img/forkify.png",
      alt: "forkify",
      heading: "FORKIFY",
      span: "HTML,CSS, JAVASCRIPT AND API",
      link1: "https://github.com/FaithChinonso/Forkify",
      link2: "https://faithchinonso.github.io/Forkify/",
    },
    {
      img: "/img/mapty.png",
      alt: "mapty",
      heading: "MAPTY",
      span: "HTML,CSS, JAVASCRIPT AND API",
      link1: "https://github.com/FaithChinonso/MAPTY",
      link2: "https://faithchinonso.github.io/MAPTY/",
    },
    {
      img: "/img/bankistapp.png",
      alt: "bankistapp",
      heading: "BANKIST APP",
      span: "HTML,CSS AND JAVASCRIPT",
      link1: "https://github.com/FaithChinonso/Bankist-App",
      link2: "https://faithchinonso.github.io/Bankist-App/",
    },
    {
      img: "/img/bankistwebsite.png",
      alt: "bankistwebsite",
      heading: "BANKIST WEBSITE",
      span: "HTML,CSS AND JAVASCRIPT",
      link1: "https://github.com/FaithChinonso/Bankist-Website",
      link2: "https://faithchinonso.github.io/Bankist-Website/",
    },
    {
      img: "/img/piggame.png",
      alt: "piggame",
      heading: "PIG GAME",
      span: "HTML,CSS AND JAVASCRIPT",
      link1: "https://github.com/FaithChinonso/Pig-Game",
      link2: "https://faithchinonso.github.io/Pig-Game/",
    },
  ];
  return (
    <div className="slider">
      <Slide
        img={inputs[0].img}
        title={inputs[0].title}
        heading={inputs[0].heading}
        span={inputs[0].span}
        link1={inputs[0].link1}
        link2={inputs[0].link2}
      />
      <Slide
        img={inputs[1].img}
        title={inputs[1].title}
        heading={inputs[1].heading}
        span={inputs[1].span}
        link1={inputs[1].link1}
        link2={inputs[1].link2}
      />
      <Slide
        img={inputs[2].img}
        title={inputs[2].title}
        heading={inputs[2].heading}
        span={inputs[2].span}
        link1={inputs[2].link1}
        link2={inputs[2].link2}
      />
      <Slide
        img={inputs[3].img}
        title={inputs[3].title}
        heading={inputs[3].heading}
        span={inputs[3].span}
        link1={inputs[3].link1}
        link2={inputs[3].link2}
      />
      <Slide
        img={inputs[4].img}
        title={inputs[4].title}
        heading={inputs[4].heading}
        span={inputs[4].span}
        link1={inputs[4].link1}
        link2={inputs[4].link2}
      />
      <Slide
        img={inputs[5].img}
        title={inputs[5].title}
        heading={inputs[5].heading}
        span={inputs[5].span}
        link1={inputs[5].link1}
        link2={inputs[5].link2}
      />
      <Slide
        img={inputs[6].img}
        title={inputs[6].title}
        heading={inputs[6].heading}
        span={inputs[6].span}
        link1={inputs[6].link1}
        link2={inputs[6].link2}
      />
      <Slide
        img={inputs[7].img}
        title={inputs[7].title}
        heading={inputs[7].heading}
        span={inputs[7].span}
        link1={inputs[7].link1}
        link2={inputs[7].link2}
      />
      <Slide
        img={inputs[8].img}
        title={inputs[8].title}
        heading={inputs[8].heading}
        span={inputs[8].span}
        link1={inputs[8].link1}
        link2={inputs[8].link2}
      />
      <Slide
        img={inputs[9].img}
        title={inputs[9].title}
        heading={inputs[9].heading}
        span={inputs[9].span}
        link1={inputs[9].link1}
        link2={inputs[9].link2}
      />
    </div>
  );
};
export default Slider;
