import React, { Component } from 'react'
import Zlatan from '../assets/Zlatan.gif';
import VideoGames from '../assets/VideoGames.gif';
import Music from '../assets/Music.gif';
import Mode from '../assets/Mode.gif';


export default class Section6 extends Component {
    render(){
        return(
            <div class="row text-center flex-column py-5">
                <h2 className="my_h2 mb-5">Mes Hobbies</h2>
                <div class="les_gifs">
                    <div class="col-lg-3 col-md-12 ">
                        <img src={Zlatan} width="100%" class="giphy-embed gif" allowFullScreen />
                        <p style={{fontWeight: "bold"}} class="text-center mt-3">Football</p>
                    </div>
                    <div class="col-lg-3 col-md-12" >
                        <img style={{height: "auto"}} src={VideoGames} width="100%" class="giphy-embed gif" allowFullScreen />
                        <p style={{fontWeight: "bold"}} class="text-center mt-3">Jeux Videos</p>
                    </div>
                    <div class="col-lg-3 col-md-12">
                        <img style={{height: "auto"}} src={Music} width="100%" class="giphy-embed gif" allowFullScreen />
                        <p style={{fontWeight: "bold"}} class="text-center mt-3">Musique</p>
                    </div>
                    <div class="col-lg-3 col-md-12">
                        <img style={{height: "auto"}} src={Mode} width="100%" class="giphy-embed gif" allowFullScreen />
                        <p style={{fontWeight: "bold"}} class="text-center mt-3">Mode</p>
                    </div>
                </div>
            </div>
        )
    }
}