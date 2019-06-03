const data = {
    locations:[],
    get location(){
        return this._location;
    },
    set location(value){
        this._location = value.trim();
        this.locations.push(this._location);
    }
}

data.location = 'Michigan';
data.location = 'SomeWhere';
console.log(data);