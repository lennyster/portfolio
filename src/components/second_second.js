import React, { Component } from 'react';
import avatar from '../assets/Avatar.png';
import france from '../assets/france.png'
import uk from '../assets/united-kingdom.png'



export default class Section2 extends Component {
    render(){
        return (
            <div class="row py-5">            
                <div class="col-12 py-5 d-flex text-center justify-content-center align-items-center flex-column">
                    <h1 className="first_title">Developper Front-end & WordPress</h1>
                    <p className="second_title">Que peut faire la créativité pour vous ?</p>
                    <div class="avatar-part">
                        <img class="avatar" src={avatar} />
                    </div>
                    <div className="lang">
                        <img height="30"  class="mr-2" src={france} ></img>
                        <img height="30" src={uk} ></img>
                    </div>
                </div>
            </div>
        )
    }
}