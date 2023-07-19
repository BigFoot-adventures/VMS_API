import { Entity, Fields } from "remult";

@Entity<volunteer>("volunteer", {
    allowApiCrud: true,
    allowApiRead: true
})
export class volunteer {
    @Fields.uuid()
    id!: string;

    @Fields.string()
    first: string;

    @Fields.string()
    last: string;

    @Fields.string()
    userName: string;

    @Fields.string()
    password: string;

    @Fields.json()
    preferredLocations: string[] = [];

    @Fields.json()
    skills_interests: string[] = [];

    @Fields.json()
    availability: string[] = [];

    @Fields.string()
    email: string;

    @Fields.string()
    phone: string;

    @Fields.string()
    address: string;

    @Fields.json()
    Education: string[] = [];

    @Fields.json()
    currentLicense: string[] = [];

    @Fields.string()
    emergencyContact: string;

    @Fields.string()
    emergencyPhone: string;

    @Fields.string()
    emergencyEmail: string;

    @Fields.string()
    emergencyAddress: string;

    @Fields.boolean()
    licenseOnFile: boolean;

    @Fields.boolean()
    SSCardOnFile: boolean;

    @Fields.boolean()
    approved: boolean;

    constructor(
        first: string, last: string, userName: string,
        password: string, email: string, phone: string,
        address: string, emergencyContact: string,
        emergencyPhone: string, emergencyEmail: string,
        emergencyAddress: string, licenseOnFile: boolean,
        SSCardOnFile: boolean, approved: boolean
        ) {
        this.first = first;
        this.last = last;
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.emergencyContact = emergencyContact;
        this.emergencyPhone = emergencyPhone;
        this.emergencyEmail = emergencyEmail;
        this.emergencyAddress = emergencyAddress;
        this.licenseOnFile = licenseOnFile;
        this.SSCardOnFile = SSCardOnFile;
        this.approved = approved;
    }

}