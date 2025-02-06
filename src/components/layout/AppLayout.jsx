// src/components/layout/AppLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { AppShell, ActionIcon } from '@mantine/core';
import { AppShellNavbar as Navbar, AppShellHeader as Header } from '@mantine/core';
import { useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import DashboardNav from './DashboardNav';

function AppLayout() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} p="xs">
          <DashboardNav />
        </Navbar>
      }
      header={
        <Header
          height={60}
          p="xs"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <h2 style={{ margin: 0 }}>Slate Dashboard</h2>
          <ActionIcon
            variant="outline"
            color={dark ? 'yellow' : 'blue'}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
          >
            {dark ? <IconSun size="1.2rem" /> : <IconMoonStars size="1.2rem" />}
          </ActionIcon>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor: dark ? theme.colors.dark[8] : theme.colors.gray[0],
        }
      })}
    >
      <Outlet />
    </AppShell>
  );
}

export default AppLayout;
