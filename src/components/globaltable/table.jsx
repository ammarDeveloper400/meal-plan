import React from 'react';
import PropTypes from 'prop-types';

import { Table, TableRow, TableBody, TableCell, TableHead, TableContainer } from '@mui/material';

const GlobalTable = ({ columns, data, categories }) => (
  <TableContainer
    sx={{
      backgroundColor: '#FFF',
      // padding: '0px', 
    }}
  >
    <Table
      aria-label="global table"
      sx={{
        borderSpacing: '0px 18px', // Creates the space between rows
        width: { sm: '100%', xs: '850px' },
        backgroundColor: '#FFF',
      }}
    >
      <TableHead>
        {categories.map((category, index) => (
          <React.Fragment key={index}>
            <TableRow>
              <TableCell
                colSpan={columns.length}
                sx={{
                  padding: '12px',
                  fontWeight: '500 !important',
                  fontSize: '18px !important',
                  color: '#000',
                  borderBottom: '0px solid #FFF', // Thicker border for category headers
                  backgroundColor: '#FFF',
                }}
              >
                {category.label}
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  sx={{
                    fontSize: '18px !important',
                    color: '#000',
                    padding: '8px 12px',
                    fontWeight: '400',
                    borderBottom: '0px solid #FFF', // Thicker border for column headers
                    backgroundColor: '#FFF',
                    pb: '20px',
                    width: column.width || 'auto', // Dynamically set the width of the column
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </React.Fragment>
        ))}
      </TableHead>

      <TableBody>
        {data.map((row, rowIndex) => (
          <TableRow
            key={rowIndex}
            sx={{
              color: '#000',
              fontSize: '14px !important',
              borderBottom: '1px solid #000', // Border below each row
            }}
          >
            {columns.map((column, colIndex) => (
              <TableCell
                key={column.id}
                sx={{
                  padding: '12px',
                  backgroundColor: '#FFF', 
                  ...(colIndex === 0 && {
                    // paddingLeft: '20px',
                  }),
                  ...(colIndex === columns.length - 4 && {
                    textAlign: 'center',
                  }),
                  width: column.width || '20%', 
                }}
              >
                {column.render ? column.render(row) : row[column.id]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

GlobalTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      render: PropTypes.func, 
      width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.node])
    )
  ).isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default GlobalTable;
