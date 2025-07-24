import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error for debugging
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // Check if it's a routing cancellation error
    if (error.message && error.message.includes('Cancel rendering route')) {
      // Reset the error state for routing cancellation errors
      setTimeout(() => {
        this.setState({ hasError: false, error: null });
      }, 100);
    }
  }

  render() {
    if (this.state.hasError) {
      // Check if it's a routing cancellation error
      if (this.state.error && this.state.error.message && 
          this.state.error.message.includes('Cancel rendering route')) {
        // Don't show error UI for routing cancellation, just render children
        return this.props.children;
      }

      // Fallback UI for other errors
      return (
        <div className="min-h-screen bg-darker-blue flex items-center justify-center text-white">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
            <p className="text-gray-300 mb-6">We&apos;re sorry, but something unexpected happened.</p>
            <button
              onClick={() => this.setState({ hasError: false, error: null })}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              Try again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;