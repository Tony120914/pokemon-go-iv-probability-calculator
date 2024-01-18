
export default function IVsTable({ floor }) {

    return (
        <>
            <table className='table table-striped table-hover table-bordered table-sm'>
                <thead>
                    <tr>
                        <th scope="col">Appraisal Star</th>
                        <th scope="col">IV Total</th>
                        <th scope="col">Cumulative Probability %</th>
                        <th scope="col"># of Combinations</th>
                    </tr>
                </thead>
                <tbody className='table-group-divider'>
                    {IVsCombinationProbabilityRow(floor)}
                </tbody>
            </table>
        </>
    )
}

const IV_CAP = 15
const STAR1 = 23;
const STAR2 = 30;
const STAR3 = 37;
const STAR4 = 45;

// Count all combinations of distributing numIVs to ATK/DEF/HP with a certain floor
function IVsCombinationCount(numIVs, floor) {
    let combinationCount = 0;
    for (let i = floor[0]; i <= Math.min(numIVs, IV_CAP); i++) {
        for (let j = floor[1]; j <= Math.min(numIVs - i, IV_CAP); j++) {
            let leftoverIVs = numIVs - i - j;
            if ((leftoverIVs <= IV_CAP) && (leftoverIVs >= floor[2])) {
                combinationCount +=1;
            }
        }
    }
    return combinationCount;
}

// Calculate cumulative probabilty and return table rows
function IVsCombinationProbabilityRow(floor) {

    // Find sum of all possible combinations while keeping track of those combinations
    let combinationCountSum = 0;
    let combinationCounts = [];
    let floorSum = floor[0] + floor[1] + floor[2];
    for (let i = IV_CAP * 3; i >= floorSum; i--) {
        let combinationCount = IVsCombinationCount(i, floor)
        combinationCounts.push(combinationCount);
        combinationCountSum += combinationCount;
    }
    
    // Calculate cumulative probability and build table rows
    let cumulativeProbability = 0;
    let row = [];
    for (let i = 0; i < combinationCounts.length; i++) {
        cumulativeProbability += combinationCounts[i] / combinationCountSum * 100;
        let IVsTotal = IV_CAP * 3 - i;
        let highlight = IVsTotal == STAR4 || IVsTotal == STAR3 || IVsTotal == STAR2 || IVsTotal == STAR1;
        row.push(
            <tr key={IVsTotal} className={highlight ? 'table-active' : ''} style={highlight? {'--bs-table-bg-state':'#2f0d0d', '--bs-table-hover-bg':'#4b0c0c'} : {}}>
                <td>{buildAppraisalStars(IVsTotal)}</td>
                <td>{IVsTotal}</td>
                <td>{`${Math.round(cumulativeProbability * 1000) / 1000}%`}</td>
                <td>{combinationCounts[i]}</td>
            </tr>
        );
    }
    return row;
}

// Build appraisal star icons based on IV total:
// 0* = 0-22 IVs
// 1* = 23-29 IVs
// 2* = 30-36 IVs
// 3* = 37-44 IVs
// 4* = 45 IVs
function buildAppraisalStars(IVsTotal) {
    let appraisal = 0;
    if (IVsTotal == STAR4) {
        appraisal = 4;
    }
    else if (IVsTotal >= STAR3) {
        appraisal = 3;
    }
    else if (IVsTotal >= STAR2) {
        appraisal = 2;
    }
    else if (IVsTotal >= STAR1) {
        appraisal = 1;
    }

    let stars = [];
    for (let i = 0; i < appraisal; i++) {
        stars.push(<img src='appraisalStar.png' key={i+1} height='20' />);
    }
    return stars;
}