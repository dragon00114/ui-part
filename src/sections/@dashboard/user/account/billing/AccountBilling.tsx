// @mui
import { Grid,Stack } from '@mui/material';
// @types
import {
  IUserAccountBillingCreditCard,
  IUserAccountBillingAddress
} from '../../../../../@types/user';
//
import AccountBillingAddressBook from './AccountBillingAddressBook';
import AccountBillingPaymentMethod from './AccountBillingPaymentMethod';

// ----------------------------------------------------------------------

type Props = {
  cards: IUserAccountBillingCreditCard[];
  addressBook: IUserAccountBillingAddress[];
};

export default function AccountBilling({ cards, addressBook }: Props) {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12} md={12}>
        <Stack spacing={3}>
          <AccountBillingPaymentMethod cards={cards} />
          <AccountBillingAddressBook addressBook={addressBook} />
        </Stack>
      </Grid>
    </Grid>
  );
}
