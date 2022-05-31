import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  BooleanField,
  Edit,
  SimpleForm,
  TextInput,
  BooleanInput,
  PasswordInput,
  Create,
  DeleteButton
} from 'react-admin';
import { EmailFilter } from './Filters/EmailFilter';

export const DocentesList = props => (
  <List filters={<EmailFilter />} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="areaConcetracao" />
      <TextField source="linhaPesquisa" />
      <TextField source="ppg" />
      <BooleanField source="coordenador" />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const DocentesEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" />
      <TextInput source="email" />
      <BooleanInput source="status" />
      <TextInput source="areaConcetracao" />
      <TextInput source="linhaPesquisa" />
      <TextInput source="ppg" />
      <BooleanInput source="coordenador" />
      <PasswordInput source="password" />
    </SimpleForm>
  </Edit>
);
export const DocentesCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="areaConcetracao" />
      <TextInput source="linhaPesquisa" />
      <TextInput source="ppg" />
      <BooleanInput source="coordenador" />
      <PasswordInput source="password" />
    </SimpleForm>
  </Create>
);