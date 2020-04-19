import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";


const NavigationComponent = props => {
  const dynamicLink = (route, linkText) => {
    return (
      <div className="nav-link-wrapper">
        <NavLink to={route} activeClassName="nav-link-active">
          {linkText}
        </NavLink>
      </div>
    );
  };


  return (
      <div className="nav-wrapper">
        <header>
        Angela's Widget Homework
        </header>
        <h3>
        Credit: Ryan 'Lord of Darkness' Curtis & his mad, magical, widget wizardry

        </h3>
      
          {/* <div className="nav-link-wrapper">
            <NavLink exact to="/" activeClassName="nav-link-active">
              <button>
                Home
              </button>
            </NavLink>
          </div> */}

          <div className="nav-link-wrapper">
            <NavLink to="/addSub" activeClassName="nav-link-active">
              <button>
                 Add / Sub
              </button>
            </NavLink>
          </div>

          <div className="nav-link-wrapper">
            <NavLink to="/clock" activeClassName="nav-link-active">
              <button>
                Clock
              </button>
            </NavLink>
          </div>

       

          {/* <div className="nav-link-wrapper">
            <NavLink to="/growShrink" activeClassName="nav-link-active">
              <button>
                Grow and Shrink
              </button>
            </NavLink>
          </div> */}

          <div className="nav-link-wrapper">
            <NavLink to="/hideMe" activeClassName="nav-link-active">
              <button>
                Show Me / Hide Me
              </button>
            </NavLink>
          </div>

          <div className="nav-link-wrapper">
            <NavLink to="/movingText" activeClassName="nav-link-active">
              <button>
                Moving Text
              </button>
            </NavLink>
          </div>

          <div className="nav-link-wrapper">
            <NavLink to="/toggle-me" activeClassName="nav-link-active">
              <button>
                Toggle Me
              </button>
            </NavLink>
          </div>
    </div>

     );
};

export default withRouter(NavigationComponent);