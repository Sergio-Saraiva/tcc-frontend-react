import * as React from "react";
import { Filter, TextInput } from 'react-admin';

export const NameFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Buscar Nome" source="name" alwaysOn />
  </Filter>
);