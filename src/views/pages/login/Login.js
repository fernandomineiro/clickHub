import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import myImage from '../../../assets/images/logo.png';

const Login = () => {
  return (
    <div style={{backgroundColor: 'red'}} className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-body-secondary">Faça login em sua conta</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Email" autoComplete="Email" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Senha"
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                      <Link to="/dashboard">
                        <CButton color="primary" style={{background: 'black', border: 'none'}} className="px-4">
                          Login
                        </CButton>
                        </Link>
                      </CCol>
                      <CCol xs={6} className="text-right">
                      <Link to="/lost">
                        <CButton color="link" style={{ fontWeight: 700, color: 'white', fontSize: '12pt'}} className="px-0">
                          Perdeu Senha?
                        </CButton>
                        </Link>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white" style={{ width: '44%', }}>
                <CCardBody className="text-center" style={{backgroundColor: 'orange', fontWeight: 700}}>
                  <div>
                  <img src={myImage} alt="Descrição da imagem" />
                    <p>
                    Descubra a facilidade do dropshipping: sem estoque, sem complicações, apenas vendas e lucros diretos para o seu negócio!
                    </p>
                    <Link to="/register">
                      <CButton color="primary" style={{backgroundColor: 'black', border: 'none'}} className="mt-3" active tabIndex={-1}>
                        Registre agora!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
