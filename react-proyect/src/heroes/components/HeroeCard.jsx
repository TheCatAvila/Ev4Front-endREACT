import { Link } from "react-router-dom";

export const HeroeCard = ({id, nombre, tipo, origen, descripcion}) => {
  const imgSrc = `/assets/heroes/${id}.jpg`;

  return (
      <div className="card card-contenedor-principal">
            <img className="img-principal" src={imgSrc} alt={`Imagen de ${ nombre }`}/>
            <div className="card-body">
              <h4 className="card-title">{nombre}</h4>
              <div className="card-text">{origen}</div>
              <button className="btn btn-primary"><Link className="color-btn-link" to={`/hero/${id}`}> Ver más... </Link></button>
        </div>
      </div>
  )
}
