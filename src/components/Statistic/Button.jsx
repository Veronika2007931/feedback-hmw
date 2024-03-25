

export function Button({onAddingGood, onAddingNeutral, onAddingBad}){


    return(
        <div>
            <button type="button" onClick={onAddingGood}>Good</button>
            <button type="button" onClick={onAddingNeutral}>Neutral</button>
            <button type="button" onClick={onAddingBad}>Bad</button>
        </div>
    )
}