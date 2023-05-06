import { useAuth } from "./auth";


function LogoutPage () {

  const auth = useAuth();

  const logout = (e) => {
    e.preventDefault();
    auth.logout();
    console.log('El user salió');
  }

  return (
    <>
      <h1>Logout</h1>
      <form onSubmit={logout}>
        <label>Seguro que deseas salir?</label>
        <button type="submit">Salir</button>
      </form>
    </>
  )
}

export {LogoutPage}