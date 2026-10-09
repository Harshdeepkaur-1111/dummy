import React, { Component, type ReactNode } from "react";
import { RefreshCw, AlertCircle } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20 bg-[#050505] text-white">
          <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center mb-6">
            <AlertCircle className="w-6 h-6 text-[#D4AF37]" />
          </div>
          <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] mb-3">Notice</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">Content Temporarily Unavailable</h2>
          <p className="text-white/60 text-sm max-w-md mb-8">
            We encountered a temporary connection issue while loading this section. Please refresh to load the latest version.
          </p>
          <button
            onClick={this.handleReload}
            className="inline-flex items-center gap-2 bg-[#D4AF37] text-black px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-white transition cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
