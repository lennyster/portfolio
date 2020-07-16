import React, { Component } from 'react'
import react from '../assets/languages/react.png'
import php from '../assets/languages/php.png'
import javascript from '../assets/languages/javascript.png'
import html from '../assets/languages/html-5.png'
import css from '../assets/languages/css.png'
import nodejs from '../assets/languages/nodejs.png'

export default class Section9 extends Component{
    render(){
        return(
            <div class="row text-center flex-column py-5">
                <h2 className="my_h2 mb-5">Mes Competences</h2>
                <div class="les_gifs">
                    <div class="col-lg-2 col-md-12 ">
                        <img src={react} width="30%" allowFullScreen />
                        <p style={{fontWeight: "bold"}} class="text-center mt-3">React</p>
                    </div>
                    <div class="col-lg-2 col-md-12" >
                        <img style={{height: "auto"}} src={php} width="30%"  allowFullScreen />
                        <p style={{fontWeight: "bold"}} class="text-center mt-3">PHP</p>
                    </div>
                    <div class="col-lg-2 col-md-12">
                        <img style={{height: "auto"}} src={javascript} width="30%"  allowFullScreen />
                        <p style={{fontWeight: "bold"}} class="text-center mt-3">JS</p>
                    </div>
                    <div class="col-lg-2 col-md-12">
                        <img style={{height: "auto"}} src={nodejs} width="30%" height="30%"  allowFullScreen />
                        <p style={{fontWeight: "bold"}} class="text-center mt-3">NodeJS</p>
                    </div>
                    <div class="col-lg-2 col-md-12">
                        <img style={{height: "auto"}} src={html} width="30%" height="30%"  allowFullScreen />
                        <p style={{fontWeight: "bold"}} class="text-center mt-3">HTML 5</p>
                    </div>
                    <div class="col-lg-2 col-md-12">
                        <img style={{height: "auto"}} src={css} width="30%" height="30%"  allowFullScreen />
                        <p style={{fontWeight: "bold"}} class="text-center mt-3">CSS3</p>
                    </div>
                </div>
            </div>
        )
    }
}