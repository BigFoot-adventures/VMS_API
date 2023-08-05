export class user {

    role: 'volunteer' | 'admin';
    first: string;
    last: string;
    userName: string;
    password: string;
    preferedLocations: string[] = [];
    skills_Interests: string[] = [];
    availability: string[] = [];
    address: string;
    phone: string;
    email: string;
    education: string;
    currentLicenses: string[] = [];
    emergencyContact: string;
    emergencyPhone: string;
    emergencyEmail: string;
    emergencyAddress: string;
    driversLicense: boolean;
    SSCard: boolean;
    approved: boolean;

    constructor(role: 'volunteer' | 'admin', first: string, last: string, userName: string, password: string, preferedLocations: string[], skills_Interests: string[], availability: string[], address: string, phone: string, email: string, education: string, currentLicenses: string[], emergencyContact: string, emergencyPhone: string, emergencyEmail: string, emergencyAddress: string, driversLicense: boolean, SSCard: boolean, approved: boolean) {
        this. role = role;
        this.first = first;
        this.last = last;
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.preferedLocations = preferedLocations;
        this.skills_Interests = skills_Interests;
        this.availability = availability;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.education = education;
        this.currentLicenses = currentLicenses;
        this.emergencyContact = emergencyContact;
        this.emergencyPhone = emergencyPhone;
        this.emergencyEmail = emergencyEmail;
        this.emergencyAddress = emergencyAddress;
        this.driversLicense = driversLicense;
        this.SSCard = SSCard;
        this.approved = approved;
    }

    passwordlessUser() {
        let result = {
            role: this.role,
            first: this.first,
            last: this.last,
            userName: this.userName,
            preferedLocations: this.preferedLocations,
            skills_Interests: this.skills_Interests,
            availability: this.availability,
            address: this.address,
            phone: this.phone,
            email: this.email,
            education: this.education,
            currentLicenses: this.currentLicenses,
            emergencyContact: this.emergencyContact,
            emergencyPhone: this.emergencyPhone,
            emergencyEmail: this.emergencyEmail,
            emergencyAddress: this.emergencyAddress,
            driversLicense: this.driversLicense,
            SSCard: this.SSCard,
            approved: this.approved
        }
        return result;
    }
}