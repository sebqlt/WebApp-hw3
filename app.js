//first line
function generateArray(start,end,step){
    var array=[]
    if(start>end){
        i=start
            while(i>=end){
            array.push(i)
            i=i+step 
            }
        }
    else if(start<end){
        i=start
            while(i<=end){
            array.push(i)
            i=i+step
            }
    }
   
    return array
}
//second line
function sum(array){
    sum=0
    for(i=0;i<array.length;i++){
        sum=sum+array[i]
    }
    return sum

}
//third line
function binary(array){
    var binArray=[]
    for(i=0;i<array.length;i++){
        binArray.push(array[i].toString(2))
    }
    return binArray
}
//main
function myFunction(){
    const a = prompt("Enter the start :");
    const b = prompt("Enter the end :");
    const c = prompt("Enter the step :");
    start=parseInt(a)
    end=parseInt(b) 
    step=parseInt(c)
    if (Number.isInteger(start)&&Number.isInteger(end)&&Number.isInteger(step)){
        if((start<end&&step>0)||(start>end&&step<0)){
            myArray=generateArray(start,end,step)
            mySum=sum(myArray)
            myBin=binary(myArray)
            document.getElementById("result").innerHTML = "My array is: "+myArray+"</br> The sum is : "+mySum+"</br>The binary of absolut element values are : "+myBin
        }
        else{
            document.getElementById("result").innerHTML ="Invalid integer intput, please reload and try again"
        }
    }  
    else{
        document.getElementById("result").innerHTML ="Invalid integer intput, please reload and try again"
    }
}