import "./style.css";
const Slide = props => {
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

export default Slide;
