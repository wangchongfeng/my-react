import React from 'react'
import ReactDom from 'react-dom'

const jsx = (
  <div className="border">
    <p>全栈</p>
    <a href="https://www.kaikeba.com/">开课吧</a>
    <ul>
      <li>1</li>
      <li>omg-2</li>
    </ul>
  </div>
);

ReactDom.render(jsx, document.getElementById('app'))