import { HeroeList } from "../components/HeroeList"

export const AnimePage = () => {
  return (
    <>
      <div className="titulo">
        <h2>Animes</h2>
      </div>
      <HeroeList tipo="anime" />
    </>
  )
}
