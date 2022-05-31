import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  Edit,
  SimpleForm,
  TextInput,
  BooleanInput,
  PasswordInput,
  Create,
  DeleteButton,
  DateField,
  DateInput,
} from 'react-admin';
import { EmailFilter } from './Filters/EmailFilter';

export const DiscentesList = props => (
  <List filters={<EmailFilter />} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="areaConcetracao" />
      <TextField source="linhaPesquisa" />
      <DateField source="edital" />
      <DateField source="defesa" />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const DiscentesEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="areaConcetracao" />
      <BooleanInput source="status" />
      <TextInput source="linhaPesquisa" />
      <DateInput source="edital" />
      <DateInput source="defesa" />
      <PasswordInput source="password" />
    </SimpleForm>
  </Edit>
);
export const DiscentesCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="areaConcetracao" />
      <TextInput source="linhaPesquisa" />
      <DateInput source="edital" />
      <DateInput source="defesa" />
      <PasswordInput source="password" />
    </SimpleForm>
  </Create>
);