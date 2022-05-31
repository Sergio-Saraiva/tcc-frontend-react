import * as React from "react";
import { Filter, TextInput } from 'react-admin';

export const DisciplinaDiscenteFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Buscar Disciplina" source="disciplinaName" alwaysOn />
    <TextInput label="Buscar Discente" source="discenteName" alwaysOn />
  </Filter>
);