import React, { Component } from 'react';
import Diplome from '../assets/Graduation.png'
import Idea from '../assets/Idea.png'

export default class Section7 extends Component {
    render(){
        return (
            <div class="row text-center py-5 d-flex flex-column">
                <h2 class="my_h2 mb-4">Mon Parcours</h2>
                <div class='les_gifs'>
                    <div class="col-lg-6 col-md-12 ">
                        <img style={{width: 100}} src={Diplome} />
                        <h3 className="title_exp py-4">Formation</h3>
                        <h4>Samsung Campus 2019 - 2020</h4>
                        <div class="align-items-center" style={{height:"auto"}}>
                            <p className="px-5">Je suis actuellement étudiant au Samsung Campus, dans laquelle j'ai réalisé de nombreux projets. Cette formation m'a permis d'expérimenter d'approfondir mes connaissances en PHP, JS et CSS. Et d'apprendre de nouveaux Framework tel que Laravel, Symfony, Node JS et React.</p>
                        </div>
                        <h4>OpenClassrooms Juin 2019 - Janvier 2020</h4>
                        <div class="align-items-center" style={{height:"auto"}}>
                            <p className="px-5">J'ai commencé la formation diplômante d'OpenClassrooms en tant que Développeur Web Junior dans le but d'apprendre le langage HTML5, CSS3, JAVASCRIPT que j'ai  terminé en Janvier 2020</p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <img style={{width: 100}} src={Idea} />
                        <h3 className="title_exp py-4">Experience Professionnelle</h3>
                        <h4>Gatzbee 2016-2017</h4>
                        <p className="px-5">J'ai pu développer un site internet vitrine en HTML5 et CSS3 en tant qu'associé de l'entreprise Gatzbee. Mon rôle était de gérer l'équipe technique composée de deux développeurs web et un designer.</p>
                        <h4>Freelance depuis 2017</h4>
                        <p className="px-5">Depuis 2017, je développe des sites internet grâce au CMS Wordpress. Les sites réalisés sont avec un template ou avec une maquette photoshop à intégrer.</p>
                    </div>
                </div>
            </div>
        )
    }
}