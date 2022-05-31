import * as React from "react";
import { Filter, TextInput } from 'react-admin';

export const DisciplinaDocenteFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Buscar Disciplina" source="disciplinaName" alwaysOn />
    <TextInput label="Buscar Docente" source="docenteName" alwaysOn />
  </Filter>
);