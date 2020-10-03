import React from 'react'

const AddTodo = (props) => {
  return (
    <div>
      <input type="text" value={props.value} onChange={props.onChange}></input>
      <p>{props.value}</p>
      <button onClick={props.add}>追加</button>
    </div>
  )
}
export default AddTodo

//propsは、例えばhandleCangeは定義されていないが、親からonChangeという名前でhandleCangeを渡したので、子ではprops.onChangeで使用できる
