import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { InputLabel } from '@mui/material';

const boxStyle = [


]

const paymentMethods = [
    {
        label: 'My Steam Wallet'
    },
    {
        label: 'PayPal'
    },
    {
        label: 'Visa'
    },
    {
        label: 'Mastercard'
    },
    {
        label: 'American Express'
    },
    {
        label: 'Discover'
    },
    {
        label: 'JCB'
    },
]



export default function AddressForm() {
  return (
    <React.Fragment>
      <Grid item xs={12} sm={4} align="left" >
        <TextField
            required
            select
            value={paymentMethods}
            id="paymentMethod"
            name="paymentMethod"
            label="Payment Method"
            autoComplete="given-name"
            variant="outlined"

            InputLabelProps={{ shrink: true }} 
            sx={{width: 250 }}
          />
      </Grid>
      <Typography variant="h5" gutterBottom align='left' pt={4} style={{color: 'white'}}>
        BILLING INFORMATION
      </Typography>
      <Grid container spacing={1}>
        <Grid item  sx={{width: 1000,}} align="left">
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
        </Grid>
        <Grid item sx={{width: 1000}} align="left" spacing={2}>
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
            id="state"
            name="state"
            label="State/Province/Region"
            sx={{width: 250}}
            variant="outlined"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item  align="left" sx={{width: 1000}}>
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
        </Grid>
        <Grid item xs={12} align="left" sx={{width: 250 }}>
          <TextField
            sx={{width: 250}}
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
        <Typography align="left" style={{color: 'white'}}>
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