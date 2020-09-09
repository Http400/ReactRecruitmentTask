import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components'

import Customer from '../models/Customer';

const borderStyle = '1px solid #dddddd';

type StyledTableProps = {
    tableWidth: number
};

const TableWrapper = styled.div<StyledTableProps>`
    overflow-x: auto;
    border: ${borderStyle};
    max-width: ${(props) => props.tableWidth}px;
`;

const StyledTable = styled.table<StyledTableProps>`
    font-family: arial, sans-serif;
    border-collapse: separate;
    border-spacing: 0;
    width: ${(props) => props.tableWidth}px;

    th, td {
        border-left: ${borderStyle};
        text-align: left;
        padding: 8px;
        box-sizing: border-box;

        &:last-child {
            position: sticky;
            right: 0;
            background-color: white;
            background-clip: padding-box;
        }
    }

    th {
        cursor: pointer;
    }

    td {
        border-top: ${borderStyle};
    }
`;

export type ColumnConfig = { title: string, property: keyof Customer, width: number };

type Props = {
    columnsConfig: ColumnConfig[],
    customers: Customer[]
}

const Table = ({ columnsConfig, customers }: Props) => {
    const [ sortProperty, setSortProperty ] = useState<keyof Customer>('id');
    const [ sortedCustomers, setSortedCustomers ] = useState<Customer[]>(customers);

    const tableWidth = columnsConfig.reduce((prev: number, curr: ColumnConfig) => {
        return prev + curr.width;
    }, 0);
    
    useEffect(() => {
        setSortedCustomers(
            [...customers].sort((a: Customer, b: Customer) => a[sortProperty] > b[sortProperty] ? 1 : -1)
        );
    }, [sortProperty]);

    const columnsHeaders = useMemo(() => {
        return <thead>
                <tr>
                    {columnsConfig.map((colConfig: ColumnConfig, index: number) => (
                        <th key={index} style={{ width: colConfig.width }} onClick={() => setSortProperty(colConfig.property)}>{colConfig.title}</th>
                    ))}
                </tr>
            </thead>;
    }, [columnsConfig]);

    const customersElements = useMemo(() => {
        return (
            <tbody>
                {sortedCustomers.map((customer: Customer) => (
                    <tr key={customer.id}>
                        <td>{customer.id}</td>
                        <td>{customer.firstName}</td>
                        <td>{customer.lastName}</td>
                        <td>{customer.city}</td>
                        <td>{customer.age}</td>
                    </tr>
                ))}
            </tbody>
        );
    }, [sortedCustomers]);

    return (
        <TableWrapper tableWidth={tableWidth}>
            <StyledTable tableWidth={tableWidth}>
                {columnsHeaders}
                {customersElements}
            </StyledTable>
        </TableWrapper>
    );
}

export default Table;