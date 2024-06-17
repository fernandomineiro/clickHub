import styled from 'styled-components';
import { Table, Dropdown, DropdownButton } from 'react-bootstrap';

const StyledTitle = styled.label`
 backgroud-color: black;
 font-weight: 600; 
 margin-top: 5px;
`;

const Carreira = () =>{
    
    return (
        <div className="container">
  <div className="row" style={{marginBottom: '10px'}}>
    <div className="col-6">
    <div className="card" style={{position: 'relative', height: '120px'}}>
  <div className="card-body" style={{display: 'flex', justifyContent: 'space-between'}}>
    <div style={{display: 'flex', flexDirection: 'column'}}>
  <p style={{fontSize: '14px', fontWeight: '400', marginBottom: '-0px'}}>Saldo Atual</p>
  <p style={{fontSize: '26px', fontWeight: '600', marginBottom: '-2px'}}>R$ 0,00</p>
  </div>
  <div>
  <button className="btn btn-warning mx-1"><i className="bi bi-box"></i></button>
  </div>
  </div>
</div>
    </div>
    <div className="col-6">
    <div className="card" style={{position: 'relative', height: '120px'}}>
  <div className="card-body" style={{display: 'flex', justifyContent: 'space-between'}}>
    <div style={{display: 'flex', flexDirection: 'column'}}>
  <p style={{fontSize: '14px', fontWeight: '400', marginBottom: '-0px'}}>ENTRADAS</p>
  <p style={{fontSize: '26px', fontWeight: '600', marginBottom: '-2px'}}>R$ 0,00</p>
  <p style={{fontSize: '12px', cursor: 'pointer'}}>Ver entradas</p>
  </div>
  <div>
  <button className="btn btn-warning mx-1"><i className="bi bi-box"></i></button>
  </div>
  </div>
</div>
    </div>
    
  </div>
  <div className="row" style={{marginBottom: '10px'}}>
    <div className="col-6">
    <div className="card" style={{position: 'relative', height: '120px'}}>
  <div className="card-body" style={{display: 'flex', justifyContent: 'space-between'}}>
    <div style={{display: 'flex', flexDirection: 'column'}}>
  <p style={{fontSize: '14px', fontWeight: '400', marginBottom: '-0px'}}>SAÍDAS</p>
  <p style={{fontSize: '26px', fontWeight: '600', marginBottom: '-2px'}}>R$ 0,00</p>
  <p style={{fontSize: '12px', cursor: 'pointer'}}>ver saídas</p>
  </div>
  <div>
  <button className="btn btn-warning mx-1"><i className="bi bi-box"></i></button>
  </div>
  </div>
</div>
    </div>
    <div className="col-6">
    <div className="card" style={{position: 'relative', height: '120px'}}>
  <div className="card-body" style={{display: 'flex', justifyContent: 'space-between'}}>
    <div style={{display: 'flex', flexDirection: 'column'}}>
  <p style={{fontSize: '14px', fontWeight: '400', marginBottom: '-0px'}}>TOTAL EM CACSBACK RECEBIDO</p>
  <p style={{fontSize: '26px', fontWeight: '600', marginBottom: '-2px'}}>R$ 0,00</p>

  </div>
  <div>
  <button className="btn btn-warning mx-1"><i className="bi bi-box"></i></button>
  </div>
  </div>
</div>
    </div>

    
  </div>


  <div className="container my-5 text-white" style={{ backgroundColor: '#181818', padding: '20px', borderRadius: '10px' }}>
      <h5>EXTRATO DO PERÍODO</h5>

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

export default Carreira;