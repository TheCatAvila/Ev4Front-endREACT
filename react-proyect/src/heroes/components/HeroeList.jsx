import { getHerosByTipo } from "../helpers/getHeroesByTipo"
import { HeroeCard } from "./HeroeCard";

export const HeroeList = ({tipo}) => {

    const heroes = getHerosByTipo(tipo);

  return (
    <>
        <h1>Heroe List</h1>
        {/* <ul>
            {
                heroes.map(aux => (
                    <li key={aux.id}>
                        {aux.nombre}
                    </li>
                ))
            }
        </ul> */}

        <div className="container">
            <div className="col-md-8 offset-md-2">
            {
                heroes.map(aux => (
                    <HeroeCard key={aux.id} {...aux}/>
                ))
            }
            </div>
        </div>
    </>
  )
}
