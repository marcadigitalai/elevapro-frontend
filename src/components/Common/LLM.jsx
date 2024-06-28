import React from 'react';
import { Container, Box, Typography, List, ListItem, ListItemText, Button, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  sidebar: {
    width: '20%',
    backgroundColor: '#f5f5f5',
    padding: '1rem',
    borderRight: '1px solid #ddd',
  },
  mainContent: {
    width: '80%',
    padding: '1rem',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  exampleCard: {
    backgroundColor: '#fafafa',
    padding: '1rem',
    borderRadius: '8px',
    marginBottom: '1rem',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '1px solid #ddd',
    paddingTop: '1rem',
  }
});

function App() {
  const classes = useStyles();

  return (
    <Container disableGutters maxWidth="lg" style={{ display: 'flex' }}>
      {/* Sidebar */}
      <Box className={classes.sidebar}>
        <Typography variant="h6" gutterBottom>This Month (June)</Typography>
        <List>
          <ListItem button>
            <ListItemText primary="How can I create a visual representation?" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="What software or tools do I need?" />
          </ListItem>
          {/* Add more items here */}
        </List>
        <Button variant="outlined" color="primary" fullWidth style={{ marginTop: 'auto' }}>
          Upgrade to plus now<br />$20 per month
        </Button>
      </Box>

      {/* Main Content */}
      <Box className={classes.mainContent}>
        <Box className={classes.header}>
          <Typography variant="h4">66chat</Typography>
        </Box>
        
        <Box display="flex" justifyContent="space-between" mt={3}>
          {/* Example Section */}
          <Box className={classes.exampleCard} flexBasis="30%">
            <Typography variant="h6">Example</Typography>
            <Typography>*write step by step for research and development*</Typography>
            <Typography>*Explain how BigBag Theory in 100 words*</Typography>
            {/* Add more examples here */}
          </Box>
          
          {/* Capabilities Section */}
          <Box className={classes.exampleCard} flexBasis="30%">
            <Typography variant="h6">Capabilities</Typography>
            <Typography>Provide information and answer questions</Typography>
            <Typography>Assist with creative writing tasks</Typography>
            {/* Add more capabilities here */}
          </Box>

          {/* Limitation Section */}
          <Box className={classes.exampleCard} flexBasis="30%">
            <Typography variant="h6">Limitation</Typography>
            <Typography>Lack of common sense and reasoning</Typography>
            <Typography>Potential for biased or inappropriate responses</Typography>
            {/* Add more limitations here */}
          </Box>
        </Box>

        {/* Chat Footer */}
        <Box className={classes.footer} mt={3}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Send a new message"
          />
          <IconButton color="primary">
            <SendIcon />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
}

export default App;
