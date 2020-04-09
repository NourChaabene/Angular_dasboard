import {Component, Input, OnInit} from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @Input('columns') table: string[];
  @Input('data') dataTable: string[];
  updated = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  async update(item, index) {
    this.updated = true;
    console.log(item);
    const {value: formValues} = await Swal.fire({
      title: 'Updating element of id ' + index,
      html: `<label class="text-capitalize float-left mt-2">${this.table[0]}</label><input id="swal-input1" class="swal2-input" placeholder="${this.dataTable[index][this.table[0]]}">
        <label class="text-capitalize float-left ">${this.table[1]}</label><input id="swal-input2" class="swal2-input" placeholder="${this.dataTable[index][this.table[1]]}">
        <label class="text-capitalize float-left ">${this.table[2]}</label><input id="swal-input3" class="swal2-input" placeholder="${this.dataTable[index][this.table[2]]}">`,
      focusConfirm: false,
      preConfirm: () => {
        return [(document.getElementById('swal-input1') as HTMLInputElement).value,
          (document.getElementById('swal-input2') as HTMLInputElement).value,
          (document.getElementById('swal-input3') as HTMLInputElement).value
        ];
      }
    });

    if (formValues) {
      this.dataTable[index][this.table[0]] = formValues[0];
      this.dataTable[index][this.table[1]] = formValues[1];
      this.dataTable[index][this.table[2]] = formValues[2];

      Swal.fire({
        title: 'success',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    }
  }

  remove(item) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        const index = this.dataTable.indexOf(item);
        this.dataTable.splice(index, 1);
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      }
    });

  }

}
