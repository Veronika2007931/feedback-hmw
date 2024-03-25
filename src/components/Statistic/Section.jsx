

export function Section({isGood, isNeutral, isBad}){
    return(
        <div>
           <h2>Statistic</h2> 
           <ul>
            <li>Good:{isGood}</li>
            <li>Neutral:{isNeutral}</li>
            <li>Bad:{isBad}</li>
            <li>Total:</li>
            <li>Positive feedback:</li>
           </ul>
        </div>
    )
}