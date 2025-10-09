import React from 'react';

export default function Footer(){
  return (
    <footer className="bg-light mt-5 py-3">
      <div className="container d-flex justify-content-between small">
        <div>© {new Date().getFullYear()} WoodWork</div>
        <div>Contato: (xx) xxxxx-xxxx • <a href="#privacy">Política de Privacidade</a></div>
      </div>
    </footer>
  );
}
