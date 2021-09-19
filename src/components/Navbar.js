import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    return (
      <header>
        <div class="row">
          <div class="header-container">
            <div class="header-title">
              <a href="/index.html">
                Fin-De<span class="bumpit-baby">-</span>Siècle
              </a>
            </div>
            <nav role="navigation" id="main-nav">
              <ul>
                <li>
                  <a href="/index.html">home</a>
                </li>
                <li>
                  <a href="/contact.html">contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
};

export default Navbar;
