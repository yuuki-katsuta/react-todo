import React, { useState } from 'react'
import AddTodo from './AddTodo'
import TodoElement from './TodoElement'

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
    const newTodo = { id: todoList.length, content: value }
    //idと入力値を持ったオブジェクト{id: , content: }

    console.log(newTodo)
    const newTodoList = [...todoList, newTodo]　// [{...}]
    //一回目は配列を展開してもなにもない（...todoListの部分）
    //2回目以降の呼び出しでは、すでにtodoListの中に [{...}] で値が入っている
    //setTodoList(newTodoList)で、そのtodoListに [{...}] を追加した

    console.log(newTodoList)

    setTodoList(newTodoList) //todoListに [{...}] を追加
    //setTodoList(newTodo)でtodoListの値を変更している
    //console.log(newTodo)
    console.log(todoList)

    //追加後に入力欄が消去されるようになった
    setValue("")
  }

  const handleDelete = (id) => {
    //このidがtodo.id（つまり選択したtodoのid）となる
    const newTodoList = todoList.filter(todo => todo.id !== id)
    //ここの引数todoは、要素を格納している配列オブジェクト？
    setTodoList(newTodoList)
  }

  return (
    <div>
      <h1>TODO アプリ</h1>
      <div>
        <AddTodo value={value} add={add} onChange={handleCange} />
        <ul>
          {todoList.map(todo => (
            <TodoElement
              key={todo.id}
              content={todo.content}
              onDelete={() => handleDelete(todo.id)}
            />
          ))}
        </ul>
      </div>
    </div >
  )
}
//todoはidとcontentを持ったオブジェクトである
//handleDelete(todo.id)のように、どのidのtodoを消去したいかを指定する

export default TodoApp
