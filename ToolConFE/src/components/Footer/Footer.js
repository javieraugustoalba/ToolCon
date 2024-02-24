import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="piedepagina">
            
            <div className="flex justify-between">
                <div className='marcalogo'>
                    <p className="marca font-bold custom-blue">ToolCon</p>
                    <p className="textmarca custom-gray">Eficiencia que Transforma, Agiliza Tu Trabajo.</p>
                </div>
                <div className="flex gap-8">
                    <div className='nosotros'>
                        <p className="font-semibold text-lg custom-dark mb-2">Nosotros</p>
                        <p className="custom-gray"> 
                            <br/><br/><a href='about:blank'>Cómo funciona</a><br/><br/>
                            <a href='about:blank'>Características</a><br/><br/>  
                            <a href='about:blank'>Patrocinadores</a><br/><br/>
                            <a href='about:blank'>Negocios</a>
                        </p>
                    </div>
                    <div className='comunidad'>
                        <p className="font-semibold text-lg custom-dark mb-2">Comunidad</p>
                        <p className="custom-gray">
                            <br/><br/><a href='about:blank'>Events</a><br/><br/>
                                <a href='about:blank'>Blog</a><br/><br/>  
                                <a href='about:blank'>Podcast</a><br/><br/>  
                        </p>
                    </div>
                    <div className='redes'>
                        <p className="font-semibold text-lg custom-dark mb-2">Redes</p>
                        <p className="custom-gray">
                            <br/><br/><a href='about:blank'>Linkedin</a><br/><br/>
                                <a href='about:blank'>Instagram</a><br/><br/>  
                                <a href='about:blank'>X</a><br/><br/>
                                <a href='about:blank'>Facebook</a>  
                        </p>

                    </div>
                </div>
                <div className="flex justify-between items-center linea custom-border mt-4 pt-4">
                    <p className="font-semibold derechos-reservados">©2024 ToolCon. Derechos Reservados</p>
                    <div className="flex gap-6">
                        <a className="font-semibold politicas-privacidad" href='about:blank' >Políticas & Privacidad</a>
                        <a className="font-semibold politicas-terminos" href='about:blank'>Términos & Condiciones</a>
                    </div>
                </div>
            </div> 
        </div>
  );
};

export default Footer;