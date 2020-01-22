import React from 'react';
import { List, Create,Datagrid, TextField, EmailField, DateField, BooleanField, Edit, SimpleForm, TextInput, DateInput, BooleanInput, ReferenceInput, ReferenceField, SelectInput, Filter } from 'react-admin';


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
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
        </Datagrid>
    </List>
);