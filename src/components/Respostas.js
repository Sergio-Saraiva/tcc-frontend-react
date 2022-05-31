import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
} from 'react-admin';
import { RespostasFilter } from './Filters/RespostarFilter';

export const RespostasList = props => (
  <List filters={<RespostasFilter />} {...props}>
    <Datagrid>
      <ReferenceField source="docente_id" reference="docentes">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="discente_id" reference="discentes">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="tae_id" reference="taes">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="fichas_id" reference="fichas">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="perguntas_id" reference="perguntas">
        <TextField source="pergunta" />
      </ReferenceField>
      <ReferenceField source="opcao_id" reference="opcoes">
        <TextField source="name" />
      </ReferenceField>
      <TextField label="Resposta Subjetiva" source="subjective_answer" />
    </Datagrid>
  </List>
);