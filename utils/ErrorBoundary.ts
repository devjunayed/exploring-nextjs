"use client"
import { Component, ReactNode } from "react";

interface IErrorBoundaryProps{
    fallback: ReactNode,
    children: ReactNode
}

interface IStateProps{
    hasError: boolean
}
class ErrorBoundary extends Component<IErrorBoundaryProps, IStateProps>{
    constructor(props: IErrorBoundaryProps){
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(): IStateProps{
     return {hasError: true}
    }
    
    render(): ReactNode{
        if(this.state.hasError){
            return this.props.fallback;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;