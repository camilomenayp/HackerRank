//https://www.hackerrank.com/challenges/sparse-arrays/

// Complete the matchingStrings function below.
func matchingStrings(strings2 []string, queries []string) []int32 {
    result:=make([]int32,len(queries))
    for i,x:=range queries {
        for _,y:=range strings2 {
            if x==y {
                result[i]=result[i]+1
                fmt.Println(x,y)
            }
        }
    }
    return result
}
