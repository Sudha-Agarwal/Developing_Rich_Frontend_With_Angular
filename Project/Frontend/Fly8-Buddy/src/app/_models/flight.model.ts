export class Flight {
    private _source?: string;
    private _destination?: string;
    private _dateOfTravel?: Date;
    private _numberOfAdults?: number;
    private _numberOfChildren?: number;
    private _travelClass?: string;
    private _price?: number;
    
    get source(): string {
      return this._source;
    }
    set source(value: string) {
      this._source = value;
    }
  
    get destination(): string {
      return this._destination;
    }
    set destination(value: string) {
      this._destination = value;
    }
  
    get dateOfTravel(): Date {
      return this._dateOfTravel;
    }
    set dateOfTravel(value: Date) {
      this._dateOfTravel = value;
    }
  
    get numberOfAdults(): number {
      return this._numberOfAdults;
    }
    set numberOfAdults(value: number) {
      this._numberOfAdults = value;
    }
  
    get numberOfChildren(): number {
      return this._numberOfChildren;
    }
    set numberOfChildren(value: number) {
      this._numberOfChildren = value;
    }
  
    get travelClass(): string {
      return this._travelClass;
    }
    set travelClass(value: string) {
      this._travelClass = value;
    }
  
    get price(): number {
      return this._price;
    }
    set price(value: number) {
      this._price = value;
    }

    constructor();
    constructor(
      source?: string,
      destination?: string,
      dateOfTravel?: Date,
      numberOfAdults: number=0,
      numberOfChildren: number =0,
      travelClass?: string,
      price?: number
    ) {
      this._source = source;
      this._destination = destination;
      this._dateOfTravel = dateOfTravel;
      this._numberOfAdults = numberOfAdults;
      this._numberOfChildren = numberOfChildren;
      this._travelClass = travelClass;
      this._price = price;
    }
  }
  