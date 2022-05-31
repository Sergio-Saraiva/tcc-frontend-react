import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  Edit,
  SimpleForm,
  TextInput,
  Create,
  DeleteButton,
  SelectInput,
  FunctionField,
} from 'react-admin';
import { NameFilter } from './Filters/NameFilter';

const typeAccessTranslate = {
  do: 'Docentes',
  di: 'Discentes',
  t: 'Taes',
  all: 'Todos',
  dodi: 'Docentes e Discentes',
  dot: 'Docentes e Taes',
  dit: 'Discentes e Taes',
}

export const TemasList = props => (
  <List filters={<NameFilter />} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <FunctionField
        label="Tipo de acesso"
        render={record => typeAccessTranslate[record.type_access]}
      />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const TemasEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" />
      <SelectInput label="Tipo de acesso" source="type_access" choices={[
        { id: 'do', name: 'Docentes' },
        { id: 'di', name: 'Discentes' },
        { id: 't', name: 'Taes' },
        { id: 'all', name: 'Todos' },
        { id: 'dodi', name: 'Docentes e Discentes' },
        { id: 'dot', name: 'Docentes e Taes' },
        { id: 'dit', name: 'Discentes e Taes' },
      ]} />
    </SimpleForm>
  </Edit>
);
export const TemasCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <SelectInput label="Tipo de acesso" source="type_access" choices={[
        { id: 'do', name: 'Docentes' },
        { id: 'di', name: 'Discentes' },
        { id: 't', name: 'Taes' },
        { id: 'all', name: 'Todos' },
        { id: 'dodi', name: 'Docentes e Discentes' },
        { id: 'dot', name: 'Docentes e Taes' },
        { id: 'dit', name: 'Discentes e Taes' },
      ]} />
    </SimpleForm>
  </Create>
);