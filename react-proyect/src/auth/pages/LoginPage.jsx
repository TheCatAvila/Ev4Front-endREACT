import { NavLink } from "react-router-dom"

export const LoginPage = () => {
  return (
    <>
      <div className="contenedor-login">
        <div className="wallpaper">
          <img className="img-wallpaper" src="/assets/heroes/comic-carnage.jpg" alt="" />
        </div>
        <div className="login-part">
          <div className="p-5 m-5">
            <h1 className="titulo-login">Animé y Comics</h1>
            <h2 className="pb-4">Login</h2>
            <form>

              <div data-mdb-input-init className="form-outline mb-4">
                <input type="email" id="form2Example1" className="form-control" />
                <label className="form-label" for="form2Example1">Email address</label>
              </div>


              <div data-mdb-input-init className="form-outline mb-4">
                <input type="password" id="form2Example2" className="form-control" />
                <label className="form-label" for="form2Example2">Password</label>
              </div>

              <div className="row mb-4">
                <div className="col d-flex justify-content-center">

                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                    <label className="form-check-label" for="form2Example31"> Remember me </label>
                  </div>
                </div>

                <div className="col">

                  <a href="#!">Forgot password?</a>
                </div>
              </div>

              <NavLink className="btn btn-primary btn-block mb-4" to="/">Login</NavLink>

              <div className="text-center">
                <p>Not a member? <a href="#!">Register</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
