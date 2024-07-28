import { useNavigate, useParams } from "react-router-dom"
import { getHerosById } from "../helpers/getHeroesById";

export const HeroPage = () => {

    const {id} = useParams();
    const hero = getHerosById(id);
    const url = useNavigate();

    console.log("", hero);

    const handleReturn = () =>{

        if (hero.tipo === 'anime'){
            url('/animes')
        } else {
            url('/comics')
        }
    }

    return (
        <>
        {
            hero ? (
            <div className="contenedor-total-info">
                <div className="card cont-card">
                    <img className="img-card" src={`/assets/heroes/${hero.id}.jpg`} alt={`Imagen de ${ hero.nombre }`} />
                    <div className="card-body">
                        <h2 className="card-text titulo-carta">{ hero.nombre }</h2>
                        <p className="card-text"><span>Tipo: </span>{ hero.tipo }</p>
                        <p className="card-text"><span>Origen: </span>{ hero.origen }</p>
                        <p className="card-text"><span>Descripción: </span>{ hero.descripcion }</p>
                        <div className="button-container">
                        <button className="btn btn-primary btn-carta" onClick={handleReturn}>Volver</button>
                    </div>     
                    </div>       
                </div>
            </div>
            
            ) : (
                <h1>El heroe no existe!</h1>
            )
        }
            
        </>
    )
}
