import React, { useState } from 'react';

import { Box, Card, Button, Typography, CardContent } from '@mui/material';

import PaymentMethodForm from './add-payment'; // Update import path if necessary
import PromoCodeInput from './promocde';
import EraseCardDialog from '../../../../components/erase-card/erase-card';

const PaymentMethod = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(1); // Initialize with the first card's ID
  const [eraseDialogOpen, setEraseDialogOpen] = useState(false); // New state for erase dialog
  const [cardToErase, setCardToErase] = useState(null); // Store the card to erase
  const [cardData, setCardData] = useState([
    {
      id: 1,
      type: 'Mastercard',
      lastDigits: '2367',
      expirationDate: '11-2022',
    },
    {
      id: 2,
      type: 'Mastercard',
      lastDigits: '2367',
      expirationDate: '11-2022',
    },
    {
      id: 3,
      type: 'Mastercard',
      lastDigits: '2367',
      expirationDate: '11-2022',
    },
  ]);

  const handleDialogOpen = () => setDialogOpen(true);
  const handleDialogClose = () => setDialogOpen(false);

  const handleEraseDialogOpen = (card) => {
    setCardToErase(card); // Set the card to be erased
    setEraseDialogOpen(true); // Open the erase dialog
  };

  const handleEraseDialogClose = () => setEraseDialogOpen(false);

  const handleCardDelete = () => {
    if (cardToErase) {
      // Filter out the card to be deleted from the cardData array
      setCardData((prevData) => prevData.filter((card) => card.id !== cardToErase.id));
      setEraseDialogOpen(false); // Close the dialog
      setCardToErase(null); // Clear the selected card to erase
    }
  };

  const handleCardSelect = (id) => {
    setSelectedCardId(id); // Set the selected card id when a card is clicked
  };

  return (
    <Box p={2}>
      <Box>
        <Typography sx={{ fontSize: '18px !important', fontWeight: '600' }}>
          Payment method
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        flexWrap="wrap"
        justifyContent="flex-start"
        gap="20px" // Add gap between cards
        pt="10px"
      >
        {cardData.map((card) => (
          <Card
            key={card.id}
            sx={{
              width: { xs: '100%', sm: 240 },
              backgroundColor: selectedCardId === card.id ? '#F79256' : 'white', // Change background color if selected
              boxShadow:
                '16px 41px 12px 0px rgba(0, 0, 0, 0.00), 11px 26px 11px 0px rgba(0, 0, 0, 0.01), 6px 15px 9px 0px rgba(0, 0, 0, 0.05), 3px 7px 7px 0px rgba(0, 0, 0, 0.09), 1px 2px 4px 0px rgba(0, 0, 0, 0.10)',
              color: selectedCardId === card.id ? 'white' : 'inherit', // Change text color to white when selected
            }}
            onClick={() => handleCardSelect(card.id)} // Call handleCardSelect on click
          >
            <CardContent>
              <Typography
                sx={{
                  fontSize: { xs: '16px', sm: '20px' },
                  fontWeight: '400',
                  mb: 2,
                  color: selectedCardId === card.id ? 'white' : 'inherit', // Text color change
                }}
              >
                {card.type} ending by {card.lastDigits}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '12px', sm: '14px' },
                  fontWeight: '400',
                  color: selectedCardId === card.id ? 'white' : 'textSecondary', // Text color change
                }}
              >
                Expiration date
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '8px', sm: '10px' },
                  fontWeight: '400',
                  color: selectedCardId === card.id ? 'white' : 'inherit', // Text color change
                }}
              >
                {card.expirationDate}
              </Typography>
              <Box
                sx={{
                  mt: 2,
                  display: 'flex',
                  flexDirection: { xs: 'row', sm: 'row' },
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}
              >
                <Button
                  sx={{
                    fontSize: { xs: '10px', sm: '12px' },
                    fontWeight: '400',
                    mb: { xs: 1, sm: 0 },
                    backgroundColor: selectedCardId === card.id ? 'white' : 'primary.main', // Button background change
                    color: selectedCardId === card.id ? '#F79256' : 'white', // Button text color change
                  }}
                  variant="contained"
                  onClick={() => handleEraseDialogOpen(card)} // Open erase dialog for this card
                >
                  Erase
                </Button>
                <Button
                  sx={{
                    fontSize: { xs: '10px', sm: '12px' },
                    fontWeight: '400',
                    backgroundColor: selectedCardId === card.id ? '#FABE9A' : 'primary.main', // Custom background color for disabled
                    color: selectedCardId === card.id ? '#F79256' : 'white', // Custom text color for disabled
                    '&.Mui-disabled': {
                      // Target the disabled state specifically
                      backgroundColor: '#FABE9A',
                      color: '#FFFF',
                    },
                  }}
                  variant="contained"
                  disabled={selectedCardId === card.id} // Disable button for selected card
                >
                  Use by Default
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
        <Box
          sx={{
            ml: { xs: 0, sm: 1 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Button variant="contained" color="primary" size="large" onClick={handleDialogOpen}>
            <img src="/assets/icons/plus.svg" alt="plus" />
          </Button>
        </Box>
      </Box>
      <Box mt={3}>
        <PromoCodeInput />
      </Box>
      <PaymentMethodForm open={dialogOpen} handleClose={handleDialogClose} />
      <EraseCardDialog
        open={eraseDialogOpen}
        onClose={handleEraseDialogClose}
        onDelete={handleCardDelete} // Handle card deletion
      />
    </Box>
  );
};

export default PaymentMethod;
