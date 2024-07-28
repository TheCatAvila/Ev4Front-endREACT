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
            <div className="card">
                <img src={`/assets/heroes/${hero.id}.jpg`} alt={`Imagen de ${ hero.nombre }`} />
                <img src={`/assets/heroes/${hero.id}.jpeg`} alt={`Imagen de ${ hero.nombre }`} />
                <div className="card-body">
                    <h2 className="card-text">{ hero.nombre }</h2>
                    <p className="card-text">{ hero.tipo }</p>
                    <p className="card-text">{ hero.origen }</p>
                    <p className="card-text">{ hero.descripcion }</p>
                </div>
                <div className="button-container">
                    <button className="btn btn-primary" onClick={handleReturn}>Volver</button>
                </div>            
            </div>
            ) : (
                <h1>El heroe no existe!</h1>
            )
        }
            
        </>
    )
}
