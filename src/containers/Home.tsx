import React from 'react';

import Customer from '../models/Customer';
import Table, { ColumnConfig } from '../components/Table';

const columnsConfig: ColumnConfig[] = [
    { title: 'Id', property: 'id', width: 50 },
    { title: 'First name', property: 'firstName', width: 350 },
    { title: 'Last name', property: 'lastName', width: 250 },
    { title: 'City', property: 'city', width: 150 },
    { title: 'Age', property: 'age', width: 50 }
];

const customers: Customer[] = [
    { id: 1, firstName: 'Ivan', lastName: 'Farley', city: 'New York', age: 43 },
    { id: 2, firstName: 'Ashlee', lastName: 'Blair', city: 'Washington', age: 34 },
    { id: 3, firstName: 'Jorden', lastName: 'May', city: 'Las Vegas', age: 50 },
    { id: 4, firstName: 'Mason', lastName: 'Kennedy', city: 'Chicago', age: 28 },
    { id: 5, firstName: 'Colton', lastName: 'Phelps', city: 'Seattle', age: 37 },
    { id: 6, firstName: 'Nathalie', lastName: 'Todd', city: 'New Orlean', age: 48 }
];

const Home = () => {
    return (
        <div>
            <h1>Customers</h1>
            <Table columnsConfig={columnsConfig} customers={customers} />
        </div>
    );
}

export default Home;