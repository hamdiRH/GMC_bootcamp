import React, { useState } from "react"
const Calculatrice = () => {
    const [result, setResult] = useState("0")
    const [operator, setOperator] = useState("")
    const [oper, setOper] = useState(false)
    const [somme, setSomme] = useState(0)
    const calcul = (x) => {
        if (oper) {
            setResult('0')
            setResult(x + "")
            setOper(false)
        }
        else {
            setResult(+("" + result + x))
        }
    }
    const revert = () => {
        setResult((result + "").slice(0, -1))
    }
    const reset = () => {
        setResult("0")
        setOperator("")
        setOper(false)
        setSomme(0)
    }
    const div = () => {
        !oper && cal()
        setSomme(+result)
        setOperator("div")
        setOper(true)
    }
    const mult = () => {
        !oper && cal()
        setSomme(+result)
        setOperator("mult")
        setOper(true)
    }
    const minus = () => {
        !oper && cal()
        setSomme(+result)
        setOperator("minus")
        setOper(true)
    }
    const plus = () => {
        !oper && cal()
        setSomme(+result)
        setOperator("plus")
        setOper(true)
    }
    const cal = () => {
        switch (operator) {
            case "plus": { setResult(+somme + +result); setOper(true); return setOper(true) }
            case "mult": { setResult(+somme * +result); return setOper(true) }
            case "minus": { setResult(+somme - +result); return setOper(true) }
            case "div": { setResult(+somme / +result); setOper(true); return setOper(true) }
            default: return;
        }
    }
    return (
        <div className="calculatrice">
            <span className="result">{result}</span>
            <div className="calc-buttons">
                <div>
                    <span className="reset" onClick={reset}>C</span>
                    <span onClick={revert}>&#8592;</span>
                    <span onClick={div}>&#247;</span>
                </div>
                <div>
                    <span onClick={() => { calcul(7) }}>7</span>
                    <span onClick={() => { calcul(8) }} >8</span>
                    <span onClick={() => { calcul(9) }} >9</span>
                    <span onClick={mult}>x</span>
                </div>
                <div>
                    <span onClick={() => { calcul(4) }} >4</span>
                    <span onClick={() => { calcul(5) }} >5</span>
                    <span onClick={() => { calcul(6) }} >6</span>
                    <span onClick={minus}>-</span>
                </div>
                <div>
                    <span onClick={() => { calcul(1) }} >1</span>
                    <span onClick={() => { calcul(2) }} >2</span>
                    <span onClick={() => { calcul(3) }} >3</span>
                    <span onClick={plus}>&#43;</span>
                </div>
                <div>
                    <span className="zero" onClick={() => { calcul(0) }} >0</span>
                    <span onClick={cal}>=</span>
                </div>
            </div>
        </div>
    );


}
export default Calculatrice
