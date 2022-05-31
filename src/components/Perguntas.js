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
import { PerguntasFilter } from './Filters/PerguntasFilter';

export const PerguntasList = props => (
  <List filters={<PerguntasFilter />} {...props}>
    <Datagrid rowClick="edit">
      <ReferenceField label="Ficha" source="ficha_id" reference="fichas">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="pergunta" />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const PerguntasEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput label="Pergunta" source="pergunta" />
      <ReferenceInput label="Ficha" source="ficha_id" reference="fichas">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
export const PerguntasCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput label="Pergunta" source="pergunta" />
      <ReferenceInput label="Ficha" source="ficha_id" reference="fichas">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);