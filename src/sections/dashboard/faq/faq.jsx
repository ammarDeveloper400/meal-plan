import React, { useState } from 'react';

import {
  Box,
  Accordion,
  Container,
  Typography,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';

const faqData = [
  {
    question: 'What is included in the $29.99 monthly subscription?',
    answer:
      'This subscription gives you access to all our features, including unlimited searching among our dishes and recipes, creating meal plans based on your preferences, and modifying existing or previously saved meal plans in your history. Additionally, you can download, print, email, or text meal plans, recipes, or grocery lists without any limits.',
  },
  {
    question: 'How does the subscription work and how can I cancel it?',
    answer:
      "The subscription is billed at $29.99 per month (+tax) and will automatically renew each month on the initial payment date until cancelled. You can cancel anytime without hassle by accessing your account, going to the 'Subscription' section, or by emailing info@planora.ca. Once cancelled, you will have access to the full site until the end of your already paid month.",
  },
  {
    question: 'How does the meal planning section work? (Video tutorial coming soon)',
    answer:
      "Navigate to the 'My meal plans' section. Each week, you have two options: use the automatically suggested meal plan that changes weekly for all subscribers, or generate a personalized meal plan based on your preferences. In both cases, click on 'View or modify suggested meal planning for this week'. You can then keep the suggested plan or modify it as desired. If you prefer to generate a week of meals according to your tastes, input your preferences at the top of the page and click 'Generate a new random plan according to my preferences'. Once your meal plan is complete, you can save it in your preferred view (calendar version or detailed version), and the corresponding grocery list will be provided automatically. You can then download or print it.",
  },
  {
    question: 'How do I modify a meal plan?',
    answer:
      "Whether using our plan or generating one, you can always modify it. You can add meals, remove them, or modify those displayed. Simply click 'Modify' and you'll be redirected to our search page. When you find a dish you like, add it directly to a day in your current meal plan. You are entitled to three meals (breakfast, lunch, and dinner) and five snacks or sides.",
  },
  {
    question: 'What are the different ways to view my recipes, meal plan, or grocery list?',
    answer:
      'You can save it to your computer or tablet, print it, or send it via email or text using the information associated with your account.',
  },
  {
    question: 'If I subscribe, will the site work on my cell phone and tablet?',
    answer: 'Yes, the site works perfectly on all your devices (computer, cell phone, or tablet).',
  },
  {
    question: 'I have an issue with my account, a recipe, or my subscription, what should I do?',
    answer: 'Please send us an email through our customer service in the Contact Us section.',
  },
  {
    question: "I have a recipe idea I'd like to share with you, how can I do that?",
    answer:
      "Details on sharing recipe ideas You can submit your recipe idea in the 'Submit a recipe idea' section.",
  },
];

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container sx={{ pb: 12 }}>
      <Typography variant="h1" align="center" gutterBottom sx={{ pt: '54px', pb: '60px' }}>
        FAQ (Frequently Asked Questions)
      </Typography>
      {faqData.map((item, index) => (
        <Box key={index} mb={2}>
          <Accordion
            expanded={expanded === index}
            onChange={handleChange(index)}
            disableGutters
            sx={{
              backgroundColor: '#FFF',
              color: '#000',
              borderRadius: '15px',
              '&:first-of-type': {
                borderTopLeftRadius: '15px',
                borderTopRightRadius: '15px',
              },
              '&:last-of-type': {
                borderBottomLeftRadius: '15px',
                borderBottomRightRadius: '15px',
              },
            }}
          >
            <AccordionSummary
              expandIcon={
                <img
                  width="20px"
                  height="15px"
                  src="/assets/icons/expandicon.svg"
                  alt="expand"
                  style={{ filter: expanded === index ? 'brightness(0)' : 'none' }} // This will make the icon black when expanded
                />
              }
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
              sx={{
                backgroundColor: expanded === index ? '#F5F7F9' : '#F79256',
                color: expanded === index ? '#000' : '#fff',
                borderRadius: '15px',
                height: '60px',
                boxShadow:
                  '0px 776px 217px 0px rgba(0, 0, 0, 0.00), 0px 497px 199px 0px rgba(0, 0, 0, 0.01), 0px 279px 168px 0px rgba(0, 0, 0, 0.05), 0px 124px 124px 0px rgba(0, 0, 0, 0.09), 0px 31px 68px 0px rgba(0, 0, 0, 0.10)',
                '&:hover': {
                  backgroundColor: expanded === index ? '#F5F7F9' : '#E15D0E',
                },
              }}
            >
              <Typography>
                {index + 1}. {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                 borderRadius:'0px 0px 15px 15px'
              }}
            >
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      ))}
    </Container>
  );
};

export default FAQ;
