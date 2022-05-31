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
  ReferenceField,
  ReferenceInput,
  SelectInput,
} from 'react-admin';
import { NameFilter } from './Filters/NameFilter';

export const ComissaoList = props => (
  <List filters={<NameFilter />} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <ReferenceField source="tae_id" reference="taes">
        <TextField source="name" />
      </ReferenceField>
      <DeleteButton />
    </Datagrid>
  </List>
);

export const ComissaoEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" />
      <ReferenceInput label="Técnico Adm" source="tae_id" reference="taes">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
export const ComissaoCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <ReferenceInput label="Técnico Adm" source="tae_id" reference="taes">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);