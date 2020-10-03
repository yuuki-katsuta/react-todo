import React, { useState } from 'react'
const TodoApp = () => {

  //hook機能（useState）をつかって、コンポーネント内で管理する変数、関数を設定

  //reactではinputなどのformを扱うとき、valueをstateする
  //setValueがvalueを操作する関数
  const [value, setValue] = useState("")

  //todoListという配列をstate
  const [todoList, setTodoList] = useState([])

  const handleCange = (e) => {
    const newValue = e.target.value
    setValue(newValue)
    //setValueでvalueの値を変更する
    //そして、そのvalueの値がpタグの{value}に反映される
  }

  const add = () => {
    const newTodo = [...todoList, value]
    //2回目以降の呼び出しでは、すでにtodoListの中に配列で値が入っている
    //その配列に入力値を追加した

    setTodoList(newTodo)
    //setTodoList(newTodo)でtodoListの値を変更している
    //console.log(newTodo)
    //console.log(todoList)

    //追加後に入力欄が消去されるようになった
    setValue("")
  }


  return (
    <div>
      <h1>TODO アプリ</h1>
      <div>
        <input type="text" value={value} onChange={handleCange}></input>
        <p>{value}</p>
        <button onClick={add}>追加</button>
        <ul>
          {todoList.map((todo, i) => (
            <li key={i}>{todo}</li>
          ))}
        </ul>
      </div>
    </div >
  )
}

export default TodoApp
