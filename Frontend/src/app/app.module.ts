import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoomlistComponent } from './roomlist/roomlist.component';
import { BookingComponent } from './booking/booking.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { UnitAdminComponent } from './unit-admin/unit-admin.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { RentListComponent } from './rent-list/rent-list.component';
import { EditUnitComponent } from './edit-unit/edit-unit.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomlistComponent,
    BookingComponent,
    GalleryComponent,
    RegisterCustomerComponent,
    RegisterUserComponent,
    LoginUserComponent,
    UnitAdminComponent,
    CustomerListComponent,
    RentListComponent,
    EditUnitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
