/**
 * Created by admin on 19/10/2016.
 */
export class User {

    private username: string;
    private password: string;
    private name: string;
    private surname: string;

    constructor(username: string, password: string, name: string, surname: string) {
        this.username = username;
        this.password = password;
        this.name = name;
        this.surname = surname;
    };

}
