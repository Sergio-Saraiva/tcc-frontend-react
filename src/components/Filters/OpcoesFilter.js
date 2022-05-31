import * as React from "react";
import { Filter, TextInput } from 'react-admin';

export const OpcoesFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Buscar Opção" source="opcao" alwaysOn />
  </Filter>
);