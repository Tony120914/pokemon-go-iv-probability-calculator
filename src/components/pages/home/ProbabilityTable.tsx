
export default function ProbabilityTable({ icon, title, floor }: { icon: string, title: string, floor: number[] }) {
    const totalIVsTip = 'Pokemon stats (ATK/DEF/HP) can have up to 15 IVs each, maxing out at a sum of 45 IVs.';
    const cumulativeProbabilityTip = 'The chance of obtaining the Pokemon with the total IVs or higher.';
    
    const maxIV = 15;
    const starThreshold = [0, 23, 30, 37, 45]; // [0*, 1*, 2*, 3*, 4*]

    function buildProbabilityRows(floor: number[]) {
        let numCombinationsSum = 0;
        const numCombinations = [];
        const floorSum = floor.reduce((acc, cur) => acc + cur, 0);
        for (let i = maxIV * 3; i >= floorSum; i--) {
            let numCombination = countCombinations(i, floor)
            numCombinations.push(numCombination);
            numCombinationsSum += numCombination;
        }

        let cumulativeProbability = 0;
        const row = [];
        for (const [i, numCombination] of numCombinations.entries()) {
            const totalIVs = maxIV * 3 - i;
            const stars = buildStars(totalIVs);
            cumulativeProbability += numCombination / numCombinationsSum * 100;
            const highlight = totalIVs != 0 && starThreshold.includes(totalIVs);
            row.push(
                <tr key={totalIVs} className={highlight ? 'table-active' : ''} style={highlight ? {'--bs-table-bg-state':'#2f0d0d', '--bs-table-hover-bg':'#4b0c0c'} as React.CSSProperties : {}}>
                    <td>{stars}</td>
                    <td>{totalIVs}</td>
                    {/* return it directly to avoid floating-point errors */}
                    <td>{`${Math.round(cumulativeProbability * 1000) / 1000}%`}</td> 
                    <td>{numCombination}</td>
                </tr>
            );
        }
        return row;
    }

    /**
     * Count all combinations of distributing totalIVs to ATK/DEF/HP,
     * given a certain floor.
     */
    function countCombinations(totalIVs: number, floor: number[]): number {
        let count = 0;
        for (let i = floor[0] || 0; i <= Math.min(totalIVs, maxIV); i++) {
            for (let j = floor[1] || 0; j <= Math.min(totalIVs - i, maxIV); j++) {
                const k = totalIVs - i - j;
                if ((k >= (floor[2] ? floor[2] : 0)) && (k <= maxIV)) {
                    count +=1;
                }
            }
        }
        return count;
    }

    /**
     * Build appraisal star icons based on total IVs:
     * 0* = 0-22 IVs
     * 1* = 23-29 IVs
     * 2* = 30-36 IVs
     * 3* = 37-44 IVs
     * 4* = 45 IVs
     */
    function buildStars(totalIVs: number): React.ReactElement[] {
        let appraisal = 0;
        if (totalIVs == starThreshold[4]) {
            appraisal = 4;
        }
        else if (totalIVs >= starThreshold[3]!) {
            appraisal = 3;
        }
        else if (totalIVs >= starThreshold[2]!) {
            appraisal = 2;
        }
        else if (totalIVs >= starThreshold[1]!) {
            appraisal = 1;
        }

        const stars = [];
        for (let i = 0; i < appraisal; i++) {
            stars.push(<img src='assets/appraisal-star.png' key={i+1} height='20' />);
        }
        return stars;
    }

    return (
        <div className="row table-responsive text-center mb-1">
            <TableTitle icon={icon} title={title} />
            <table className='table table-striped table-hover table-bordered table-sm'>
                <thead>
                    <tr>
                        <th scope="col">Appraisal Star</th>
                        <th scope="col">
                            <div className="d-flex justify-content-center gap-1">
                                Total IVs
                                <i className="bi bi-info-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title={totalIVsTip}></i>
                            </div>
                        </th>
                        <th scope="col">
                            <div className="d-flex justify-content-center gap-1">
                                Cumulative Probability %
                                <i className="bi bi-info-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title={cumulativeProbabilityTip}></i>
                            </div>
                        </th>
                        <th scope="col"># of Combinations</th>
                    </tr>
                </thead>
                <tbody className='table-group-divider'>
                    {buildProbabilityRows(floor)}
                </tbody>
            </table>
        </div>
    )
}

function TableTitle ({ icon, title }: { icon: string, title: string }) {
    return (
    <div className='d-sm-flex justify-content-center gap-3 mt-3 '>
        {icon ? <img src={icon} height='50px' ></img> : null}
        <h1 className='display-6'>{title}</h1>
    </div>
    );
}
