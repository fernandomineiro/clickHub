import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">
          ClickHub
        </a>
        <span className="ms-1">&copy; 2024, todos direitos reservado.</span>
      </div>
      <div className="ms-auto">
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
