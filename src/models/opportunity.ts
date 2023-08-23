export class Opportunity {
    name: string;
    description: string;
    location: string;
    date: Date;
    time: string;
    organization: string;
    volunteers: string[];

    constructor(name: string, description: string, location: string, date: Date, time: string, organization: string, volunteers: string[]) {
        this.name = name;
        this.description = description;
        this.location = location;
        this.date = date;
        this.time = time;
        this.organization = organization;
        this.volunteers = volunteers;
    }
}