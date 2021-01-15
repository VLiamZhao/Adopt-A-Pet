// Mostly code from reactjs.org/docs/error-boundaries.html

import React, { Component } from "react";
import { Link, navigate } from "@reach/router";
import Details from "./Details";

class errorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }

  componentDidUpdate() {
    //every time props or state changes
    if (this.state.hasError) {
      setTimeout(() => navigate("/"), 5000);
    }
  }
  render() {
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing.
          <Link to="/">Click here</Link> to go back to the home page or wait
          five seconds.
        </h1>
      );
    }
    return this.props.children;
  }
}
export default errorBoundary;
