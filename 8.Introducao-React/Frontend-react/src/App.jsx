import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Layout from './layout/Layout';
import ListaAlunos from './alunos/ListaAlunos';
import FormAlunos from './alunos/FormAlunos';
import ListaCursos from './cursos/ListaCursos';
import FormCursos from './cursos/FormCursos';
import Home from './Home';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/alunos" element={<ListaAlunos />} />
          <Route path="/alunos/criar" element={<FormAlunos />} />
          <Route path="/alunos/editar/:codigo" element={<FormAlunos />} />
          <Route path="/alunos/deletar/:codigo" element={<FormAlunos />} />
          <Route path="/cursos" element={<ListaCursos />} />
          <Route path="/cursos/criar" element={<FormCursos />} />
          <Route path="/cursos/editar/:codigo" element={<FormCursos />} />
          <Route path="/cursos/deletar/:codigo" element={<FormCursos />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}