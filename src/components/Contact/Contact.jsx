import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                <div class="container">
             <div class="row mt-5">
                 <div class="col-8">
                    <div class="jumbotron">
                        <div class="row mt-5">
                            <div class="col-12">
                                <h1 class="display-4">Contact</h1>
                                <hr class="my-4"/>
                            </div>
                        </div>
                        <div class ="row">
                            <div class ="col-12">
                                <form>
                                    <div class="form-group">
                                      <label for="exampleInputEmail1">Name</label>
                                      <input placeholder="Name" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    </div>
                                    <div class="form-group">
                                      <label for="exampleInputPassword1">Email</label>
                                      <input placeholder="Email" type="email" class="form-control" id="exampleInputPassword1"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleFormControlTextarea1">Message</label>
                                        <textarea placeholder="Message" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                      </div>
                                    <button type="submit" class="btn">Submit</button>
                                  </form>
                                </div>
                            </div>
                        </div>
                      </div>
                 </div>
             </div> 
          </div>
        );
    }
}

export default Contact;