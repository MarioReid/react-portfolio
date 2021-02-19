import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer class="footer position-fixed mt-auto py-3 bg-light text-center">
          <div class="container">
            <span class="text-muted">&copy;2021 Mario Reid</span>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
