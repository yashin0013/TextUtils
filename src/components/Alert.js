import React from 'react'

export default function Alert(props) {
  return (
    props.alert &&
    <>
    <div className="container mt-2">

      <div className={`alert alert-${props.alert.color} alert-dismissible fade show`} role="alert">
  <strong>{props.alert.type}! </strong>{props.alert.msg}
</div>
    </div>
    </>
  )
}

