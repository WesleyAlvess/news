// import Link
import { Link } from 'react-router-dom';

import React from 'react';

const PageNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops! Página não encontrada</h1>
            <p className="text-lg text-gray-600 mb-8">A página que você está procurando não foi encontrada.</p>
            <h1 className='font-bold text-xl'>Erro 404</h1>
            <Link to="/" className="text-blue-600 hover:underline">Voltar para a página inicial</Link>
        </div>
    );
};

export default PageNotFound;
