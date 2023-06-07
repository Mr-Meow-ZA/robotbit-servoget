// Servo Channel.
enum Servos {
    S1 = 0x01,
    S2 = 0x02,
    S3 = 0x03,
    S4 = 0x04,
    S5 = 0x05,
    S6 = 0x06,
    S7 = 0x07,
    S8 = 0x08
};


namespace robotbitArm
{
    //% block="get current position for servo %servo"
    export function i2creadCustom(servo: Servos, reg:number):number {
        pins.i2cWriteNumber(servo, reg, NumberFormat.UInt8BE);
        let val = pins.i2cReadNumber(servo, NumberFormat.UInt8BE);
        return val;
    }

    function i2cwrite(addr: number, reg: number, value: number) {
        let buf = pins.createBuffer(2)
        buf[0] = reg
        buf[1] = value
        pins.i2cWriteBuffer(addr, buf)
    }

}