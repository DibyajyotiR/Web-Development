import React from 'react'
import  TodoApp from './Components/TodoItem'
import Counter from './Components/Counter'
import ProductList from './Components/ProductList'

const App = () => {
  return (
    <div>
        <ProductList
        products={[
          "apple",
          "banana",
          "cherry",
          "date",
          "egg",
          "fig",
          "grape",
          "kiwi",
          "lemon",
          "mango",
          "nectarine",
          "orange",
          "peach",
          "quince",
          "raspberry",
          "strawberry",
          "tomato",
          "watermelon",
        ]}
      /> 
      {/* <TodoApp/> */}
       {/* <Counter /> */}
    </div>
  )
}

export default App