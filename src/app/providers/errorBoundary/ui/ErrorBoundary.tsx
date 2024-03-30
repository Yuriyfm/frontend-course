import React, { Component, type ErrorInfo, Suspense } from 'react'
import { PageError } from 'widgets/PageError'

interface ErrorBoundaryProps {
  children: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor (props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (error: Error) {
    // Обновить состояние, чтобы следующий рендер показал запасной UI.
    return { hasError: true }
  }

  componentDidCatch (error: Error, errorInfo: ErrorInfo) {
    // Вы можете логировать ошибку с помощью сервиса отчетов об ошибках
    console.error('Uncaught error:', error, errorInfo)
  }

  render () {
    if (this.state.hasError) {
      // Вы можете отрендерить любой запасной UI
      return (
        <Suspense fallback={''}>
          <PageError/>
        </Suspense>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
