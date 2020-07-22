import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { CscFile } from './../../api/storage/cscFile';

@Component({
  selector: 'csc-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.scss'],
})
export class FileManagerComponent implements OnInit {
  files: Observable<CscFile[]>;
  constructor(public db: AngularFireDatabase) {
    this.files = db.list<CscFile>('files').valueChanges();
  }

  ngOnInit(): void {}
}
