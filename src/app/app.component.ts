import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'nt-revise';

  constructor() {}

  test1(cb: any) {
    setTimeout(() => {
      console.log('test1');
      cb(true);
    }, 3000);
  }

  test2(cb: any) {
    setTimeout(() => {
      console.log('test2');
      cb(false);
    }, 1000);
  }

  test3(cb: any) {
    setTimeout(() => {
      console.log('test3');
      cb();
    }, 4000);
  }

  test4(cb: any) {
    setTimeout(() => {
      console.log('test4');
      cb();
    }, 4000);
  }

  test5(cb: any) {
    setTimeout(() => {
      console.log('test5');
      cb();
    }, 4000);
  }

  testButtonHandler() {
    this.test1((status: boolean) => {
      if (status === false) {
        return;
      }
      console.log('test1 is executed successfuly');
      this.test2((status2: boolean) => {
        if (status2 === false) {
          return;
        }
        console.log('test2 is executed successfuly');
        this.test3(() => {
          console.log('test3 is executed successfuly');
          console.log('done');
          this.test4(() => {
            console.log('test4 is executed successfuly');
            console.log('done');
            this.test5(() => {
              console.log('test5 is executed successfuly');
              console.log('done');
            });
          });
        });
      });
    });
  }

  
}
