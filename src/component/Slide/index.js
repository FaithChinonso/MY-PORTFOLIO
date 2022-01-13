import "./style.css";
const Slide = (props) => {
  return (
    <div className="slide">
      <figure className="slide-figure">
        <img
          src={process.env.PUBLIC_URL + props.img}
          alt={props.title}
          className="slide-img"
        />

        <figcaption className="slide-caption">
          <h3 className="slide-heading">
            {props.heading} <span>{props.span}</span>
          </h3>
          <div className="slider-buttons">
            <a
              target="_blank"
              rel="noreferrer"
              href={props.link1}
              className="slider-links"
            >
              Github
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href={props.link2}
              className="slider-links"
            >
              Live Site
            </a>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

// const Slider = () => {
//   return (
//     <div className="slider">
//       <div className="slide">
//         <figure className="slide-figure">
//           <img
//             src={process.env.PUBLIC_URL + "/img/form.png"}
//             alt="form"
//             className="slide-img"
//           />

//           <figcaption className="slide-caption">
//             <h3 className="slide-heading">
//               FORM VALIDATION <span>HTML,CSS, JAVASCRIPT AND REACT</span>
//             </h3>
//             <div className="slider-buttons">
//               <a
//                 target="_blank"
//                 rel="noreferrer"
//                 href="https://github.com/FaithChinonso/NEXTER"
//                 className="slider-links"
//               >
//                 Github
//               </a>
//               <a
//                 target="_blank"
//                 rel="noreferrer"
//                 href="https://faithchinonso.github.io/FORM-VALIDATION-WITH-REACT/"
//                 className="slider-links"
//               >
//                 Live Site
//               </a>
//             </div>
//           </figcaption>
//         </figure>
//       </div>
//       <div className="slide">
//         <figure className="slide-figure">
//           <img
//             src={process.env.PUBLIC_URL + "/img/natour.png"}
//             alt="natour"
//             className="slide-img"
//           />

//           <figcaption className="slide-caption">
//             <h3 className="slide-heading">
//               NATOURS PROJECT (UDEMY) <span>HTML,CSS AND SASS</span>
//             </h3>
//             <div class="slider-buttons">
//               <a
//                 target="_blank"
//                 rel="noreferrer"
//                 className="slider-links"
//                 href="https://github.com/FaithChinonso/NATOUR"
//               >
//                 Github
//               </a>
//               <a
//                 target="_blank"
//                 rel="noreferrer"
//                 href="https://faithchinonso.github.io/NATOUR/"
//                 className="slider-links"
//               >
//                 Live Site
//               </a>
//             </div>
//           </figcaption>
//         </figure>
//       </div>
//       <div className="slide">
//         <figure className="slide-figure">
//           <img
//             src={process.env.PUBLIC_URL + "/img/nexter.png"}
//             alt="nexter"
//             className="slide-img"
//           />

//           <figcaption className="slide-caption">
//             <h3 className="slide-heading">
//               NEXTER PROJECT (UDEMY) <span>HTML,CSS AND SASS</span>
//             </h3>
//             <div className="slider-buttons">
//               <a
//                 target="_blank"
//                 rel="noreferrer"
//                 href="https://github.com/FaithChinonso/NEXTER"
//                 className="slider-links"
//               >
//                 Github
//               </a>
//               <a
//                 target="_blank"
//                 rel="noreferrer"
//                 href="https://faithchinonso.github.io/NEXTER/"
//                 className="slider-links"
//               >
//                 Live Site
//               </a>
//             </div>
//           </figcaption>
//         </figure>
//       </div>
//       <div className="slide">
//         <figure className="slide-figure">
//           <img
//             src={process.env.PUBLIC_URL + "/img/scitylana.png"}
//             alt="scitylana"
//             className="slide-img"
//           />

//           <figcaption className="slide-caption">
//             <h3 className="slide-heading">
//               SCITYLANA WEBSITE <span>HTML,CSS,SASS AND JAVASCRIPT</span>
//             </h3>
//             <div className="slider-buttons">
//               <a
//                 target="_blank"
//                 rel="noreferrer"
//                 href="https://github.com/FaithChinonso/Scitylana-"
//                 className="slider-links"
//               >
//                 Github
//               </a>
//               <a
//                 target="_blank"
//                 rel="noreferrer"
//                 href="https://faithchinonso.github.io/Scitylana-/"
//                 className="slider-links"
//               >
//                 Live Site
//               </a>
//             </div>
//           </figcaption>
//         </figure>
//       </div>
//       <div className="slide">
//         <figure className="slide-figure">
//           <img
//             src={process.env.PUBLIC_URL + "/img/expensetracker.png"}
//             alt="expense tracker"
//             className="slide-img"
//           />

//           <figcaption className="slide-caption">
//             <h3 className="slide-heading">
//               EXPENSE TRACKER <span>HTML,CSS, JAVASCRIPT AND REACT</span>
//             </h3>
//             <div className="slider-buttons">
//               <a
//                 target="_blank"
//                 rel="noreferrer"
//                 href="https://github.com/FaithChinonso/EXPENSE-TRACKER"
//                 className="slider-links"
//               >
//                 Github
//               </a>
//               <a
//                 target="_blank"
//                 rel="noreferrer"
//                 href="https://faithchinonso.github.io/EXPENSE-TRACKER/"
//                 className="slider-links"
//               >
//                 Live Site
//               </a>
//             </div>
//           </figcaption>
//         </figure>
//       </div>
//       <div className="slide">
//         <figure className="slide-figure">
//           <img
//             src={process.env.PUBLIC_URL + "/img/forkify.png"}
//             alt="forkify"
//             className="slide-img"
//           />

//           <figcaption className="slide-caption">
//             <h3 className="slide-heading">
//               FORKIFY (UDEMY) <span>HTML,CSS, API AND JAVASCRIPT</span>
//             </h3>
//             <div className="slider-buttons">
//               <a
//                 target="_blank"
//                 rel="noreferrer"
//                 href="https://github.com/FaithChinonso/Forkify"
//                 className="slider-links"
//               >
//                 Github
//               </a>
//               <a
//                 target="_blank"
//                 rel="noreferrer"
//                 href="https://faithchinonso.github.io/Forkify/"
//                 className="slider-links"
//               >
//                 Live Site
//               </a>
//             </div>
//           </figcaption>
//         </figure>
//       </div>
//       <div className="slide">
//         <figure className="slide-figure">
//           <img
//             src={process.env.PUBLIC_URL + "/img/mapty.png"}
//             alt="mapty"
//             className="slide-img"
//           />

//           <figcaption className="slide-caption">
//             <h3 className="slide-heading">
//               MAPTY (UDEMY) <span>HTML,CSS,API AND JAVASCRIPT</span>
//             </h3>
//             <div className="slider-buttons">
//               <a
//                 target="_blank"
//                 rel="noreferrer"
//                 href="https://github.com/FaithChinonso/MAPTY"
//                 className="slider-links"
//               >
//                 Github
//               </a>
//               <a
//                 target="_blank"
//                 rel="noreferrer"
//                 href="https://faithchinonso.github.io/MAPTY/"
//                 className="slider-links"
//               >
//                 Live Site
//               </a>
//             </div>
//           </figcaption>
//         </figure>
//       </div>
//       <div className="slide">
//         <figure className="slide-figure">
//           <img
//             src={process.env.PUBLIC_URL + "/img/bankistapp.png"}
//             alt="bankist app"
//             className="slide-img"
//           />

//           <figcaption className="slide-caption">
//             <h3 className="slide-heading">
//               BANKIST APP (UDEMY) <span>HTML,CSS AND JAVASCRIPT</span>
//             </h3>
//             <div className="slider-buttons">
//               <a
//                 target="_blank"
//                 rel="noreferrer"
//                 href="https://github.com/FaithChinonso/Bankist-App"
//                 className="slider-links"
//               >
//                 Github
//               </a>
//               <a
//                 target="_blank"
//                 rel="noreferrer"
//                 href="https://faithchinonso.github.io/Bankist-App/"
//                 className="slider-links"
//               >
//                 Live Site
//               </a>
//             </div>
//           </figcaption>
//         </figure>
//       </div>
//       <div className="slide">
//         <figure className="slide-figure">
//           <img
//             src={process.env.PUBLIC_URL + "/img/bankistwebsite.png"}
//             alt="bankist website"
//             className="slide-img"
//           />

//           <figcaption className="slide-caption">
//             <h3 className="slide-heading">
//               BANKIST WEBSITE (UDEMY) <span>HTML,CSS AND JAVASCRIPT</span>
//             </h3>
//             <div className="slider-buttons">
//               <a
//                 target="_blank"
//                 rel="noreferrer"
//                 href="https://github.com/FaithChinonso/Bankist-Website"
//                 className="slider-links"
//               >
//                 Github
//               </a>
//               <a
//                 target="_blank"
//                 rel="noreferrer"
//                 href="https://faithchinonso.github.io/Bankist-Website/"
//                 className="slider-links"
//               >
//                 Live Site
//               </a>
//             </div>
//           </figcaption>
//         </figure>
//       </div>
//       <div className="slide">
//         <figure className="slide-figure">
//           <img
//             src={process.env.PUBLIC_URL + "/img/piggame.png"}
//             alt="pig game"
//             className="slide-img"
//           />

//           <figcaption className="slide-caption">
//             <h3 className="slide-heading">
//               PIG GAME<span>HTML,CSS AND JAVASCRIPT</span>
//             </h3>
//             <div className="slider-buttons">
//               <a
//                 target="_blank"
//                 rel="noreferrer"
//                 href="https://github.com/FaithChinonso/Pig-Game"
//                 className="slider-links"
//               >
//                 Github
//               </a>
//               <a
//                 target="_blank"
//                 rel="noreferrer"
//                 href="https://faithchinonso.github.io/Pig-Game/"
//                 className="slider-links"
//               >
//                 Live Site
//               </a>
//             </div>
//           </figcaption>
//         </figure>
//       </div>
//     </div>
//   );
// };
export default Slide;
