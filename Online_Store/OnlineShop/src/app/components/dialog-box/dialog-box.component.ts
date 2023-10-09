import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {
  isNew: boolean = true;
  myForm: FormGroup = new FormGroup({
    id: new FormControl(this.data?.id ?? null),
    title: new FormControl(this.data?.title ?? ''),
    image: new FormControl(this.data?.image ?? 'assets/images/NoImage.jpg'),
    price: new FormControl(this.data?.price ?? ''),
    year: new FormControl(this.data?.year ?? ''),
    chip: new FormControl(this.data?.chip ?? ''),
    ssd: new FormControl(this.data?.ssd ?? ''),
    memory: new FormControl(this.data?.memory ?? ''),
    display: new FormControl(this.data?.display ?? '')
  });
  constructor(public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      if (this.data) {
        this.isNew = false;
      }
    }

  onNoClick(): void {
    this.dialogRef.close(null);
  }

  onSubmit(): void {
    if (this.myForm.valid) {
      if (this.myForm.value.title.trim() === '' || this.myForm.value.price.trim() === '' || this.myForm.value.year.trim() === '') {
        alert('Пожалуйста, заполните все обязательные поля \'✳\'');
        return;
      }
    this.data = {
      id: this.myForm.value.id,
      title: this.myForm.value.title,
      price: this.myForm.value.price,
      year: this.myForm.value.year,
      image: this.myForm.value.image,
      configure: {
        chip: this.myForm.value.chip,
        ssd: this.myForm.value.ssd,
        memory: this.myForm.value.memory,
        display: this.myForm.value.display
      }
    };
    this.dialogRef.close(this.data);
  }
}
  ngOnInit(): void {
    
  }

}
