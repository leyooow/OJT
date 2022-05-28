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

    // gsisId?: string
    // philhealt?: string


    // philhnameOfSchoolElem?: string
    basicEducElem?: string
    nameOfSchoolElem?: string
    fromElem?: string
    toElem?: string
    highestLevelElem?: string
    yearGraduatedElem?: string
    scholarElem?: string

    // basicEducSecondary?: string
    // nameOfSchoolSecondary?: string
    // fromSecondary?: string
    // toSecondary?: string
    // highestLevelSecondary?: string
    // yearGraduatedSecondary?: string
    // scholarSecondary?: string

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
    salaryJobPayWorkExp?:string

    TitleOfLearningTraining?:string
    toTraining?: string
    fromTraining?: string
    numberOfHrsTraining?: string
    typeOfLdTraining?: string
    conductedTraining?: string
   
    // Seph
    // addressElem?:string
    // addressJunior?:string
    // addressSenior?:string
    // addressCollege?:string
    // addressVocational?:string
    // addressStudies?:string

    nameOfSchoolJunior?: string
    basicEducJunior?: string
    fromJunior?: string
    toJunior?: string
    highestLevelJunior?: string
    yearGraduatedJunior?: string
    scholarJunior?: string

    nameOfSchoolSenior?: string
    basicEducSenior?: string
    fromSenior?: string
    toSenior?: string
    highestLevelSenior?: string
    yearGraduatedSenior?: string
    scholarSenior?: string

    toTraining2?: string
    fromTraining2?: string
    numberOfHrsTraining2?: string
    typeOfLdTraining2?: string
    conductedTraining2?: string
    TitleOfLearningTraining2?: string
    photoCertURL3?: string

    toTraining3?: string
    fromTraining3?: string
    numberOfHrsTraining3?: string
    typeOfLdTraining3?: string
    conductedTraining3?: string
    TitleOfLearningTraining3?: string
    photoCertURL4?: string
    





    





    











    














    

    

    
    
    
}