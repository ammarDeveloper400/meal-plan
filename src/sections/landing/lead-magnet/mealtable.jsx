import React, { useState } from 'react';

import {
  Box,
  Grid,
  Button,
  Checkbox,
  FormGroup,
  Typography,
  FormControl,
  FormControlLabel,
} from '@mui/material';

import Iconify from '../../../components/iconify';
import DeleteConfirmationDialog from '../../../components/delete-dialog/deleteconfirmationdialog'; // Import the RecipeDialog component
import SubscriptionDialog from './subscriptionDialog';
import RecipeDialog from '../../../components/add-categories';
import AddRecentItemDialog from '../../../components/re-add-manual-additon';

// Dummy Data as initial state
const initialData = {
  'Fruits and vegetables': [
    'Almond milk, unsweetened, 2 cups',
    'Avocado oil (Tbsp), 6 Tbsp',
    'Basil, dried, 1 tsp',
    'Broth, chicken or beef (cups), 8 cups',
    'Dijon mustard, 2 Tbsp',
    'Garlic salt, ½ tsp',
    'Italian seasoning, ½ tsp',
    'Nuts, ½ cup',
    'Olive oil (Tbsp), 4 Tbsp',
    'Oregano, 1 tsp',
    'Pasta, cooked, 2 cups',
    'Peanut butter, unsweetened (Tbsp), 2 Tbsp',
    'Pepper, ground, ¼ tsp',
    'Protein powder, 2',
    'Salt, 1 tsp',
    'Tomatoes, canned, crushed, 3 cups',
  ],
  'Meats, tofu and fish': [
    'Onion, yellow, large, 3',
    'Parsley, fresh, 6 Tbsp',
    'Potato, Russet, small, 6',
    'Strawberries, fresh, 2 cups',
    'Zoodles (zucchini noodles), raw or frozen, 8 cups',
  ],
  'Pasta, rice and canned goods': [
    'Onion, yellow, large, 3',
    'Parsley, fresh, 6 Tbsp',
    'Potato, Russet, small, 6',
    'Strawberries, fresh, 2 cups',
    'Zoodles (zucchini noodles), raw or frozen, 8 cups',
  ],
  'Dairy products': ['Milk, 2 cups', 'Cheese, shredded, 1 cup', 'Yogurt, Greek, 1 cup'],
  'Frozen and other items': ['Frozen berries, 2 cups', 'Frozen peas, 1 cup'],
  'Perhaps already at home': ['Salt, 1 tsp', 'Pepper, ground, ½ tsp', 'Olive oil, 4 Tbsp'],
};

