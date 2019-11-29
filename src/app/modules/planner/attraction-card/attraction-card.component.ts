import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {Attraction} from '@models/Attraction';
import {TripService} from '@services/trip.service';
import {AddAttractionDetailsComponent} from '../add-attraction-details/add-attraction-details.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '@services/login.service';

@Component({
  selector: 'app-attraction-card',
  templateUrl: './attraction-card.component.html',
  styleUrls: ['./attraction-card.component.css']
})
export class AttractionCardComponent {
  @Input() stopIdOfAttraction: string;
  @Input() attractionData: Attraction;

  @ViewChild('headingDetails', {static: false}) headingDetails: ElementRef;

  constructor(public tripService: TripService, public loginService: LoginService,
              public dialog: MatDialog, private snackBar: MatSnackBar) {
  }

  openAttractionDialog(attractionData: Attraction): void {
    if (this.loginService.canModifyTrip) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.width = '400px';
      dialogConfig.height = '510px';

      dialogConfig.data = {
        attractionData,
        stopIdOfAttraction: this.stopIdOfAttraction
      };
      const dialogRef = this.dialog.open(
        AddAttractionDetailsComponent,
        dialogConfig
      );

      dialogRef.afterClosed().subscribe(responseFromDialog => {
        if (responseFromDialog === 'success') {
          this.openSnackBar('Attraction Added Successfully', 'OK');
        }
      });
    } else {
      this.openSnackBar('You are not authorized to modify this trip', 'OK');
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  onHeadingOver() {
    (this.headingDetails.nativeElement as HTMLDivElement).innerText = this.attractionData.name;
    if (!(this.headingDetails.nativeElement as HTMLDivElement).classList.contains('heading-details')) {
      (this.headingDetails.nativeElement as HTMLDivElement).classList.add('heading-details');
    }
  }

  onHeadingOut() {
    (this.headingDetails.nativeElement as HTMLDivElement).innerText = '';
    if ((this.headingDetails.nativeElement as HTMLDivElement).classList.contains('heading-details')) {
      (this.headingDetails.nativeElement as HTMLDivElement).classList.remove('heading-details');
    }
  }
}
