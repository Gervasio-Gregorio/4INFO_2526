export class Calcolatrice {
    set_result(self,val){
        self.result = val
    }

    sum(self,val){
        self.result += val
    }

    sub(self,val){
        self.result -= val
    }

    mul(self,val){
        self.result *= val
    }

    div(self,val){
        self.result /= val
    }

    get_result(self){
        return self.result
    }
}
