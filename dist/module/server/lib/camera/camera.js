// import shell from "shelljs"
// const PATHS = {
// root: path.join(__dirname, "../../"),
// images: path.join(__dirname, "../../tmp/")
// }
export default class Camera {
    constructor() {
    }
    takePicture() {
        var d = new Date();
        let filename = d.getDate();
        return filename;
        // shell.exec(`raspistill -vf -hf -o ${filename}.png`)
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtZXJhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3NlcnZlci9saWIvY2FtZXJhL2NhbWVyYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSw4QkFBOEI7QUFFOUIsa0JBQWtCO0FBQ2hCLHdDQUF3QztBQUN4Qyw2Q0FBNkM7QUFDL0MsSUFBSTtBQUVKLE1BQU0sQ0FBQyxPQUFPLE9BQU8sTUFBTTtJQUN6QjtJQUNBLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQTtRQUNsQixJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7UUFFMUIsT0FBTyxRQUFRLENBQUE7UUFDZixzREFBc0Q7SUFDeEQsQ0FBQztDQUNGIn0=