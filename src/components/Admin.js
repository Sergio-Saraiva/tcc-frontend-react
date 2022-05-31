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
} from 'react-admin';
import { EmailFilter } from './Filters/EmailFilter';

export const AdminsList = props => (
  <List filters={<EmailFilter />} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <EmailField source="email" />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const AdminsEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" />
      <TextInput source="email" />
      <BooleanInput source="status" />
      <PasswordInput source="password" />
    </SimpleForm>
  </Edit>
);
export const AdminsCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" />
      <PasswordInput source="password" />
    </SimpleForm>
  </Create>
);