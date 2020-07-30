
/*In a small town the population is p0 = 1000 at the beginning of a year. 
The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. 
How many years does the town need to see its population greater or equal to p = 1200 inhabitants?*/

/*Examples:
nbYear(1500, 5, 100, 5000) -> 15
nbYear(1500000, 2.5, 10000, 2000000) -> 10*/

function nbYear(p0, percent, aug, pLast) {
    let count = 0;   
    while(p0<pLast){
        p0 += p0 * percent/100 + aug;
        count++;
    }
    return count;
}
