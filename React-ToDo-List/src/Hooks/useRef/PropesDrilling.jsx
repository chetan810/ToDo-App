export const PropsDrilling = () =>{
    return (
        <>
        <h1>component A</h1>
        <ChildComponent data="REACT JS"/>
        </>
    )
}

const ChildComponent = (props) =>{
    return (
        <>
        <h1>Hello i am component  B</h1>
        <GrandChildComponent data={props.data} />
        </>
    )
}
const GrandChildComponent = (props) =>{
    return (
        <>
        <h1>Hello i am child C</h1>
        <GreatGrandChildComponent data={props.data} />
        </>
    )
}
const GreatGrandChildComponent = (props) =>{
    return (
        <>
        <h1>i Love {props.data}</h1>
      
        </>
    )
}
