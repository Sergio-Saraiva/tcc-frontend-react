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
import { DisciplinaDiscenteFilter } from './Filters/DisciplinaDiscenteFilter';

export const DisciplinaHasDiscentesList = props => (
  <List filters={<DisciplinaDiscenteFilter />} {...props}>
    <Datagrid rowClick="edit">
      <ReferenceField source="disciplina_id" reference="disciplinas"><TextField source="name" /></ReferenceField>
      <ReferenceField source="discente_id" reference="discentes"><TextField source="name" /></ReferenceField>
      <TextField source="horario" />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const DisciplinaHasDiscentesEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <ReferenceInput label="Disciplina" source="disciplina_id" reference="disciplinas">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput label="Discente" source="discente_id" reference="discentes">
        <SelectInput optionText="name" />
      </ReferenceInput>

      <TextInput source="horario" />

    </SimpleForm>
  </Edit>
);
export const DisciplinaHasDiscentesCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput label="Disciplina" source="disciplina_id" reference="disciplinas">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput label="Discente" source="discente_id" reference="discentes">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="horario" />
    </SimpleForm>
  </Create>
);