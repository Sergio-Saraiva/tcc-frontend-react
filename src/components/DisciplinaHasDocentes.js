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
import { DisciplinaDocenteFilter } from './Filters/DisciplinaDocenteFilter';

export const DisciplinaHasDocentesList = props => (
  <List filters={<DisciplinaDocenteFilter />} {...props}>
    <Datagrid rowClick="edit">
      <ReferenceField source="disciplina_id" reference="disciplinas"><TextField source="name" /></ReferenceField>
      <ReferenceField source="docente_id" reference="docentes"><TextField source="name" /></ReferenceField>
      <TextField source="horario" />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const DisciplinaHasDocentesEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <ReferenceInput label="Disciplina" source="disciplina_id" reference="disciplinas">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput label="Docente" source="docente_id" reference="docentes">
        <SelectInput optionText="name" />
      </ReferenceInput>

      <TextInput source="horario" />

    </SimpleForm>
  </Edit>
);
export const DisciplinaHasDocentesCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput label="Disciplina" source="disciplina_id" reference="disciplinas">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput label="Docente" source="docente_id" reference="docentes">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="horario" />
    </SimpleForm>
  </Create>
);