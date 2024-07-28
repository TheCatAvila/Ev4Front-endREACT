import { useNavigate, useParams } from "react-router-dom";
import { getHerosById } from "../helpers/getHeroesById";
import Swal from 'sweetalert2';

export const HeroPage = () => {

    const { id } = useParams();
    const hero = getHerosById(id);
    const navigate = useNavigate();

    console.log(hero);

    const handleReturn = () => {
        if (hero.tipo === 'anime') {
            navigate('/animes');
        } else {
            navigate('/comics');
        }
    }

    if (!hero) {
        Swal.fire({
            title: "Héroe no encontrado",
            text: `El héroe con el ID ${id} no existe en nuestra base de datos.`,
            icon: 'error',
            showDenyButton: true,
            confirmButtonText: 'Ir a Anime',
            denyButtonText: 'Ir a Comics',
            customClass: {
                popup: 'my-popup'
            },
            allowEscapeKey: false
        }).then((result) => {
            if (result.isConfirmed) {
                navigate('/animes');
            } else if (result.isDenied) {
                navigate('/comics');
            }
        });

        return null;
    }

    return (
        <>
            {
                hero ? (
                    <div className="contenedor-total-info">
                        <div className="card cont-card">
                            <img className="img-card" src={`/assets/heroes/${hero.id}.jpg`} alt={`Imagen de ${hero.nombre}`} />
                            <div className="card-body">
                                <h2 className="card-text titulo-carta">{hero.nombre}</h2>
                                <p className="card-text"><span>Tipo: </span>{hero.tipo}</p>
                                <p className="card-text"><span>Origen: </span>{hero.origen}</p>
                                <p className="card-text"><span>Descripción: </span>{hero.descripcion}</p>
                                <div className="button-container">
                                    <button className="btn btn-primary btn-carta" onClick={handleReturn}>Volver</button>
                                </div>
                            </div>
                        </div>
                    </div>

                ) : (
                    <>
                        <template id="my-template">
                            <swal-title>
                                Save changes to "Untitled 1" before closing?
                            </swal-title>
                            <swal-icon type="warning" color="red"></swal-icon>
                            <swal-button type="confirm">
                                Ir a Anime
                            </swal-button>
                            <swal-param name="allowEscapeKey" value="false" />
                            <swal-param
                                name="customClass"
                                value='{ "popup": "my-popup" }' />
                            <swal-function-param
                                name="didOpen"
                                value="popup => console.log(popup)" />
                        </template>
                        {Swal.fire({
                            template: "#my-template"
                        })}
                    </>

                )
            }

        </>
    )
}