const MealTable = () => {
  const [groceryList, setGroceryList] = useState(initialData); // State for dynamic grocery list
  const [openDialog, setOpenDialog] = useState(false); // State for delete dialog visibility
  const [recipeDialogOpen, setRecipeDialogOpen] = useState(false); // State for recipe dialog visibility
  const [addRecentDialogOpen, setAddRecentDialogOpen] = useState(false); // State to control AddRecentItemDialog
  const [open, setOpen] = useState(false);

  const [selectedItems, setSelectedItems] = useState({}); // State for selected items

  // Handle opening the delete dialog
  const handleOpenDialog = () => {
    if (Object.keys(selectedItems).length > 0) {
      setOpenDialog(true);
    }
  };

  // Handle closing the delete dialog
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  // Handle selecting items
  const handleSelectItem = (category, item) => {
    setSelectedItems((prev) => {
      const selected = { ...prev };
      if (selected[category]?.includes(item)) {
        selected[category] = selected[category].filter((i) => i !== item);
        if (selected[category].length === 0) delete selected[category];
      } else {
        selected[category] = selected[category] ? [...selected[category], item] : [item];
      }
      return selected;
    });
  };

  // Handle delete action
  const handleDelete = () => {
    // Logic for deleting selected items goes here
    console.log('Deleted items:', selectedItems);
    setSelectedItems({}); // Clear selected items after deletion
    setOpenDialog(false); // Close dialog after deletion
  };

  // Handle opening the Recipe Dialog
  const handleOpenRecipeDialog = () => {
    setRecipeDialogOpen(true);
  };

  // Handle closing the Recipe Dialog
  const handleCloseRecipeDialog = () => {
    setRecipeDialogOpen(false);
  };

  // Handle saving the new ingredient to the list
  const handleSaveIngredient = (newCategory, newIngredient) => {
    setGroceryList((prevList) => {
      const updatedList = { ...prevList };
      if (updatedList[newCategory]) {
        updatedList[newCategory] = [...updatedList[newCategory], newIngredient];
      } else {
        updatedList[newCategory] = [newIngredient];
      }
      return updatedList;
    });
    handleCloseRecipeDialog(); // Close the dialog after saving
  };

  // Handle opening the Add Recent Item Dialog
//   const handleOpenAddRecentDialog = () => {
//     setAddRecentDialogOpen(true);
//   };

  // Handle closing the Add Recent Item Dialog
  const handleCloseAddRecentDialog = () => {
    setAddRecentDialogOpen(false);
  };

  return (
    <Box pt={4}>
      <Box sx={{ border: '1px solid #000', padding: '20px', borderRadius: '15px' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: { xs: 'column', sm: 'row' },
          }}
        >
          <Box
            sx={{
              textAlign: 'left',
              mb: { xs: '10px', sm: '20px' },
              alignSelf: { sm: 'flex-start', xs: 'flex-start', md: 'center' },
            }}
          >
            <Typography sx={{ fontSize: '20px !important', fontWeight: '600' }}>
              My grocery list
            </Typography>
            <Typography sx={{ fontSize: '12px !important', fontWeight: '400' }}>
              Week #34 2023-03-06
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: '10px',
              alignItems: 'center',
              flexDirection: { xs: 'column', sm: 'row' },
            }}
          >
            <Box sx={{ pb: { xs: '10px', sm: '0' } }}>
              <Button
                variant="contained"
                sx={{
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'center',
                  fontSize: { xs: '14px !important', sm: '16px !important' },
                  fontWeight: '700',
                }}
                // onClick={handleOpenAddRecentDialog} // Open AddRecentItemDialog on click

                onClick={() => setOpen(true)}

              >
                Add recent items <Iconify icon="ph:plus-fill" />
              </Button>
            </Box>
            <Box sx={{ pb: { xs: '10px', sm: '0' } }}>
              <Button
                variant="contained"
                sx={{
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'center',
                  fontSize: '16px !important',
                  fontWeight: '700',
                }}
                onClick={handleOpenDialog} // Open dialog on click
              >
                Delete selected items <Iconify icon="fluent:delete-32-filled" />
              </Button>
            </Box>
          </Box>
        </Box>
        <Grid container spacing={4}>
          {Object.keys(groceryList).map((category) => {
            const isRemaining = [
              'Dairy products',
              'Perhaps already at home',
              'Frozen and other items',
            ].includes(category);
            return (
              <Grid item xs={12} key={category}>
                <Typography sx={{ fontSize: '18px !important', fontWeight: '600', mb: '20px' }}>
                  {category}
                </Typography>

                <FormControl component="fieldset" fullWidth>
                  <Grid container spacing={2}>
                    {groceryList[category].map((item, index) => (
                      <Grid
                        item
                        xs={12}
                        sm={isRemaining ? 12 : 6}
                        md={isRemaining ? 12 : 4}
                        lg={isRemaining ? 12 : 3}
                        key={index}
                      >
                        <FormGroup>
                          <FormControlLabel
                            control={
                              <Checkbox
                                sx={{ '& .MuiSvgIcon-root': { fontSize: 18 } }}
                                checked={selectedItems[category]?.includes(item) || false}
                                onChange={() => handleSelectItem(category, item)}
                              />
                            }
                            label={
                              <Typography sx={{ fontSize: '14px !important', fontWeight: '400' }}>
                                {item}
                              </Typography>
                            }
                          />
                        </FormGroup>
                      </Grid>
                    ))}
                  </Grid>
                </FormControl>
              </Grid>
            );
          })}
        </Grid>

        {/* Manual addition section */}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '20px' }}>
          <Box>
            <Typography
              sx={{
                fontSize: '20px',
                fontWeight: '700',
                mt: '20px',
                textAlign: 'center',
                pb: '10px',
              }}
            >
              Manual addition
            </Typography>
            <Button
              variant="contained"
              sx={{
                display: 'flex',
                alignItems: 'center',
                fontSize: { sm: '20px', xs: '16px' },
                gap: '10px',
              }}
              onClick={handleOpenRecipeDialog} // Open RecipeDialog on click
            >
              <Iconify icon="ph:plus-fill" sx={{ ml: '8px' }} />
              Click here to add something
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Delete Confirmation Dialog */}
      <DeleteConfirmationDialog
        open={openDialog}
        onClose={handleCloseDialog}
        onDelete={handleDelete}
      />

      {/* Recipe Dialog */}
      <RecipeDialog
        open={recipeDialogOpen}
        handleClose={handleCloseRecipeDialog}
        handleSave={handleSaveIngredient} // Pass save handler to RecipeDialog
      />

      {/* AddRecentItemDialog */}
      <AddRecentItemDialog open={addRecentDialogOpen} onClose={handleCloseAddRecentDialog} />
      <SubscriptionDialog open={open} onClose={() => setOpen(false)} />

    </Box>
  );
};

export default MealTable;
