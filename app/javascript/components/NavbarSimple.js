import React from "react"
import { useState } from 'react';
import { Center } from '@mantine/core';
import classes from './NavbarSimple.module.css';
import { Link } from "react-router-dom";

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
  const [actived, setActived] = useState('');

  const links = data.map((item) => (
    <Link
      className={classes.link}
      data-active={item.label === actived || undefined}
      to={item.link}
      key={item.label}
      onClick={(event) => {
        setActived(item.label);
      }}
    >
      <span>{item.label}</span>
    </Link>
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