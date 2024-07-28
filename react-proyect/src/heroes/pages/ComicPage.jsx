import { HeroeList } from "../components/HeroeList"

export const ComicPage = () => {
  return (
    <>
      <div className="titulo">
        <h2>Comics</h2>
      </div>
      <HeroeList tipo="comics" />
    </>
  )
}
