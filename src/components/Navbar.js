import React from "react";
import { Link } from "gatsby";

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
      <header className="header">
        <div class="row">
          <div class="header-container">
            <div class="header-title">
              <Link to="/">
                Fin-De<span class="bumpit-baby">-</span>Siècle
              </Link>
            </div>
            <nav role="navigation" id="main-nav">
              <ul>
                <li>
                  <Link to="/">home</Link>
                </li>
                <li>
                  <Link to="/contact">contact</Link>
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
