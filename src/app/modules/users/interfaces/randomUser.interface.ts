export interface RandomUser {
    gender: string;
    name: Name;
    location: Location;
    email: string;
    login: Login;
    dob: UserDate;
    registered: UserDate;
    phone: string;
    cell: string;
    id: UserId;
    picture: UserPic;
    nat: string;
}

export interface Name {
    title: string;
    first: string;
    last: string;
}

export interface Location {
    street: Street;
    city: string;
    state: string;
    postcode: string;
    coordinates: Coordinates;
    timezone: Timezone;
}

export interface Street {
    name: string;
    number: number;
}

export interface Coordinates {
    latitude: string;
    longitude: string;
}

export interface Timezone {
    offset: string;
    description: string;
}

export interface Login {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
}

export interface UserDate {
    date: Date;
    age: string;
}

export interface UserId {
    name: string;
    value: string;
}

export interface UserPic {
    large: string;
    medium: string;
    thumbnail: string;
}
