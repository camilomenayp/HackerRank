
func downToZero(n int32,arr []int32) int32 {
   return arr[n]
}

var arr []int32

func calculate(arr []int32){
    arr[0]=0
    arr[1]=1
    arr[2]=2
    arr[3]=3
    max:=int(1000000)
    for i:=2;i<max;i++ {
        if arr[i]==0||arr[i]>arr[i-1]+1{
            arr[i] = arr[i-1]+1
        }
        for j:=2;j<=i&&j*i<max;j++ {
            if arr[i]+1<arr[i*j] || arr[i*j]==0 {
                arr[i*j] = arr[i]+1
            }
        }
    }

}
