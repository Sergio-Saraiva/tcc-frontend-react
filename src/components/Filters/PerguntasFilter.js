import * as React from "react";
import { Filter, TextInput } from 'react-admin';

export const PerguntasFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Buscar Pergunta" source="pergunta" alwaysOn />
  </Filter>
);