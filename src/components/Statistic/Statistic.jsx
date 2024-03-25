

export function Statistic({isGood, isNeutral, isBad, total}){

   
    const percentage = ()=>{
     return (isGood*100)/total
    }

    return(
        <div>
           <h2>Statistic</h2> 
           <ul>
            <li>Good:{isGood}</li>
            <li>Neutral:{isNeutral}</li>
            <li>Bad:{isBad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {percentage()} %</li>
           </ul>
        </div>
    )
}