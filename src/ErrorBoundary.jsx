import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch({ error, info }) {
    // Log into trackjs or newrelic
    console.error("ErrorBoundary compoment caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an error with this listing{" "}
          <Link to="/">Click here to go back to home page</Link>
        </h2>
      );
    }
    // if no error then pass through
    return this.props.children;
  }
}

export default ErrorBoundary;
