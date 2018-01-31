import { Component } from '@angular/core';


export class MyDataElements {
  id: number;
  name: string;
}
export class Employee {
empId: number;
empName: string;
empSalary: number;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  empObj: Employee = {empId: 1, empName: 'Ambrish', empSalary: 2000};
  dataElements: MyDataElements[] = [{id: 1, name: 'Apple'},
  {id: 2, name: 'Grapes'},
  {id: 3, name: 'Mango'},
  {id: 4, name: 'Papaya'},
  {id: 5, name: 'Orange'},
  {id: 6, name: 'Lichi'}];


}
