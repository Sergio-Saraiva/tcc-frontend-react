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
import { OrientacaoFilter } from './Filters/OrientacaoFilter';

export const OrientacaoList = props => (
  <List filters={<OrientacaoFilter />} {...props}>
    <Datagrid rowClick="edit">
      <ReferenceField source="discente_id" reference="discentes"><TextField source="name" /></ReferenceField>
      <ReferenceField source="orientador_id" reference="docentes"><TextField source="name" /></ReferenceField>
      <ReferenceField source="coorientador_id" reference="docentes"><TextField source="name" /></ReferenceField>
      <DeleteButton />
    </Datagrid>
  </List>
);

export const OrientacaoEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <ReferenceInput label="Discente" source="discente_id" reference="discentes">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput label="Orientador" source="orientador_id" reference="docentes">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput label="Coorientador" source="coorientador_id" reference="docentes">
        <SelectInput optionText="name" />
      </ReferenceInput>

    </SimpleForm>
  </Edit>
);
export const OrientacaoCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput label="Discente" source="discente_id" reference="discentes">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput label="Orientador" source="orientador_id" reference="docentes">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput label="Coorientador" source="coorientador_id" reference="docentes">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);