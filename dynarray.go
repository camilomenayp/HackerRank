//https://www.hackerrank.com/challenges/dynamic-array/

/*
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

func dynamicArray(n int32, queries [][]int32) []int32 {
    // Write your code here
    seqList:=make([][]int32, n)
    var lastAnswer int32 = 0
    arrLastAnswer:= make([]int32,0)
    for _,v:=range queries {
        seqNumber:=(v[1]^lastAnswer)%n
        if v[0]==1 {
            seqList[seqNumber] = append(seqList[seqNumber],v[2])
        } else {
            lastAnswer = seqList[seqNumber][v[2]%int32(len(seqList[seqNumber]))]  
            arrLastAnswer = append(arrLastAnswer,lastAnswer)
        }     
    }
    return arrLastAnswer
}
