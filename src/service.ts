export class Service {
    public getQuote(): Promise<any> {
        return fetch('https://favqs.com/api/qotd', {
            method: 'GET',
            mode: 'no-cors'
        });
    }
}