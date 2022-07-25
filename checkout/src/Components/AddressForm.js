import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { InputLabel } from '@mui/material';

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
      <Grid item xs={12} sm={4} align="left">
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
      <Typography variant="h5" gutterBottom align='left' pt={4}>
        BILLING INFORMATION
      </Typography>
      <Grid container spacing={1}>
        <Grid item  sx={{width: 125}}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            autoComplete="given-name"
            variant="outlined"
            InputLabelProps={{ shrink: true }} 
          />
        </Grid>
        <Grid item sx={{width: 125}}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"

            autoComplete="family-name"
            variant="outlined"
            InputLabelProps={{ shrink: true }} 
          />
        </Grid>
        <Grid item xs={12} align="left" >
          <TextField
          sx={{width: 242}}
            required
            id="address1"
            name="address1"
            label="Billing Adress"
            autoComplete="shipping address-line1"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={5} align="left">
          <TextField
            id="address2"
            name="address2"
            label="Billing Adress, line 2"
            sx={{width: 242}}
            autoComplete="shipping address-line2"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12} align="left" sx={{width: 250 }}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            autoComplete="shipping country"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={5} sm={6} align="left">
          <TextField
            required
            id="city"
            name="city"
            label="City"
            autoComplete="shipping address-level2"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={5} sm={6} align="left">
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"

            variant="outlined"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12} sm={6} align="left">
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"

            autoComplete="shipping postal-code"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Save my payment information so checkout is easy next time"
          />
        </Grid>
        <Typography align="left">
        In the event your Steam Wallet balance doesn’t cover the full cost of this transaction, you’ll be
        asked to cover the remaining balance due with a secondary payment method.
        </Typography>

        <Typography align="left" pt={4}>
        You'll have a chance to review your order before it's placed.
        </Typography>
      </Grid>
    </React.Fragment>
  );
}