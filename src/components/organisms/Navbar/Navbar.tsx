'use client';

import React from 'react';
import { useDisclosure } from '@/hooks/useDisclosure';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AssessmentIcon from '@mui/icons-material/Assessment';
import DehazeIcon from '@mui/icons-material/Dehaze';
import HelpIcon from '@mui/icons-material/Help';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import PaidIcon from '@mui/icons-material/Paid';
import { Box, Button, Divider, Drawer } from '@mui/material';

export const Navbar = () => {
  const { isOpen, toggle } = useDisclosure();

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggle} onKeyDown={toggle}>
      hihi
      <Divider />
    </Box>
  );
  return (
    <div className="w-20 flex-shrink-0 shadow-[0_3px_7px_0_rgba(0,0,0,.27)]">
      <div className="flex flex-col">
        <Button
          onClick={toggle}
          startIcon={<DehazeIcon className="!text-2xl" />}
          sx={{
            '& > span': { mx: 'auto' },
            justifyContent: 'center',
            color: 'grey.500',
            py: 3,
          }}
        />
        <Drawer anchor="left" open={isOpen} onClose={toggle}>
          {list()}
        </Drawer>

        <Button
          className="flex-col text-[12px] capitalize leading-6"
          startIcon={<AccountBalanceWalletIcon className="!text-[28px]" />}
          sx={{
            '& > span': { mx: 'auto' },
            color: 'success.light',
          }}
        >
          Transactions
        </Button>
        <Button
          className="flex-col text-[12px] capitalize leading-6"
          startIcon={<PaidIcon className="!text-[28px]" />}
          sx={{
            '& > span': { mx: 'auto' },
            color: 'grey.500',
          }}
        >
          Report
        </Button>
        <Divider sx={{ my: 1, color: 'grey.500' }} />
        <Button
          className="flex-col text-[12px] capitalize leading-6"
          startIcon={<LocalGroceryStoreIcon className="!text-[28px]" />}
          sx={{
            '& > span': { mx: 'auto' },
            color: 'grey.500',
          }}
        >
          Store
        </Button>
        <Button
          className="flex-col text-[12px] capitalize leading-6"
          startIcon={<HelpIcon className="!text-[28px]" />}
          sx={{
            '& > span': { mx: 'auto' },
            color: 'grey.500',
          }}
        >
          Help
        </Button>
      </div>
    </div>
  );
};
