//https://www.hackerrank.com/challenges/array-left-rotation/

func rotLeft(a []int32, d int32) {
    var i int32
    b:= make([]int32,len(a))
    var newIndex int32
    for i=0;i<int32(len(a));i++ {
        if i-d<0 {
            newIndex= (int32(len(a))+(i-d))%int32(len(a))
        } else {newIndex = i-d}           
            b[newIndex] = a[i]
        
    }

    for _,v:=range b{
        fmt.Printf("%d ",v)
    }
}


