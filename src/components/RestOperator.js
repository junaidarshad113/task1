import react,{useState} from "react";
const restoperator= () => {
    const count=useState[0];
    const sum=(...numbers)=> {
        return numbers.reduce((count, current) => {
            return count += current;
        });
        console.log(count);
    };
     
    sum(1,2,3,4,5) 


    return(
        <>
        
        </>
    );
}
export default restoperator;