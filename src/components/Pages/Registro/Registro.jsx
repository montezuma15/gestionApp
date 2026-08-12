import "./styleRegistro.css";

export function Registro() {
    return (
        <>
            <div className="registro-contenedor">
                <h1 className="registro-titulo">Registro</h1>

                <form className="registro-form">
                    <div className="form-grupo">
                        <label htmlFor="inputId">ID</label>
                        <input
                            type="text"
                            className="form-input"
                            id="inputId"
                            placeholder="Ingrese su ID"
                        />
                    </div>

                    <div className="form-grupo">
                        <label htmlFor="inputNombre">Nombre</label>
                        <input
                            type="text"
                            className="form-input"
                            id="inputNombre"
                            placeholder="Ingrese su nombre"
                        />
                    </div>

                    <div className="form-grupo">
                        <label htmlFor="inputEmail1">Correo electrónico</label>
                        <input
                            type="email"
                            className="form-input"
                            id="inputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Ingrese su email"
                        />
                        <small id="emailHelp" className="texto-ayuda">
                            Nunca compartiremos su correo con nadie más.
                        </small>
                    </div>

                    <div className="form-grupo">
                        <label htmlFor="inputPassword1">Contraseña</label>
                        <input
                            type="password"
                            className="form-input"
                            id="inputPassword1"
                            placeholder="Contraseña"
                        />
                    </div>

                    <div className="check-grupo">
                        <input type="checkbox" id="exampleCheck1" />
                        <label htmlFor="exampleCheck1">Acepto los términos y condiciones</label>
                    </div>

                    <button type="submit" className="btn-enviar">
                        Enviar
                    </button>
                </form>
            </div>
        </>
    )
}