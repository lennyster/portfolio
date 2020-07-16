import React, { Component } from 'react';
import Netflix from '../assets/projets/Netflix.jpg';
import Twitter from '../assets/projets/Twitter.png';
import Ecommerce from '../assets/projets/E-Commerce.png';
import Undiz from '../assets/projets/Undiz.png';
import Jessica from '../assets/projets/Jessica.png'
import ModalImage, { Lightbox } from "react-modal-image";
import P4 from '../assets/projets/P4.png';
import Wysiwyg from '../assets/projets/Wysiwyg.png';
import LeTrefle from '../assets/projets/LeTrefle.jpg';

export default class Section5 extends Component {


    render(){
        const closeLightbox = () => {
            this.state.open = true;
          };
          
        return(
            <div class="row text-center d-flex flex-column py-5">
                <h2 className="my_h2 mb-5">Mes Projets</h2>
                <div class='d-flex column_vignettes'>
                    <div class="col-lg-3 col-md-12">
                        <ModalImage
                        className="vignette"
                        small={Netflix}
                        large={Netflix}
                        alt="Site de référencement de films produit avec du PHP"
                        hideZoom={false}
                        hideDownload={true}
                        />
                        <p style={{fontWeight: "bold"}} class="text-center mt-3">MyCinema</p>
                    </div>
                    <div class="col-lg-3 col-md-12">
                        <ModalImage
                        className="vignette"
                        small={Undiz}
                        large={Undiz}
                        alt="Integration d'une page en HTML et CSS "
                        hideZoom={false}
                        hideDownload={true}
                        />
                        <p style={{fontWeight: "bold"}} class="text-center mt-3">Undiz</p>
                    </div>
                    <div class="col-lg-3 col-md-12">
                        <ModalImage
                        className="vignette"
                        small={Ecommerce}
                        large={Ecommerce}
                        alt="E-commerce réalisé en React JS et Laravel"
                        hideZoom={false}
                        hideDownload={true}
                        />
                        <p style={{fontWeight: "bold"}} class="text-center mt-3">Projet E-Commerce</p>
                    </div>
                    <div class="col-lg-3 col-md-12">
                        <ModalImage
                        className="vignette"
                        small={Jessica}
                        large={Jessica}
                        alt="Site réalisé avec le CMS WordPress"
                        hideZoom={false}
                        hideDownload={true}
                        />
                        <p style={{fontWeight: "bold"}} class="text-center mt-3">Creation Sourcil</p>
                    </div>
                </div>
                <div class='d-flex column_vignettes'>
                    <div class="col-lg-3 col-md-12">
                        <ModalImage
                        className="vignette"
                        small={Twitter}
                        large={Twitter}
                        alt="Site réalisé en PHP, HTML5 et AJAX"
                        hideZoom={false}
                        hideDownload={true}
                        />
                        <p style={{fontWeight: "bold"}} class="text-center mt-3">MyTwitter</p>
                    </div>
                    <div class="col-lg-3 col-md-12">
                        <ModalImage
                        className="vignette"
                        small={P4}
                        large={P4}
                        alt="Jeu réalisé en JS"
                        hideZoom={false}
                        hideDownload={true}
                        />
                        <p style={{fontWeight: "bold"}} class="text-center mt-3">Puissance 4</p>
                    </div>
                    <div class="col-lg-3 col-md-12">
                        <ModalImage
                        className="vignette"
                        small={Wysiwyg}
                        large={Wysiwyg}
                        alt="Plugin établi en Javascript"
                        hideZoom={false}
                        hideDownload={true}
                        />
                        <p style={{fontWeight: "bold"}} class="text-center mt-3">Wysiwyg</p>
                    </div>
                    <div class="col-lg-3 col-md-12">
                        <ModalImage
                        className="vignette"
                        small={LeTrefle}
                        large={LeTrefle}
                        alt="Site réalisé avec le CMS WordPress"
                        hideZoom={false}
                        hideDownload={true}
                        />
                        <p style={{fontWeight: "bold"}} class="text-center mt-3">Le Trefle</p>
                    </div>
                </div>
            </div>
        )
    }
}