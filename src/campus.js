import React from 'react';
import { List, Create, Datagrid, TextField, EmailField, DateField, BooleanField, Edit, SimpleForm, TextInput, DateInput, BooleanInput, ReferenceInput, ReferenceField, SelectInput, Filter } from 'react-admin';


export const CampusList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <ReferenceField source="dean.id" reference="user" label='Dean'>
                <TextField source="name" />
            </ReferenceField>
            <TextField source="address" />
            <TextField source="webUrl" />
            <TextField source="calendarUrl" />
        </Datagrid>
    </List>
);

export const CampusEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <ReferenceInput source="dean.id" reference="user" label="Dean">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="address" />
            <TextInput source="webUrl" />
            <TextInput source="calendarUrl" />
        </SimpleForm>
    </Edit>
);

export const CampusCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <ReferenceInput source="dean.id" reference="user" label="Dean">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="address" />
            <TextInput source="webUrl" />
            <TextInput source="calendarUrl" />
        </SimpleForm>
    </Create>
);