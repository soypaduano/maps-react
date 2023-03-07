import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false, errorDesc: "" };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.

      return { hasError: true, errorDesc: error };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      console.error(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return (
            <div className="error-page">
                <h1 style={{"font-size": "80px"}}><i class="fa-solid fa-triangle-exclamation"></i></h1>
                <h1>Ha habido un error.</h1>
                <h2>Contacta con Padu para reportar el error</h2>
                <h3><a href="mailto:sebastian.paduano.m@gmail.com"> sebastian.paduano.m@gmail.com </a></h3>
                <h3>Motivo del error:</h3>
                <p>{this.state.errorDesc.message}</p>
            </div>
        ) 
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary;