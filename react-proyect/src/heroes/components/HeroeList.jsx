import { getHerosByTipo } from "../helpers/getHeroesByTipo"
import { HeroeCard } from "./HeroeCard";

export const HeroeList = ({tipo}) => {

    const heroes = getHerosByTipo(tipo);

  return (
    <>
        <div className="container">
            <div className="col-md-8">
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
