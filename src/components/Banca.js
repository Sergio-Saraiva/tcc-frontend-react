import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  SimpleForm,
  Create,
  DeleteButton,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  SingleFieldList,
  ChipField,
  ArrayField,
  ReferenceArrayInput,
  SelectArrayInput,
} from 'react-admin';

import { OrientacaoFilter } from './Filters/OrientacaoFilter';

export const BancaList = props => (
  <List filters={<OrientacaoFilter />} {...props}>
    <Datagrid rowClick={() => alert('Não é possivel editar esta tabela.')}>
      <ArrayField label="Avaliadores" source="orientacaoHasBancas">
        <SingleFieldList>
          <ReferenceField source="id" reference="docentes">
            <ChipField source="name" />
          </ReferenceField>
        </SingleFieldList>
      </ArrayField>
      <ReferenceField source="discente_id" reference="discentes"><TextField source="name" /></ReferenceField>
      <ReferenceField source="orientador_id" reference="docentes"><TextField source="name" /></ReferenceField>
      <ReferenceField source="coorientador_id" reference="docentes"><TextField source="name" /></ReferenceField>
      <DeleteButton />
    </Datagrid>
  </List>
);

// export const BancaEdit = props => (
//   <Edit {...props}>
//     <SimpleForm>
//       <TextInput source="id" disabled />
//       <ReferenceArrayInput source="orientacaoHasBancas" reference="docentes">
//         <SelectArrayInput>
//           <ChipField source="name" />
//         </SelectArrayInput>
//       </ReferenceArrayInput>
//       <ReferenceInput label="Discente" source="discente_id" reference="discentes">
//         <SelectInput optionText="name" />
//       </ReferenceInput>

//     </SimpleForm>
//   </Edit>
// );
export const BancaCreate = props => {
  console.log(props)
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput label="Avaliadores" reference="docentes" source="avaliadores">
          <SelectArrayInput>
            <ChipField source="name" />
          </SelectArrayInput>
        </ReferenceArrayInput>

        <ReferenceInput label="Discente" source="discente_id" reference="discentes">
          <SelectInput optionText="name" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  )
};