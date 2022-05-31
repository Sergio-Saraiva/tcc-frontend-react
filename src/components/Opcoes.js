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
  ReferenceField,
  ReferenceInput,
} from 'react-admin';
import { OpcoesFilter } from './Filters/OpcoesFilter';

export const OpcoesList = props => (
  <List filters={<OpcoesFilter />} {...props}>
    <Datagrid rowClick="edit">
      <ReferenceField source="pergunta_id" reference="perguntas">
        <TextField source="pergunta" />
      </ReferenceField>
      <TextField label="Opção" source="name" />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const OpcoesEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput label="Opção" source="name" />
      <ReferenceInput label="Pergunta" source="pergunta_id" reference="perguntas">
        <SelectInput optionText="pergunta" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
export const OpcoesCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput label="Opção" source="name" />
      <ReferenceInput label="Pergunta" source="pergunta_id" reference="perguntas">
        <SelectInput optionText="pergunta" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);