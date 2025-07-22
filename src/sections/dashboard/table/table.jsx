import React from 'react';

import GlobalTable from 'src/components/globaltable/table';

const GroceryListTable = () => {
  // Define columns as per your table structure
  const columns = [
    { id: 'item', label: 'Item' },
    { id: 'quantity', label: 'Qty' },
    { id: 'note', label: 'Note' },
  ];

  // Define the categories as per the sections in the image
  const categories = [
    { label: 'Fruits and vegetables' },
    { label: 'Meats, tofu, and fish' },
    { label: 'Pasta, rice, and canned goods' },
    { label: 'Dairy products' },
  ];

  // Data for each section (as per the image)
  const data = [
    // Fruits and vegetables
    { category: 'Fruits and vegetables', item: 'Cucumber', quantity: 3, note: 'Take cucumber' },
    {
      category: 'Fruits and vegetables',
      item: 'Bell peppers',
      quantity: 2,
      note: 'Take beefsteak tomatoes',
    },
    {
      category: 'Fruits and vegetables',
      item: 'Tomatoes',
      quantity: 6,
      note: 'Take Canadian bacon',
    },
    { category: 'Fruits and vegetables', item: 'Bananas', quantity: 6, note: '' },
    { category: 'Fruits and vegetables', item: 'Broccoli', quantity: '6 Cup', note: '' },
    { category: 'Fruits and vegetables', item: 'Citryselle', quantity: 1, note: '' },
    { category: 'Fruits and vegetables', item: 'Citron', quantity: 3, note: '' },

    // Meats, tofu, and fish
    {
      category: 'Meats, tofu, and fish',
      item: 'Salmon',
      quantity: '300g',
      note: 'Take fresh salmon',
    },
    { category: 'Meats, tofu, and fish', item: 'Chicken', quantity: '16oz', note: '' },

    // Pasta, rice, and canned goods
    {
      category: 'Pasta, rice, and canned goods',
      item: 'Sun-dried tomatoes',
      quantity: '300g',
      note: '',
    },
    { category: 'Pasta, rice, and canned goods', item: 'Tomato paste', quantity: '38ml', note: '' },
    { category: 'Pasta, rice, and canned goods', item: 'Walnuts', quantity: '300g', note: '' },
    { category: 'Pasta, rice, and canned goods', item: 'Oil', quantity: '2L', note: '' },
    {
      category: 'Pasta, rice, and canned goods',
      item: 'Cumin',
      quantity: '1/2 teaspoon',
      note: '',
    },
    { category: 'Pasta, rice, and canned goods', item: 'Paprika', quantity: '380g', note: '' },
    { category: 'Pasta, rice, and canned goods', item: 'Cinnamon', quantity: '100ml', note: '' },

    // Dairy products
    { category: 'Dairy products', item: 'Milk', quantity: '1/2 cup', note: '' },
  ];

  // Filtered data by category
  const filteredData = (category) => data.filter((row) => row.category === category);

  return (
    <>
      {categories.map((category, index) => (
        <GlobalTable
          key={index}
          columns={columns}
          data={filteredData(category.label)}
          categories={[category]}
        />
      ))}
    </>
  );
};

export default GroceryListTable;
