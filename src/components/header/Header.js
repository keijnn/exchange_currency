//import modules
import React from "react"

//import css files
import "./Header.css"

export const Header = (props) => {

  return (
    <div className="header_body">
      <div className="header_container">
        <div className="currency_title">
        <p>Currency: </p>
          <p>Buy: </p>
          <p>Sell: </p>
        </div>
        <ul className="currency_list">
          {props.currency.map(item => (
            <div key={Math.random(100)}>
              <li key={Math.random(100)}>{item.ccy}</li>

              <li key={Math.random(100)}>{Number(item.buy).toFixed(2) + ' UAH'}</li>

              <li key={Math.random(100)}>{Number(item.sale).toFixed(2) + ' UAH'}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}
