import React from "react" 
import '../../global.css'

export default function Logo(){
    return(
        <div className="logo-container">
            <section className="form">
                <form>
                    <input 
                    placeholder="E-mail"
                    type="email"
                    />
                    <input 
                    placeholder="Senha"
                    type="password"
                    />
                    <button className="button-logo" type="submit">
                        Entrar
                    </button>
                </form>
            </section>
        </div>
    )
}