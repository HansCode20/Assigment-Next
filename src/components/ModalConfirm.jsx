import React from 'react'

const ModalConfirm = ({isOpen,id}) => {
  return (
    <div className={`${isOpen ? 'block' : 'hidden'} grid h-40 place-items-center place-content-center items-center justify-center bg-slate-800`}>
        <h1>Are You sure want to delete this food?</h1>
    </div>
  )
}

export default ModalConfirm