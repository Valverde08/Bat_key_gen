export default function generatePass(): string{
    let password:string = ''
    let characters:string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let passwordLenght:number = 8

    for (let index = 0; index < passwordLenght; index++) {
        password+= characters.charAt(
            Math.floor(Math.random() * characters.length)
        )
        
    }

    return password
}