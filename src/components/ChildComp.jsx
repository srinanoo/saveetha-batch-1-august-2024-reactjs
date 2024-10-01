export function ChildComp({click}) {
    // console.log(props);
    // props.num = 20;

    console.log(click);
    return (
        <>
            <h1>Child 1 Component</h1>
            {/* <p>Number: {props.num}</p> */}

            <button onClick={click} id="200">Click</button>
        </>
    )
}

export function ChildCompInner({num, str, bool, arr, obj}) {
    return (
        <>
            <h2>Child Inner Component</h2>
            <p>{num}</p>

            <NextedFunc />
        </>
    )
}

function NextedFunc() {
    return (
        <>
            <h3>Nexted Function</h3>
        </>
    )
}

// export default ChildComp;
// export { ChildComp, ChildCompInner };