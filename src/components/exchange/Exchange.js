//import modules
import React from "react"
import Select from "react-select"

//import css files
import "./Exchange.css"
import { useState } from "react"
import { useEffect } from "react"
import { useMemo } from 'react';

export const Exchange = (props) => {
  const options = props.currency.map((item) => {
    return {
      value: item.ccy,
      label: item.ccy,
      buy: Number(item.buy).toFixed(0),
      sell: Number(item.sale).toFixed(0),
    }
  })

  options.push({
    value: "UAH",
    label: "UAH",
    buy: 1,
    sell: 1,
  })

  const [activeCurrencyBuy, setActiveCurrencyBuy] = useState({
    value: "",
    currency: "",
  })

  const [activeCurrencySell, setActiveCurrencySell] = useState({
    value: "",
    currency: "",
  })

  const [firstValue, setFirstValue] = useState()

  const [secondValue, setSecondValue] = useState()


  useEffect(() => {
    if (activeCurrencyBuy.currency === "BTC") {
      setActiveCurrencyBuy({ value: activeCurrencyBuy.value * options[0].buy })
    } else if (activeCurrencySell.currency === "BTC") {
      setActiveCurrencySell({
        value: activeCurrencySell.value * options[0].buy,
      })
    } else {
      if (activeCurrencyBuy.value > activeCurrencySell.value) {
        if (activeCurrencySell.value) {
          if (secondValue) {
            setSecondValue(
              (firstValue * activeCurrencyBuy.value) / activeCurrencySell.value
            )
          }
        }
      } else {
        if (activeCurrencyBuy.value) {
          if (firstValue) {
            setSecondValue(
              firstValue * (activeCurrencyBuy.value / activeCurrencySell.value)
            )
          }
        }
      }
    }
  })

  return (
    <div className="exchange_body">
      <div className="exchange_container">
        <form className="exchange_list">
          <Select
            defaultValue={options[0].label}
            className="exchange_select"
            options={options}
            onChange={(e) =>
              setActiveCurrencyBuy({
                value: e.buy,
                currency: e.label,
              })
            }
          />
          <input
            value={firstValue}
            placeholder="0.00"
            onChange={(e) => {
              setFirstValue(Number(e.target.value).toFixed(0))
              setSecondValue(Number(e.target.value).toFixed(0))
            }}
          />
          <Select
            defaultValue={options[0].label}
            className="exchange_select"
            options={options}
            onChange={(e) =>
              setActiveCurrencySell({
                value: e.sell,
                currency: e.label,
              })
            }
          />
          <input
            value={secondValue}
            placeholder="0.00"
            onChange={(e) => {
              setFirstValue(Number(e.target.value).toFixed(0))
              setSecondValue(Number(e.target.value).toFixed(0))
            }}
          />
        </form>
      </div>
    </div>
  )
}
