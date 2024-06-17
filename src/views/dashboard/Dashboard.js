import React from 'react'
import classNames from 'classnames'

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import { Table, Dropdown, DropdownButton } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



const Dashboard = () => {
  const navigate = useNavigate();
  const goToInfo = ()  =>{
    navigate('/infopedido');
  }
  return (
    <>
      <div className="container my-5 text-white" style={{ backgroundColor: '#181818', padding: '20px', borderRadius: '10px' }}>
      <h2 className="mb-4" >Resumo Geral</h2>
      <div className="row">
        <div className="col-md-6 col-lg-3 mb-3">
          <div className="card bg-dark text-white h-60">
            <div className="card-body">
            <h5 className="card-title">Pedidos Hoje</h5>
              <p className="card-text display-4"style={{fontSize: '16pt'}} >0</p>
              <a href="#" className="btn btn-warning">Ver Pedidos</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-3">
          <div className="card bg-dark text-white h-60">
            <div className="card-body">
              <h5 className="card-title" style={{fontSize: '12pt'}}>Faturado Hoje</h5>
              <p className="card-text display-4" style={{fontSize: '16pt'}}>R$ 0,00</p>
              <a href="#" className="btn btn-warning">Ver Pedidos</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-3">
          <div className="card bg-dark text-white h-60">
            <div className="card-body">
              <h5 className="card-title">Faturado Esse Mês</h5>
              <p className="card-text display-4" style={{fontSize: '16pt'}}>R$ 0,00</p>
              <a href="#" className="btn btn-warning">Ver Relatórios</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-3">
          <div className="card bg-dark text-white h-60">
            <div className="card-body">
              <h5 className="card-title">Saldo Atual</h5>
              <p className="card-text display-4" style={{fontSize: '16pt'}}>R$ 0,00</p>
              <a href="#" className="btn btn-warning">Ver Carteira</a>
            </div>
          </div>
        </div>
      </div>
      <div className="card bg-dark text-white mt-3">
        <div className="card-body">
          <h5 className="card-title">Notificações</h5>
          <p className="card-text" style={{textAlign: 'center'}}>Nenhuma pendência no momento</p>
          <a href="#" className="btn btn-warning text-center" style={{textAlign: 'center'}}>Ver Pendências</a>
        </div>
      </div>
    </div>
    <div className="container my-5 text-white" style={{ backgroundColor: '#181818', padding: '20px', borderRadius: '10px' }}>
      <h2 className="mb-4">Endereço para os canais de venda</h2>
      <form>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="cep" className="form-label">CEP</label>
            <input type="text" className="form-control" id="cep" defaultValue="06460-055" />
          </div>
          <div className="col-md-6">
            <label htmlFor="numero" className="form-label">Número</label>
            <input type="text" className="form-control" id="numero" defaultValue="100" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-12">
            <label htmlFor="endereco" className="form-label">Endereço</label>
            <input type="text" className="form-control" id="endereco" defaultValue="Alameda Inajá" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-12">
            <label htmlFor="complemento" className="form-label">Complemento</label>
            <input type="text" className="form-control" id="complemento" defaultValue="Galpão 6" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="bairro" className="form-label">Bairro</label>
            <input type="text" className="form-control" id="bairro" defaultValue="Tamboré" />
          </div>
          <div className="col-md-6">
            <label htmlFor="cidade" className="form-label">Cidade</label>
            <input type="text" className="form-control" id="cidade" defaultValue="Barueri" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="uf" className="form-label">UF</label>
            <input type="text" className="form-control" id="uf" defaultValue="SP" />
          </div>
        </div>
      </form>
    </div>
    <div className="container my-5 text-white" style={{ backgroundColor: '#181818', padding: '20px', borderRadius: '10px' }}>
      <h5>Todos os pedidos de 01/06/2024 até 30/06/2024</h5>
      <div className="d-flex justify-content-between align-items-center my-3">
        <DropdownButton id="dropdown-basic-button" title="Itens por página">
          <Dropdown.Item href="#/10">10 por página</Dropdown.Item>
          <Dropdown.Item href="#/20">20 por página</Dropdown.Item>
          <Dropdown.Item href="#/50">50 por página</Dropdown.Item>
        </DropdownButton>
        <div>
          <button className="btn btn-warning mx-1"><i className="fas fa-sync-alt"></i></button>
          <button className="btn btn-warning mx-1"><i className="fas fa-filter"></i></button>
          <button onClick={()=>goToInfo()} className="btn btn-warning mx-1"><i className="fas fa-plus"></i></button>
        </div>
      </div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Data</th>
            <th>Código</th>
            <th>Código Venda</th>
            <th>Integração</th>
            <th>Cliente</th>
            <th>Valor da Venda</th>
            <th>Custo</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="8" className="text-center">Nenhum pedido encontrado</td>
          </tr>
        </tbody>
      </Table>
    </div>
    </>
  )
}

export default Dashboard
