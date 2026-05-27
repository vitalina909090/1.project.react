import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router';

const ErrorBoudary = () => {
    const error = useRouteError();

    if(isRouteErrorResponse(error)){
        return (
            <div>
                <h1>{error.status}</h1>
                <h2>{error.statusText}</h2>
            </div>
        );
    }
    return (
        <div>
            Что-то пошло не так...
        </div>
    );
}

export default ErrorBoudary;
