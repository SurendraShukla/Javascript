// Note that since http.get method returns an Observable,
// Merely calling the getQuote method won’t actually fire a request.
// An Observable starts emitting data when a subscriber is attached to it.
// Technically, this type of Observable is called a cold Observable.

// There’s also hot Observables that can emit data regardless of whether or not there are any subscriptions.

export class App {
    qlist: String[] = [];

    constructor (public http: Http) {
    }

    getQuote () {
        return this.http.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1');
    }


    addQuote () {
        this.getQuote()
            .retry(2) // in case of error, try 1 more time
            .repeat(3) // do this 3 times
            .map(res => res.json()) // convert response to json
    .filter(res => res.length > 0) // drop empty array responses
    .map(res => res[0].content.replace(/\<.*?\>/g, ''))
    .subscribe(quote => {
            this.qlist.push(quote);
        }, e => console.log(e.message));
    }
}

// http://plnkr.co/edit/XiMzik?p=preview
// http://moduscreate.com/observables-and-promises/

