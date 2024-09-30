import logo from './../assets/twitter-logo.svg';
import googleLogo from "./../assets/images/Google_logo.webp";
import appleLogo from "./../assets/images/appleLogo.png";
import './home.css'
import {Modal} from '../components/Modal';
import { useState } from 'react';

export const Home = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div >
      <main>
        <div className="home_content container">
          <div className="logo">
            <img src={logo} />
          </div>
          <div className="login_content">
            <h1>Lo que está pasando ahora</h1>
            <h2 >Únete Hoy</h2>
            <div className="buttons">
              <a className="white_button">
                <div className="content">
                  <div className="logo">
                    <img src={googleLogo} alt="" />
                  </div>
                  <p>Registarse con Google</p>
                </div>
              </a>

              <a className="white_button">
                <div className="content">
                  <div className="logo">
                    <img src={appleLogo} alt="" />
                  </div>
                  <p className='apple_button_text'>Registarse con Apple</p>
                </div>
              </a>
              <div className="separation">
                <hr />
                <p>o</p>
                <hr />
              </div>
              <a href="" className="create_account_button">Crear cuenta</a>
            </div>
            <p className='service_terms'>Al registrarte, aceptas los <a href="#">Términos de servicio</a> y la <a href="#">Política de privacidad</a>, incluida la política de <a href="#">Uso de Cookies</a>.</p>
            <br />
            <div>
              <h3>¿Ya tienes una cuenta?</h3>
              <div>
                <button className='twitter-button' onClick={() => setIsModalOpen(true)} >Iniciar sesión</button>
                {isModalOpen ? <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} /> : <></>}
              </div>
            </div>
          </div>

        </div>
        <footer className="footer">

          <div className="section1">
            <a href="#">Información</a>
            <a href="#"> Descarga la app de X</a>
            <a href="#"> Centro de Ayuda</a>
            <a href="#"> Condiciones de Servicio</a>
            <a href="#"> Política de Privacidad</a>
            <a href="#"> Política de cookies  </a>
            <a href="#">  Accesibilidad</a>
            <a href="#">  Información de anuncios</a>
            <a href="#">  Blog</a>
            <a href="#">  Empleos</a>
            <a href="#">  Recursos para marcas</a>
            <a href="#"> Publicidad</a>

          </div>
          <div className="section2">
            <a href="#">   Marketing</a>
            <a href="#">  X para empresas</a>
            <a href="#">  Desarrolladores</a>
            <a href="#">  Guía</a>
            <a href="#">  Configuración</a>
            <a href="#">  © 2024 X Corp.</a>
          </div>
        </footer>

      </main>
    </div>

  )
}