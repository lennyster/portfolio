import React, { Component } from 'react'

export default class Section8 extends Component {
    render(){
        return(
            <div class="row justify-content-center align-items-center flex-column py-5">
                <h2 class="my_h2 mb-4">Contact</h2>
                <form style={{width: "50%"}} class="text-center" action="mailto:eris.tandou@epitech.eu" ENCTYPE="text/plain" method="post">
                    <div class="form-group px-5">
                        <label for="exampleInputPassword1">Sujet</label>
                        <input type="text" class="form-control"></input>
                    </div>
                    <div class="form-group px-5">
                        <label for="exampleInputPassword1">Message</label>
                        <textarea class="form-control" name="message" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Envoyer</button>
                </form>
            </div>
        )
    }
}