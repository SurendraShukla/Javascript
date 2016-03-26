function recursive_cal(no) {    
    if(no>0) {        
        return recursive_cal(no-3)+recursive_cal(no-1);
    }else{
        return 1;
    }
}

// 9
recursive_cal(5);