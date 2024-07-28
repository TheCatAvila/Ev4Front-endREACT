import { Link } from "react-router-dom";

export const HeroeCard = ({id, nombre, tipo, origen, descripcion}) => {
  const imgSrc = `/assets/heroes/${id}.jpg`;
  const imgSrc2 = `/assets/heroes/${id}.jpeg`;

  return (
    <div className="card">
      <div className="row">
        <div className="col-md-4">
          <img src={imgSrc} alt="" />
          <img src={imgSrc2} alt="" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <div className="card-title">{nombre}</div>
            <div className="card-text">{origen}</div>
            <Link to={`/hero/${id}`}> Ver más... </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
