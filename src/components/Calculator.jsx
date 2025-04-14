

import React, { useState } from 'react'
import './Calculator.css'
const Calculator = () => {
    const [result,setResult]= useState('')
    const[expression,setExpression]=useState('')

    const handleClick=(event)=>{

        if(event==="="){
            try{
                if (!expression.trim()) {
                    setResult('');
                    return;
                  }
    
                  const sanitized = expression.replace(/^0+(?!\.)/, '');
                  
                  const evalResult = eval(sanitized);
                  setResult(evalResult.toString());
            }
            catch(error){
                setResult('error')
            }
        }else if(event==='C'){
            setExpression('')
            setResult('')
        }else if(event==="←"){
            setExpression((prev)=>prev.slice(0,-1))
        }else if(event==="%"){
            try{
                const evalpercent= eval(expression)/100
                setResult(evalpercent.toString())
            }catch(error){
                setResult('error')
            }
        }else{
            setExpression((prev)=>prev+event)
            setResult('')
        }
    }

  return (
    <div className='calculator-container'>
      <div className='calculator'>
        <div className='display'>
          {result || expression || '0'}
        </div>
        <div className='buttons'>
            <button onClick={()=>handleClick('C')}>C</button>
            <button onClick={()=>handleClick('←')}>←</button>
            <button onClick={()=>handleClick('%')}>%</button>
            <button onClick={()=>handleClick('/')}>/</button>

            <button onClick={()=>handleClick('7')}>7</button>
            <button onClick={()=>handleClick('8')}>8</button>
            <button onClick={()=>handleClick('9')}>9</button>
            <button onClick={()=>handleClick('*')}>*</button>


            <button onClick={()=>handleClick('4')}>4</button>
            <button onClick={()=>handleClick('5')}>5</button>
            <button onClick={()=>handleClick('6')}>6</button>
            <button onClick={()=>handleClick('-')}>-</button>


            <button onClick={()=>handleClick('1')}>1</button>
            <button onClick={()=>handleClick('2')}>2</button>
            <button onClick={()=>handleClick('3')}>3</button>
            <button onClick={()=>handleClick('+')}>+</button>

            <button onClick={()=>handleClick('00')}>00</button>
            <button onClick={()=>handleClick('0')}>0</button>
            <button onClick={()=>handleClick('.')}>.</button>
            <button onClick={()=>handleClick('=')}>=</button>

        </div>
      </div>
    </div>
  )
}

export default Calculator
