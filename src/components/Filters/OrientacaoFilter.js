import * as React from "react";
import { Filter, TextInput } from 'react-admin';

export const OrientacaoFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Buscar Discente" source="discenteName" alwaysOn />
    <TextInput label="Buscar Orientador" source="orientadorName" alwaysOn />
    <TextInput label="Buscar Coorientador" source="coorientadorName" alwaysOn />
  </Filter>
);