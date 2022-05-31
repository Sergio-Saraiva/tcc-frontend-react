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
  BooleanField,
  NumberInput,
  BooleanInput,
} from 'react-admin';
import { NameFilter } from './Filters/NameFilter';

export const DisciplinasList = props => (
  <List filters={<NameFilter />} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <TextField source="ano" />
      <TextField source="semestre" />
      <BooleanField source="status" />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const DisciplinasEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" />
      <NumberInput source="ano" />
      <NumberInput source="semestre" />
      <BooleanInput source="status" />
      {/* <ReferenceArrayInput reference="docentes" source="docentes">
        <SelectArrayInput>
          <ChipField source="name" />
        </SelectArrayInput>
      </ReferenceArrayInput> */}
    </SimpleForm>
  </Edit>
);
export const DisciplinasCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <NumberInput source="ano" />
      <NumberInput source="semestre" />
    </SimpleForm>
  </Create>
);