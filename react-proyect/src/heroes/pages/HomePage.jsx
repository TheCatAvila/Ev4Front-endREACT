
export const HomePage = () => {

  return (
    <>
      <div className="titulo">
        <h2>Home</h2>
      </div>
      <div className="ps-4">
        <h3>En esta página encontrarás</h3>
        <br></br>
        <ul>
          <li>
            <p><span>Anime:</span> Información sobre tus personajes favoritos de animé.</p>
            <div className="contenedor-img-home">
              <img className="img-home" src="/assets/heroes/anime-goku.jpg" alt="" />
              <img className="img-home" src="/assets/heroes/anime-naruto.jpg" alt="" />
              <img className="img-home" src="/assets/heroes/anime-luffy.jpg" alt="" />
              <img className="img-home" src="/assets/heroes/anime-kaneki.jpg" alt="" />
            </div>
          </li>
          <li>
            <p><span>Comics:</span> Información sobre tus personajes de comics favoritos.</p>
            <div className="contenedor-img-home">
              <img className="img-home" src="/assets/heroes/comic-superman.jpg" alt="" />
              <img className="img-home" src="/assets/heroes/comic-carnage.jpg" alt="" />
              <img className="img-home" src="/assets/heroes/comic-batman.jpg" alt="" />
              <img className="img-home" src="/assets/heroes/comic-spiderman.jpg" alt="" />
            </div>
          </li>
          <li>
          <p><span>Login y Logout:</span> Podrás iniciar y cerrar tu sesión las veces que gustes.</p>
          </li>
        </ul>
      </div>
    </>
  )
}
