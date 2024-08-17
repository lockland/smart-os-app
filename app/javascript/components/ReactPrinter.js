import { Button, Center, Table } from "@mantine/core";
import React, { useEffect, useRef, useState } from "react"



export default function ReactPrinter() {

  const [entries, setEntries] = useState([])

  useEffect(() => {
    fetch('/services.json')
      .then(response => response.json())
      .then(response => setEntries(response))
  }, [])

  const componentRef = useRef(null)

  const printArea = () => {
    const printContents = componentRef.current.innerHTML;
    const currentContents = document.body.innerHTML

    document.body.innerHTML = printContents
    window.print()
    document.body.innerHTML = currentContents
  }

  return (
    <div>
      <div ref={componentRef}>
        <Center>Orçamento mês</Center>
        <Table striped highlightOnHover withTableBorder>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Data</Table.Th>
              <Table.Th>Dia</Table.Th>
              <Table.Th>Descrição</Table.Th>
              <Table.Th>Dia Trabalhado</Table.Th>
              <Table.Th>QTD Funcionários</Table.Th>
              <Table.Th>Função</Table.Th>
              <Table.Th>Valor Diária</Table.Th>
              <Table.Th>Valor Passagem</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {entries.map((element, index) => (
              <Table.Tr key={index}>
                <Table.Td>{element.data}</Table.Td>
                <Table.Td>{element.dia}</Table.Td>
                <Table.Td>{element.descricao}</Table.Td>
                <Table.Td>{element.trabalhado}</Table.Td>
                <Table.Td>{element.qtd_funcionario}</Table.Td>
                <Table.Td>{element.funcao}</Table.Td>
                <Table.Td>{element.diaria}</Table.Td>
                <Table.Td>{element.passagem}</Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </div>

      <Button onClick={printArea}>Imprimir</Button>
    </div>
  )

}