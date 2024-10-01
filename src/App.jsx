import React, { useRef, useState } from 'react'
import './App.css'
import { ChildComp, ChildCompInner } from './components/ChildComp'
import ChildComp2 from './components/ChildComp2'

// function App() {
//   let num = 10;
//   let str = "Dinesh";
//   let bool = true;
//   let arr = [1, 2, 3, 4, 5];
//   let obj = {
//     "id": 1,
//     "name": "Dinesh",
//   }

//   let menus = ["Home", "About", "Contact", "Blog"];
//   let output = [];
//   for(let i = 0; i < menus.length; i++) {
//     output.push(<li key={i}>{menus[i]}</li>)
//   }
//   console.log(output);

//   return (
//     <>
//       <h1>Vite Project</h1>

//       <p>Number: {num}</p>
//       <p>String: {str}</p>
//       <p>Boolean: {bool.toString()}</p>
//       <p>Array: {arr}</p>
//       <p>Object: {obj.id}, {obj.name}</p>

//       <ul>
//       {
//         menus.map((v, i) => {
//           return (
//             <li key={i}>
//               {v}
//             </li>
//           )
//         })
//       }
//       </ul>

//       <ul>
//       {
//         menus.map((v, i) => <li key={i}>{v}</li>)
//       }
//       </ul>

//       <ul>
//         {output}
//       </ul>

//       <p>Boolean: {bool.toString()}</p>
//       {
//         (bool)
//           ?
//             <p>Condition is satisfied</p>
//           :
//             <p>Condition is not satisfied</p>
//       }

//       {
//         bool && <p>this is conditional rendering with only true/satisfied</p>
//       }
//     </>
//   )
// }

// function App() {
//   let num = 10;
//   let str = "Dinesh";
//   let bool = true;
//   let arr = [1, 2, 3, 4, 5];
//   let obj = {
//     "id": 1,
//     "name": "Dinesh",
//   }

//   return (
//     <>
//       <h1>Main App Component</h1>

//       <ChildComp num={num} str={str} bool={bool} arr={arr} obj={obj} />
//       <ChildCompInner num={num} str={str} bool={bool} arr={arr} obj={obj} />
//       <ChildComp2 />
//     </>
//   )
// }

// export class AppClass extends React.Component {
//   render() {
//     return (
//       <>
//         Class Component
//       </>
//     )
//   }
// }

// function App() {
//   let num = 10;

//   const [count, setCount] = useState(0);
//   const [logged, setLogged] = useState(false);

//   const handleClick = (e) => {
//     console.log(num);
//     num++;
//     console.log(num);
//     // setCount(count+1);
//     // setCount((count) => {
//     //   return count + 1
//     // })
//     setCount(e.target.id);
//   }

//   let arr = ["home", "about"];

//   return (
//     <>
//       <h1>State Management</h1>

//       {/* <p>Paragraph Content something...</p> */}
//       {/* <p>Number : {num}</p>
//       <p>Count: {count}</p>

//       <button onClick={handleClick}>Click</button> */}

//       {/* {
//         logged
//           ?
//             <button onClick={() => setLogged(false)}>Logout</button>
//           :
//             <button onClick={() => setLogged(true)}>Login</button>
//       } */}

//       <p>Count: {count}</p>
//       <ChildComp click={handleClick} />

//       <ChildComp2 name="Dinesh" age={30} />

//       {
//         arr.map((v, i) => {
//           return (
//             <li key={i}>{v}</li>
//           )
//         })
//       }
//     </>
//   )
// }

function App() {

  let usernameRef = useRef("");

  const [usernameState, setUsernameState] = useState("");
  const [usernameErr, setUsernameErr] = useState("");

  const handleImpure = (e) => {
    e.preventDefault();
    let username = document.getElementById('txtUsername').value;
    console.log('username', username);
  }

  const handleHalfImpure = () => {
    let username = usernameRef.current.value;
    console.log('username', username);
  }

  const handlePure = () => {
    console.log(usernameState);
    (usernameState === "")
      ?
        setUsernameErr("Please enter a username")
      :
        setUsernameErr("");
  }



  return (
    <>
      <h1>Form Handling</h1>

      {/* <h2>Impure Way</h2>

      <form onSubmit={handleImpure}>
        <input type="text" id="txtUsername" /><br />
        <button>Click</button>
      </form> */}

      {/* <h2>Half Impure Way</h2>

      <form>
        <input type="text" ref={usernameRef} /><br />
        <button type='button' onClick={handleHalfImpure}>Click</button>
      </form> */}

      <h2>Pure Way</h2>

      <form>
        <input type="text" onChange={(e) => setUsernameState(e.target.value)} />
        <span>{usernameErr}</span><br />
        <button type='button' onClick={handlePure}>Click</button>
      </form>
    </>
  )
}

export default App
