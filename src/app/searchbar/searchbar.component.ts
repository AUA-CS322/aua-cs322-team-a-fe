import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { UserSearchResult } from '../shared/models/userSearchResult.model';
import {SearchServiceService} from '../search-service.service'
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
 public searchInput = new Subject<string>();
  public searchResults : UserSearchResult[] = new Array();
  public isLoading = false;
  public isMinError = false;
  public noResults = false;

  constructor(private searchService:SearchServiceService) { 
    this.searchInput
    .pipe(
      debounceTime(500),
      distinctUntilChanged())
    .subscribe({next:(s)=>{
      console.log(s);
     
      this.search(s);
    }});
    
    // this.searchInput.pipe(
    //   map((e: any)=>{(String)(e.target.value)}),
    //   debounceTime(500),
    //   distinctUntilChanged(),
    //   filter(t=>((String)(t)).length>0)
    // )
    // .subscribe({next:(s)=>
    // {
    //   console.log(s);
    // }});
  }

  ngOnInit(): void {
 
  }


  private getDummyResults(term:string){
    var dummyResults:UserSearchResult[] = new Array();
    var item1 = new UserSearchResult();
    item1.department = 'it';
    item1.location = 'AZZZB';
    item1.firstName = 'AAAAAA';
    item1.lastName = 'ZZZZZ';

    var item2 = new UserSearchResult();
    item2.department = 'it';
    item2.location = 'BBBBAAA';
    item2.firstName = 'BBBBBB';
    item2.lastName = 'YYYYYY';

    var item3 = new UserSearchResult();
    item3.department = 'it';
    item3.location = 'CCCBBAAA';
    item3.firstName = 'CCCCCC';
    item3.lastName = 'XXXXXX';

    dummyResults.push(item1);
    dummyResults.push(item2);
    dummyResults.push(item3);

    return dummyResults.filter(x=>x.firstName.includes(term) || x.lastName.includes(term));
  }
  
  private search(term:string){
    if(term.length>=3)
    {    
      this.isMinError = false;
      this.isLoading = true;
      
      this.searchService.searchUser(term).subscribe(
        (data: UserSearchResult[]) => {
          this.searchResults = data;
          this.isLoading = false;
          this.noResults = this.searchResults.length==0;
        },
        (error) => {
          this.isLoading = false;
          this.noResults = true;
        });
      
    }
    if(term.length<3)
    {
      if(this.searchResults.length==0)
      {
        this.noResults = false;
        this.isMinError = true;
        this.isLoading = false;
       }
    }
    if(term.length==0)
    {
      this.noResults = false;
      this.isMinError = false;
      this.searchResults = [];
    }
  
  }

}
