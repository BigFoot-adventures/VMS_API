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
    approved: 'pending' | 'approved' | 'denied' = 'pending';

    constructor(
        role: 'volunteer' | 'admin',
        first: string, last: string,
        userName: string,
        password: string,
        preferedLocations: string[],
        skills_Interests: string[],
        availability: string[],
        address: string,
        phone: string,
        email: string,
        education: string,
        currentLicenses: string[],
        emergencyContact: string,
        emergencyPhone: string,
        emergencyEmail: string,
        emergencyAddress: string,
        driversLicense: boolean,
        SSCard: boolean,
        approved: 'pending' | 'approved' | 'denied' = 'pending'
    ) {
        this.role = role;
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

    isValid() {
        let valid = true;
        if(this.role != 'volunteer' && this.role != 'admin')
            valid = false;
        else if(typeof this.first != 'string' || this.first.length == 0)
            valid = false;
        else if(typeof this.last != 'string' || this.last.length == 0)
            valid = false;
        else if(typeof this.userName != 'string' || this.userName.length == 0)
            valid = false;
        else if(typeof this.password != 'string' || this.password.length == 0)
            valid = false;
        else if(typeof this.preferedLocations != 'object' || this.preferedLocations.length == 0)
            valid = false;
        else if(typeof this.skills_Interests != 'object' || this.skills_Interests.length == 0)
            valid = false;
        else if(typeof this.availability != 'object' || this.availability.length == 0)
            valid = false;
        else if(typeof this.address != 'string' || this.address.length == 0)
            valid = false;
        else if(typeof this.phone != 'string' || this.phone.length == 0)
            valid = false;
        else if(typeof this.email != 'string' || this.email.length == 0)
            valid = false;
        else if(typeof this.education != 'string' || this.education.length == 0)
            valid = false;
        else if(typeof this.currentLicenses != 'object' || this.currentLicenses.length == 0)
            valid = false;
        else if(typeof this.emergencyContact != 'string' || this.emergencyContact.length == 0)
            valid = false;
        else if(typeof this.emergencyPhone != 'string' || this.emergencyPhone.length == 0)
            valid = false;
        else if(typeof this.emergencyEmail != 'string' || this.emergencyEmail.length == 0)
            valid = false;
        else if(typeof this.emergencyAddress != 'string' || this.emergencyAddress.length == 0)
            valid = false;
        else if(typeof this.driversLicense != 'boolean')
            valid = false;
        else if(typeof this.SSCard != 'boolean')
            valid = false;
        else if(typeof this.approved != 'string')
            valid = false;
        return valid;
    }
}