
export class Utils {


    static numberToDate(number: number) {

        const date = new Date(number);
        return String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth()).padStart(2, '0') + '/' + date.getFullYear();
    }
}