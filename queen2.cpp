#include <bits/stdc++.h>

using namespace std;

vector<string> split_string(string);

int Min(int x,int y){
    return x<y?x:y;
}

int Abs(int x){
    return x<0?-x:x;
}

// Complete the queensAttack function below.
int queensAttack(int n, int k, int r_q, int c_q, vector<vector<int>> obstacles) {

    vector<int> movements(8);
    movements[0]= n-r_q;
    movements[2]= n-c_q;
    movements[4]= r_q-1;
    movements[6]= c_q-1;
    //diag
    movements[1] = Min(n-r_q,n-c_q);
    movements[3] = Min(n-c_q,r_q-1);
    movements[5] = Min(c_q-1,r_q-1);
    movements[7] = Min(c_q-1,n-r_q);

    //check obst
    for (int i=0;i<k;i++) {
        int r_obs=obstacles[i][0];
        int c_obs=obstacles[i][1];
        int c_dif=c_obs-c_q;
        int r_dif=r_obs-r_q;
        int val=0;
        int mov=-1;
        if (c_dif==0) {
            if (r_obs>r_q) {
            mov=0;
            } else {
            mov =4;
            }   
            val = Abs(r_dif)-1  ;     
        } else if (r_dif==0) {
            if (c_obs>c_q) {
            mov=2;
            } else {
            mov=6;
            }
        val = Abs(c_dif)-1 ;      

        } else if (Abs(c_dif)==Abs(r_dif)){
            if (c_dif>0 && r_dif>0 ){
                val=c_dif-1;
                mov=1;
            } else if (c_dif>0 && r_dif<0 ){
                val =c_dif-1;
                mov=3;
            } else if (c_dif<0 && r_dif<0 ){
                val = -c_dif-1;
                mov=5;
            } else if (c_dif<0 && r_dif>0) {
                val = r_dif-1;
                mov=7;
            }    
        }  
        if(mov!=-1 && movements[mov]>val){
            movements[mov]=val;
        }

    }

    int total=0;
    for (int i=0;i<movements.size();i++) {
        total=total+movements[i];
    }
    return total;
}


