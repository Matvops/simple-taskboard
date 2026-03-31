
export class Utils {


    static numberToDate(number: number) {

        const date = new Date(number);
        return date.getDate() + '/' + String(date.getMonth()).padStart(2, '0') + '/' + date.getFullYear();
    }
}