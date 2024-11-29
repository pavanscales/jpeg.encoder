class BitStream{
    constructor(){
        this.buffer=[]

    }
    writeBits(bits){
        this.buffer.push(bits)
    }
    getBitStream(){
        return this.buffer.join()
    }
}