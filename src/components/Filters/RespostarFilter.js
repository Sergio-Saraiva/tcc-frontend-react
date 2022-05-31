import * as React from "react";
import { Filter, TextInput } from 'react-admin';

export const RespostasFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Buscar Fichas" source="fichas" alwaysOn />
    <TextInput label="Buscar Discente" source="discente" alwaysOn />
    <TextInput label="Buscar Docente" source="docente" alwaysOn />
    <TextInput label="Buscar Tae" source="tae" alwaysOn />
  </Filter>
);