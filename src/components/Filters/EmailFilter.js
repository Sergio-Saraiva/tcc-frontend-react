import * as React from "react";
import { Filter, TextInput } from 'react-admin';

export const EmailFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Buscar email" source="email" alwaysOn />
  </Filter>
);