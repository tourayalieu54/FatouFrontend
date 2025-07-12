import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class EmployeeService{

    private url = 'https://fatoujeng.onrender.com/api/employees'

    constructor(private http: HttpClient){}

    findEmployeeById(id: number): Observable<any>{
        return this.http.get<any>(`${this.url}/${id}`);
    }

    findEmployeeByEmail(emailAddress: string): Observable<any>{
        return this.http.get<any>(`${this.url}/email/${emailAddress}`)
    }

    findAllEmployees(): Observable<any[]>{
        return this.http.get<any[]>(this.url);
    }

    addEmployee(payload: any): Observable<any>{
        return this.http.post<any>(this.url, payload);
    }

    updateEmployee(id: number, payload: any): Observable<any>{
        return this.http.put<any>(`${this.url}/${id}`, payload);
    }

    deleteEmployee(id: number): Observable<any>{
        return this.http.delete<any>(`${this.url}/${id}`)
    }
    
}