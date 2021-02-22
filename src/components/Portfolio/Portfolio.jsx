import React, { Component } from 'react';
import BudgetTracker from "../../Assets/Screenshots/budget_tracker.png"
import SavedAppt from "../../Assets/Screenshots/savedAppt.png"
import HomePage from "../../Assets/Screenshots/homepage.png"
import QuestionPage from "../../Assets/Screenshots/questionpage.png"
import FinalPage from "../../Assets/Screenshots/finalpage.png"
import DoggieDashboard from "../../Assets/Screenshots/doggieDashboard.png"
import HomepageDog from "../../Assets/Screenshots/homePageDog.png"

class Portfolio extends Component {
    render() {
        return (
          <div class ="container">
            <div class ="row">
              <div class ="col-12">
                <div class="jumbotron">
                  <div class ="row">
                    <div class ="col-12">
                      <h1 class="display-4">Portfolio</h1>
                      <hr class="my-4"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class= "row project">
              <div class= "project col-lg-6">
                <h1>Vizualize</h1>
                <p>This project was made so the user could have a pictorial representation of their goals.</p>
                <a href="https://marioreid.github.io/project-1/" target="_blank"> Click Here for Deployed Project</a><br/>
                <a href="https://github.com/MarioReid/project-1" target="_blank"> Click Here for Repository</a>
              </div>
            </div>
            
            <div class="row">
              <div class="col-lg-6 project">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                  <ol class="carousel-indicators">
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                  </ol>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src={HomePage} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                      <img src={QuestionPage} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                      <img src={FinalPage} class="d-block w-100" alt="..."/>
                    </div>
                  </div>
                  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </a>
                </div>
              </div>
            </div>

            <div class= "row project">
              <div class= "project col-lg-6">
                <h1>Day Planner</h1>
                <p>This project was to create a simple calendar application that allows a user to save events for each hour of the day. Using javascript enabled button functions to save written text in the block as well color code time blocks.</p>
                <a href="https://marioreid.github.io/day-planner/" target="_blank">Click here for Deployed Project</a><br/>
                <a href="https://github.com/MarioReid/day-planner" target="_blank">Click here for Github Repository</a>
              </div>
            </div>
            <div class = "row project">
              <div class="col-lg-6 project">
                <img 
                src={SavedAppt} class ="img-thumbnail w-100" alt="Day Planner Picture Pic"/>
              </div>
            </div> 



              <div class= "row project">
                <div class= "project col-lg-6">
                  <h1>Dog Meet Dog</h1>
                  <p>This is an application where dog owners can find dog friends for their pets.</p>
                  <a href="https://github.com/MarioReid/project2" target="_blank">Github Link for Dog Meet Dog</a><br/>
                  <a href=" https://gentle-sea-84823.herokuapp.com/" target="_blank">Heroku Link for Dog Meet Dog</a>
                </div>
              </div>
              


              
              <div class="row">
                <div class="col-lg-6 project">
                  <div id="carouselExampleIndicators2" class="carousel slide" data-bs-ride="carousel">
                    <ol class="carousel-indicators">
                      <li data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" class="active"></li>
                      <li data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1"></li>
                      <li data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src={HomepageDog} class="d-block w-100" alt="..."/>
                      </div>
                      <div class="carousel-item">
                        <img src={DoggieDashboard} class="d-block w-100" alt="..."/>
                      </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators2" role="button" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators2" role="button" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </a>
                  </div>
                </div>
              </div>

              <div class= "row project">
                <div class= "project col-lg-6">
                  <h1>Budget Tracker</h1>
                  <p>This project was to create a budget tracking application that allows a user to save transaction online and off.</p>
                  <a href="https://shielded-stream-84806.herokuapp.com/" target="_blank">Click here for Deployed Project</a><br/>
                  <a href="https://github.com/MarioReid/budget-tracker" target="_blank">Click here for Github Repository</a>
                </div>
              </div>
              <div class = "row project">
                <div class="col-lg-6 project">
                  <img
                    class="img-thumbnail w-100"
                    src={BudgetTracker}
                    alt="Budget Tracker Picture"/>
                </div>
              </div> 

          </div>
            
        
        );
    }
}

export default Portfolio;