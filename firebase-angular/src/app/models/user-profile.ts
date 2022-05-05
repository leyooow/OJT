import { Timestamp } from "@angular/fire/firestore"

export interface ProfileUser {
    uid: string
    email?: string
    displayName?: string
    photoURL?: string
    firstName?: string
    lastName?: string
    employeeId?: string
    phoneNumber?:string
    nameExtension?: string
    dateOfBirth?: string

    
    middleName?: string
    age?: string
    placeOfBirth?: string
    gender?: string
    civilStatus?: string
    height?: string
    weight?: string
    bloodType?: string

    gsis?: string
    pagibig?: string
    philhealth?: string
    sss?: string
    tin?: string

    citezenship?: string

    houseBlockResident?: string
    streetResident?: string
    subdivisionResident?: string
    barangayResident?: string
    municipalityResident?: string
    provinceResident?: string
    zipCodeResident?: string

    houseBlockPermanent?: string
    streetPermanent?: string
    subdivisionPermanent?: string
    barangayPermanent?: string
    municipalityPermanent?: string
    provincePermanent?: string
    zipCodePermanent?: string

    telephoneNo?: string
    mobileNo?: string
    alternateEmail?: string


    photoCertURL?: string

    

    

    
    
    
}