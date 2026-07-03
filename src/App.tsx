import React, { useMemo } from 'react';
import { RouterProvider } from '@tanstack/react-router';
import { getRouter } from './router';

export default function App() {
  // Inicializa o roteador do Lovable com as configurações corretas
  const router = useMemo(() => getRouter(), []);

  return <RouterProvider router={router} />;
}
