import styled from 'styled-components';
import { Table, Dropdown, DropdownButton } from 'react-bootstrap';

const StyledTitle = styled.label`
 backgroud-color: black;
 font-weight: 600; 
 margin-top: 5px;
`;

const Pedidos = () =>{
    
    return (
        <div className="container">
  <div className="row" style={{marginBottom: '10px'}}>
    <div className="col-4">
    <div className="card" style={{position: 'relative'}}>
  <div className="card-body" style={{display: 'flex', justifyContent: 'space-between'}}>
    <div style={{display: 'flex', flexDirection: 'column'}}>
  <p style={{fontSize: '14px', fontWeight: '400', marginBottom: '-0px'}}>PEDIDOS NO PERIODO</p>
  <p style={{fontSize: '26px', fontWeight: '600', marginBottom: '-2px'}}>0</p>
  <p style={{fontSize: '12px', cursor: 'pointer'}}>Ver pedidos</p>
  </div>
  <div>
  <button className="btn btn-warning mx-1"><i className="bi bi-box"></i></button>
  </div>
  </div>
</div>
    </div>
    <div className="col-4">
    <div className="card" style={{position: 'relative'}}>
  <div className="card-body" style={{display: 'flex', justifyContent: 'space-between'}}>
    <div style={{display: 'flex', flexDirection: 'column'}}>
  <p style={{fontSize: '14px', fontWeight: '400', marginBottom: '-0px'}}>VENDIDO NO PERIODO</p>
  <p style={{fontSize: '26px', fontWeight: '600', marginBottom: '-2px'}}>0</p>
  <p style={{fontSize: '12px', cursor: 'pointer'}}>Ver pedidos</p>
  </div>
  <div>
  <button className="btn btn-warning mx-1"><i className="bi bi-box"></i></button>
  </div>
  </div>
</div>
    </div>
    <div className="col-4">
    <div className="card" style={{position: 'relative'}}>
  <div className="card-body" style={{display: 'flex', justifyContent: 'space-between'}}>
    <div style={{display: 'flex', flexDirection: 'column'}}>
  <p style={{fontSize: '14px', fontWeight: '400', marginBottom: '-0px'}}>PEDIDOS NO PERIODO</p>
  <p style={{fontSize: '26px', fontWeight: '600', marginBottom: '-2px'}}>0</p>
  <p style={{fontSize: '12px', cursor: 'pointer'}}>Ver pedidos</p>
  </div>
  <div>
  <button className="btn btn-warning mx-1"><i className="bi bi-box"></i></button>
  </div>
  </div>
</div>
    </div>
    
  </div>
  <div className="row" style={{marginBottom: '10px'}}>
    <div className="col-4">
    <div className="card" style={{position: 'relative'}}>
  <div className="card-body" style={{display: 'flex', justifyContent: 'space-between'}}>
    <div style={{display: 'flex', flexDirection: 'column'}}>
  <p style={{fontSize: '14px', fontWeight: '400', marginBottom: '-0px'}}>NÃO PAGOS</p>
  <p style={{fontSize: '26px', fontWeight: '600', marginBottom: '-2px'}}>0</p>
  <p style={{fontSize: '12px', cursor: 'pointer'}}>Mostrar</p>
  </div>
  <div>
  <button className="btn btn-warning mx-1"><i className="bi bi-box"></i></button>
  </div>
  </div>
</div>
    </div>
    <div className="col-4">
    <div className="card" style={{position: 'relative'}}>
  <div className="card-body" style={{display: 'flex', justifyContent: 'space-between'}}>
    <div style={{display: 'flex', flexDirection: 'column'}}>
  <p style={{fontSize: '14px', fontWeight: '400', marginBottom: '-0px'}}>PROCESSANDO</p>
  <p style={{fontSize: '26px', fontWeight: '600', marginBottom: '-2px'}}>0</p>
  <p style={{fontSize: '12px', cursor: 'pointer'}}>Mostrar</p>
  </div>
  <div>
  <button className="btn btn-warning mx-1"><i className="bi bi-box"></i></button>
  </div>
  </div>
</div>
    </div>
    <div className="col-4">
    <div className="card" style={{position: 'relative'}}>
  <div className="card-body" style={{display: 'flex', justifyContent: 'space-between'}}>
    <div style={{display: 'flex', flexDirection: 'column'}}>
  <p style={{fontSize: '14px', fontWeight: '400', marginBottom: '-0px'}}>ENVIADOS</p>
  <p style={{fontSize: '26px', fontWeight: '600', marginBottom: '-2px'}}>0</p>
  <p style={{fontSize: '12px', cursor: 'pointer'}}>Mostrar</p>
  </div>
  <div>
  <button className="btn btn-warning mx-1"><i className="bi bi-box"></i></button>
  </div>
  </div>
</div>
    </div>
    
  </div>

  <div className="row" style={{marginBottom: '10px'}}>
    <div className="col-4">
    <div className="card" style={{position: 'relative'}}>
  <div className="card-body" style={{display: 'flex', justifyContent: 'space-between'}}>
    <div style={{display: 'flex', flexDirection: 'column'}}>
  <p style={{fontSize: '14px', fontWeight: '400', marginBottom: '-0px'}}>COM PENDÊNCIAS</p>
  <p style={{fontSize: '26px', fontWeight: '600', marginBottom: '-2px'}}>0</p>
  <p style={{fontSize: '12px', cursor: 'pointer'}}>Mostrar</p>
  </div>
  <div>
  <button className="btn btn-warning mx-1"><i className="bi bi-box"></i></button>
  </div>
  </div>
</div>
    </div>
    <div className="col-4">
    <div className="card" style={{position: 'relative'}}>
  <div className="card-body" style={{display: 'flex', justifyContent: 'space-between'}}>
    <div style={{display: 'flex', flexDirection: 'column'}}>
  <p style={{fontSize: '14px', fontWeight: '400', marginBottom: '-0px'}}>REEMBOLSOS</p>
  <p style={{fontSize: '26px', fontWeight: '600', marginBottom: '-2px'}}>0</p>
  <p style={{fontSize: '12px', cursor: 'pointer'}}>Mostrar</p>
  </div>
  <div>
  <button className="btn btn-warning mx-1"><i className="bi bi-box"></i></button>
  </div>
  </div>
</div>
    </div>
    <div className="col-4">
    <div className="card" style={{position: 'relative'}}>
  <div className="card-body" style={{display: 'flex', justifyContent: 'space-between'}}>
    <div style={{display: 'flex', flexDirection: 'column'}}>
  <p style={{fontSize: '14px', fontWeight: '400', marginBottom: '-0px'}}>CANCELAMENTOS</p>
  <p style={{fontSize: '26px', fontWeight: '600', marginBottom: '-2px'}}>0</p>
  <p style={{fontSize: '12px', cursor: 'pointer'}}>Mostrar</p>
  </div>
  <div>
  <button className="btn btn-warning mx-1"><i className="bi bi-box"></i></button>
  </div>
  </div>
</div>
    </div>
    
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
          <button className="btn btn-warning mx-1"><i className="bi bi-cloud"></i></button>
          <button className="btn btn-warning mx-1"><i className="fas fa-filter"></i></button>
          <button className="btn btn-warning mx-1"><i className="fas fa-plus"></i></button>
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
</div>

    )
}

export default Pedidos;