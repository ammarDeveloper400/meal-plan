/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import {
  Grid,
  Dialog,
  Button,
  Select,
  MenuItem,
  TextField,
  Typography,
  FormControl,
  DialogContent,
} from '@mui/material';

const RecipeDialog = ({ open, handleClose, handleSave }) => {
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');
  const [customCategory, setCustomCategory] = useState('');

  const handleDialogSave = () => {
    const finalCategory = category === 'Other' ? customCategory : category;
    const newItem = `${item}, ${quantity}`;
    handleSave(finalCategory, newItem); // Pass the new category and Item to parent
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent sx={{ backgroundColor: '#FABE9A', color: '#000' }}>
        <Typography sx={{ fontSize: '20px !important', fontWeight: '600', color: '#fff' }}>
          Add item
        </Typography>
        <FormControl fullWidth margin="normal">
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            displayEmpty
            sx={{
              '.MuiOutlinedInput-notchedOutline': {
                borderColor: 'black',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#000',
              },
              '.MuiSvgIcon-root': {
                color: '#000',
              },
            }}
          >
            <MenuItem value="" disabled>
              Select category
            </MenuItem>
            <MenuItem value="Fruits and vegetables">Fruits and vegetables</MenuItem>
            <MenuItem value="Meats, tofu and fish">Meats, tofu and fish</MenuItem>
            <MenuItem value="Pasta, rice and canned goods">Pasta, rice and canned goods</MenuItem>
            <MenuItem value="Dairy products">Dairy products</MenuItem>
            <MenuItem value="Frozen and other items">Frozen and other items</MenuItem>
            <MenuItem value="Perhaps already at home">Perhaps already at home</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>

        {category === 'Other' && (
          <TextField
            label="Custom Category"
            value={customCategory}
            onChange={(e) => setCustomCategory(e.target.value)}
            fullWidth
            margin="normal"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'black',
                },
                '&:hover fieldset': {
                  borderColor: '#000',
                },
              },
            }}
          />
        )}

        <Grid container spacing={2} pt={2}>
          <Grid item xs={6}>
            <TextField
              label="Item"
              value={item}
              onChange={(e) => setItem(e.target.value)}
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black',
                  },
                  '&:hover fieldset': {
                    borderColor: '#000',
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black',
                  },
                  '&:hover fieldset': {
                    borderColor: '#000',
                  },
                },
              }}
            />
          </Grid>
        </Grid>
        <Button onClick={handleDialogSave} variant="contained" color="primary" sx={{ mt: 2 }}>
          Save
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default RecipeDialog;
