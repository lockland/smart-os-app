import React from "react"
import { useState } from 'react';
import { Center } from '@mantine/core';
import classes from './NavbarSimple.module.css';
import { NavLink } from "react-router-dom";

const data = [
  { link: '/empresa', label: 'Cadastro empresa' },
  { link: '/funcionario', label: 'Cadastro funcionario' },
  { link: '/custos', label: 'Cadastrar custo' },
  { link: '/servico', label: 'Cadastrar servico' },
  { link: '/nota-fiscal', label: 'Cadastro nota fiscal' },
  { link: '/orcamento', label: 'Orçamento' },
];

export default function NavbarSimple() {
  // const [active, setActive] = useState('Orçamento');
  const [active, setActive] = useState('');

  const links = data.map((item) => (
    <NavLink
      className={classes.link}
      data-active={item.label === active || undefined}
      to={item.link}
      key={item.label}
      onClick={(event) => {
        setActive(item.label);
      }}
    >
      <span>{item.label}</span>
    </NavLink>
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