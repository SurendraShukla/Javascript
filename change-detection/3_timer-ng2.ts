
@Component()
class App {

    firstname: string = 'Pascal';
    lastname: string = 'Precht';

    changeName() {
        this.firstname = 'Brad';
        this.lastname = 'Green';
    }
}