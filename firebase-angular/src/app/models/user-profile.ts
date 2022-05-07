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

    done?: string

    gsisId?: string
    philhealt?: string


    philhnameOfSchoolElemealt?: string
    basicEducElem?: string
    nameOfSchoolElem?: string
    fromElem?: string
    toElem?: string
    highestLevelElem?: string
    yearGraduatedElem?: string
    scholarElem?: string

    basicEducSecondary?: string
    nameOfSchoolSecondary?: string
    fromSecondary?: string
    toSecondary?: string
    highestLevelSecondary?: string
    yearGraduatedSecondary?: string
    scholarSecondary?: string

    basicEducCollege?: string
    nameOfSchoolCollege?: string
    fromCollege?: string
    toCollege?: string
    highestLevelCollege?: string
    yearGraduatedCollege?: string
    scholarCollege?: string

    basicEducVocational?: string
    nameOfSchoolVocational?: string
    fromVocational?: string
    toVocational?: string
    highestLevelVocational?: string
    yearGraduatedVocational?: string
    scholarVocational?: string

    basicEducStudies?: string
    nameOfSchoolStudies?: string
    fromStudies?: string
    toStudies?: string
    highestLevelStudies?: string
    yearGraduatedStudies?: string
    scholarStudies?: string

    careercivil?: string
    ratingCivil?: string
    dateofExamCivil?: string
    placeofExamCivil?: string
    numberCivil?: string
    dateofValidityCivil?: string
   

    fromWorkExp?: string
    tomWorkExp?: string
    positionTitleWorkExp?: string
    departmentWorkExp?: string
    monthlySalaryWorkExp?: string
    statusOfAppointmentWorkExp?: string
    governmentServiceWorkExp?: string

    toTraining?: string
    fromTraining?: string
    numberOfHrsTraining?: string
    typeOfLdTraining?: string
    conductedTraining?: string
   



    





    











    














    

    

    
    
    
}