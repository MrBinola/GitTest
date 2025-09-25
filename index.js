let a = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

console.log(a)


class Wet{
    #Ret1 = 2014
    #Ret2 = 2016

    get cheat(){
        return this.#Ret1
    }

    set cheat(new_Ret1){
        this.#Ret1 = new_Ret1
    }

    get cheat2(){
        return this.#Ret2
    }

    set cheat2(new_Ret2){
        this.#Ret2 = new_Ret2
    }
}

let Fation = new Wet()
Fation.cheat = 2024
console.log(Fation.cheat)
Fation.cheat2 = 2026
console.log(Fation.cheat2)