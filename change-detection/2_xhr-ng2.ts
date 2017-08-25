@Component()
class ContactsApp {

    contacts:Contact[] = [];

    constructor(private http:Http) { }

    ngOnInit() {
        this.http.get('/contacts')
            .map(res => res.json())
            .subscribe((contacts) => {
                this.contacts = contacts;
            });
    }
}
