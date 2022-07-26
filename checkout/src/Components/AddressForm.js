import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { InputLabel, Stack } from '@mui/material';
import styled from '@emotion/styled';
import MenuItem from '@mui/material/MenuItem';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  borderOutline: {
    borderColor: "white",
    borderWidth: 2
  }
});

const paymentMethods = [
    {
        value: 'My Steam Wallet',
        label: 'My Steam Wallet'
    },
    {
        value: 'Paypal',
        label: 'PayPal'
    },
    {
        value: 'Visa',
        label: 'Visa'
    },
    {
        value: 'Mastercard',
        label: 'Mastercard'
    },
    {
        value: 'American Express',
        label: 'American Express'
    },
    {
        value: 'Discover',
        label: 'Discover'
    },
    {
        value: 'JCB',
        label: 'JCB'
    },
]

const statesList = [
  {
      value: 'Alabama',
      label: 'Alabama'
  },
  {
      value: 'Alaska',
      label: 'Alaska'
  },
  {
      value: 'Arizona',
      label: 'Arizona'
  },
  {
      value: 'Arkansas',
      label: 'Arkansas'
  },
  {
      value: 'California',
      label: 'California'
  },
  {
      value: 'Colorado',
      label: 'Colorado'
  },
  {
      value: 'Connecticut',
      label: 'Connecticut'
  },
  {
      value: 'Delaware',
      label: 'Delaware'
  },
  {
      value: 'Florida',
      label: 'Florida'
  },
  {
      value: 'Georgia',
      label: 'Georgia'
  },
  {
      value: 'Hawaii',
      label: 'Hawaii'
  },
  {
      value: 'Idaho',
      label: 'Idaho'
  },
  {
      value: 'Illinois',
      label: 'Illinois'
  },
  {
      value: 'Indiana',
      label: 'Indiana'
  },
  {
      value: 'Iowa',
      label: 'Iowa '
  },
  {
      value: 'Kansas',
      label: 'Kansas'
  },
  {
      value: 'Kentucky',
      label: 'Kentucky'
  },
  {
      value: 'Louisiana',
      label: 'Louisiana'
  },
  {
    value: 'Maine',
    label: 'Maine'
  },
  {
    value: 'Maryland',
    label: 'Maryland'
  },
  {
    value: 'Massachusetts',
    label: 'Massachusetts'
  },
  {
    value: 'Michigan',
    label: 'Michigan'
  },
  {
    value: 'Minnesota',
    label: 'Minnesota'
  },
  {
    value: 'Mastercard',
    label: 'Mastercard'
  },
  {
    value: 'Mississippi',
    label: 'Mississippi'
  },
  {
    value: 'Missouri',
    label: 'Missouri'
  },
  {
    value: 'Montana',
    label: 'Montana'
  },
  {
    value: 'Nebraska',
    label: 'Nebraska'
  },
  {
  value: 'Nevada',
  label: 'Nevada'
  },
  {
  value: 'New Hampshire',
  label: 'New Hampshire'
  },
  {
    value: 'New Jersey',
    label: 'New Jersey'
  },
  {
    value: 'New Mexico',
    label: 'New Mexico'
  },
  {
    value: 'New York',
    label: 'New York'
  },
  {
    value: 'North Carolina',
    label: 'North Carolina'
  },
  {
    value: 'North Dakota',
    label: 'North Dakota'
  },
  {
    value: 'Ohio',
    label: 'Ohio'
  },
  {
    value: 'Oklahoma',
    label: 'Oklahoma'
  },
  {
    value: 'Oregon',
    label: 'Oregon'
  },
  {
  value: 'Pennsylvania',
  label: 'Pennsylvania'
  },
  {
  value: 'Rhode Island',
  label: 'Rhode Island'
  },
  {
    value: 'South Carolina',
    label: 'South Carolina'
  },
  {
    value: 'South Dakota',
    label: 'South Dakota'
  },
  {
    value: 'Tennessee',
    label: 'Tennessee'
  },
  {
    value: 'Texas',
    label: 'Texas'
  },
  {
    value: 'Utah',
    label: 'Utah'
  },
  {
    value: 'Vermont',
    label: 'Vermont'
  },
  {
    value: 'Virginia',
    label: 'Virginia'
  },
  {
    value: 'Washington',
    label: 'Washington'
  },
  {
  value: 'West Virginia',
  label: 'West Virginia'
  },
  {
  value: 'Wisconsin',
  label: 'Wisconsin'
  },
]

export default function AddressForm() {
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <React.Fragment>
      <Grid item xs={12} sm={4} align="left" >
      <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={currency}
          onChange={handleChange}
          style={{width: 250}}
        >
          {paymentMethods.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Typography variant="h5" gutterBottom align='left' pt={4} style={{color: 'white'}}>
        BILLING INFORMATION
      </Typography>
      <Grid container spacing={1}>
        <Stack direction="row"  sx={{width: 1000}} align="left" spacing={7}>
            <Stack direction="row">
            <TextField
              required
              sx={{ width: 125, height: 1}}
              id="firstName"
              name="firstName"
              label="First name"
              autoComplete="given-name"
              variant="outlined"
              InputLabelProps={{ shrink: true }} 
            />
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              sx={{ width: 125}}
              autoComplete="family-name"
              variant="outlined"
              InputLabelProps={{ shrink: true }} 
            />
          <TextField
            sx={{width: 250}}
            md={4}
            required
            id="city"
            name="city"
            label="City"
            autoComplete="shipping address-level2"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
          />
          </Stack>
        </Stack>
        <Stack direction="row" item sx={{width: 2000}} align="left" spacing={7}>
          <TextField
          sx={{width: 250}}
            required
            id="address1"
            name="address1"
            label="Billing Adress"
            autoComplete="shipping address-line1"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={currency}
          onChange={handleChange}
          sx={{width:250 }}
        >
          {statesList.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </Stack>
        <Stack direction="row" item sx={{width: 2000}} align="left" spacing={7}>
          <TextField
            id="address2"
            name="address2"
            label="Billing Adress, line 2"
            sx={{width: 250}}
            autoComplete="shipping address-line2"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            sx={{width: 250}}
            autoComplete="shipping postal-code"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
          />
        </Stack>
        <Grid item xs={12} align="left" sx={{width: 250 }}>
          <TextField
            sx={{width: 250, "& .MuiOutlinedInput-root.Mui-disabled":{"& > fieldset": {border: '1px solid green'}}}}
            required
            id="country"
            name="country"
            label="Country"
            autoComplete="shipping country"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12} align="left">
          <FormControlLabel
            control={<Checkbox color="primary" name="saveAddress" value="yes" />}
            label="Save my payment information so checkout is easy next time"
          />
        </Grid>
        <Typography align="left" style={{color: 'white', fontWeight: 'normal'}}>
        In the event your Steam Wallet balance doesn’t cover the full cost of this transaction, you’ll be
        asked to cover the remaining balance due with a secondary payment method.
        </Typography>

        <Typography align="left" pt={4} style={{color: 'white'}}>
        You'll have a chance to review your order before it's placed.
        </Typography>
      </Grid>
    </React.Fragment>

  );
}