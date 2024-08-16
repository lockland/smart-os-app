import React from "react"
import { useState } from 'react';
import { Center } from '@mantine/core';
import classes from './NavbarSimple.module.css';

const data = [
  { link: '', label: 'Notifications' },
  { link: '', label: 'Billing' },
  { link: '', label: 'Security' },
  { link: '', label: 'SSH Keys' },
  { link: '', label: 'Databases' },
  { link: '', label: 'Authentication' },
  { link: '', label: 'Other Settings' },
];

export default function NavbarSimple() {
  const [active, setActive] = useState('Billing');

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Center className={classes.header} size="xl"> Menu </Center>
        {links}
      </div>
    </nav>
  );
}