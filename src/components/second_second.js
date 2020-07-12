import React, { Component } from 'react';
import avatar from '../assets/Avatar.png';


export default class Section2 extends Component {
    render(){
        return (
            <div class="row">            
                <div class="col-12 py-5 d-flex justify-content-center align-items-center flex-column">
                    <h1 className="first_title">Developer Front-end & WordPress</h1>
                    <p className="second_title">Que peut faire la créativité pour vous ?</p>
                    <div class="avatar-part">
                        <img class="avatar" src={avatar} />
                    </div>
                </div>
            </div>
        )
    }
}