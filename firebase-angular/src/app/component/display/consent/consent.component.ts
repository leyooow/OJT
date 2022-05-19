import { Component, OnInit } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
import { ref, onValue, Database } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consent',
  templateUrl: './consent.component.html',
  styleUrls: ['./consent.component.css']
})
export class ConsentComponent implements OnInit {

  constructor(private router: Router,
    public database: Database,) { }

  ngOnInit(): void {

    this.setRealtimeDbData()
  }

  setRealtimeDbData() {
    const userId = getAuth().currentUser?.uid.toString();
    // const { employeeId, email, uid } = this.ProfileForm.value;
    // const ref1 = ref(this.database, 'users/' + uid)

    // const ref2 = ref(this.database, 'users/' + userId + '/email')

    // // set(ref1, {
    // //   uid: uid,  
    // //   employeeId: employeeId,
    // //   email: email,
    // //   done: '1',
    // // })

    const starCountRef = ref(this.database, 'users/' + userId + '/done');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();


      if (data == '1') {

        this.router.navigate(['/personal-info-display'])
      }
    })





  }

}
