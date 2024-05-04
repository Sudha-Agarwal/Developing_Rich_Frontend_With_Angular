export class User {
    private _firstName?: string;
    private _lastName?: string;
    private _email?: string;
    private _password?: string;
    private _address1?: string;
    private _address2?: string;
    private _city?: string;
    private _state?: string;
    private _zip?: string;
   
  
    get firstName(): string | undefined {
      return this._firstName;
    }
    set firstName(value: string | undefined) {
      this._firstName = value;
    }
  
    get lastName(): string | undefined {
      return this._lastName;
    }
    set lastName(value: string | undefined) {
      this._lastName = value;
    }
  
    get email(): string | undefined {
      return this._email;
    }
    set email(value: string | undefined) {
      this._email = value;
    }
  
    get password(): string | undefined {
      return this._password;
    }
    set password(value: string | undefined) {
      this._password = value;
    }
  
    get address1(): string | undefined {
      return this._address1;
    }
    set address1(value: string | undefined) {
      this._address1 = value;
    }
  
    get address2(): string | undefined {
      return this._address2;
    }
    set address2(value: string | undefined) {
      this._address2 = value;
    }
  
    get city(): string | undefined {
      return this._city;
    }
    set city(value: string | undefined) {
      this._city = value;
    }
  
    get state(): string | undefined {
      return this._state;
    }
    set state(value: string | undefined) {
      this._state = value;
    }
  
    get zip(): string | undefined {
      return this._zip;
    }
    set zip(value: string | undefined) {
      this._zip = value;
    }
  
    constructor();//constructor overloading
    constructor(
      firstName?: string,
      lastName?: string,
      email?: string,
      password?: string,
      address1?: string,
      address2?: string,
      city?: string,
      state?: string,
      zip?: string
    ) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.password = password;
      this.address1 = address1;
      this.address2 = address2;
      this.city = city;
      this.state = state;
      this.zip = zip;
    }
  }
  