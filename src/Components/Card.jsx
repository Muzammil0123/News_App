import image from "../assets/image.png";
export default function Card(props) {
  return (
    <div className="card ">
      <img
        src={props.urlImage ? props.urlImage : image}
        className="card-img-top"
        style={{ height: "350px" }}
        alt="Error loading image"
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.desc}</p>
        <p className="card-text text-body-secondary">
          {new Date(props.time).toLocaleDateString()}
        </p>
        <span className="position-absolute top-0 right-0 translate-start badge rounded-pill bg-danger">
          {props.source}
        </span>
        <a target="_blank" href={props.url} className="btn btn-dark">
          Read More
        </a>
      </div>
    </div>
  );
}
