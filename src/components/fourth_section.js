import React, { Component } from 'react';

import at from '../assets/At.png'
import hand from '../assets/Hand.png'
import phone from '../assets/Phone.png'
import cv from '../assets/CV_LT.pdf'

export default class Section4 extends Component {
    render(){
        return(
            <div class="row py-5 my-5 justify-content-center three_icons">
                <div class="col-lg-4 text-center col-md-12">
                    <img class="icon_section4" src={at} />
                    <a href="mailto:eris.tandou@epitech.eu"><h4 class="py-3 section4_h4">eris.tandou@epitech.eu</h4></a>
                </div>
                <div class="col-lg-4 text-center col-md-12">
                    <img class="icon_section4" src={hand} />
                    <a href="https://www.malt.fr/profile/lt1"><h4 class="py-3 section4_h4">https://www.malt.fr/profile/lt1</h4></a>
                </div>
                <div class="col-lg-4 text-center col-md-12">
                    <img class="icon_section4" src={phone} />
                    <a href="telto:+33645433908"><h4 class="py-3 section4_h4">+33 6 45 43 39 08</h4></a>
                </div>
                <a class="btn btn-outline-primary bp my-3" href={cv}>Mon CV</a>
            </div>
        )
    }
}