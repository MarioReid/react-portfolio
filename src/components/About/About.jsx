import React, { Component } from 'react';

import ProfilePic from "../../Assets/Images/pic2.JPG";

class About extends Component {
    render() {
        return (
            <div>
                <div class="container row">
      <div class="col-5 m-5">
        <div class="row">
          <div class="background col-4">
            <h1>About Me</h1>
            <hr class="my-6" />
            <img
              class="img-me"
              src={ProfilePic}
              alt="Smile Pic"
              // style="margin: 3%"
            />
            <p>
              Mario Reid is currently a student completing Georgia Tech's
              Bootcamp for Full Stack Web Development. With these new skills
              obtained, he hopes to start a new career in the tech field with a
              hunger to learn. He has an Associates Degree in Accounting from
              Chattahoochee Technical College received in 2016. He worked as
              Compliance Officer for the past 13 years with traveling medical
              physicist in North Atlanta.
            </p>
            <p>
              He is a true family man spending most of his time with his wife
              and 1 year old son who love going to the parks and beach. In his
              free time he is riding motorcycles, on the lake with his boat or
              playing poker with friends. Keeping the passport updated, he is
              anxiously waiting for international air travel to start again so
              he can continue traveling and exploring different cultures.
            </p>
          </div>
        </div>
      </div>
      <div class="col-5 m-5">
        <div class="row">
          <div class="background col-4">
            <h1>My Info</h1>
            <hr class="my-6" />
            <p>
              Telephone: 678-570-6647
            </p>
            <p>
              Email: <a href="mario.reid@gmail.com">mario.reid83@gmail.com</a>
            </p>
            <p>
              Github:
              <a href="https://github.com/MarioReid">github.com/MarioReid</a>
            </p>
            <p>
              LinkedIn:
              <a href="https://www.linkedin.com/in/marioreid/"
                >linkedin.com/in/marioreid</a
              >
            </p>
            <p>
              Resume:
              <a
                href="https://drive.google.com/file/d/1ogUQ5MTKxbafnSin62ns7DxH389raIjh/view?usp=sharing"
                >Mario Reid</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
            </div>
        );
    }
}

export default About;