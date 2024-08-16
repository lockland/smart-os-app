import React from "react"
import "./App.css"
import { AppShell, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import NavbarSimple from "./NavbarSimple"
import Main from "./Main";

function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header bg={"var(--primary-background-color)"}>
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="xl"
        />
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <NavbarSimple />
      </AppShell.Navbar>

      <AppShell.Main>
        <Main />
      </AppShell.Main>
    </AppShell>
  );
}

export default App
