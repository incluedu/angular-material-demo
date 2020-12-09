import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {L03TypographyComponent} from './c2-ui-components/l03-typography/l03-typography.component';
import {L04ButtonsComponent} from './c2-ui-components/l04-buttons/l04-buttons.component';
import {L05ButtonToggleComponent} from './c2-ui-components/l05-button-toggle/l05-button-toggle.component';
import {L06MaterialIconsComponent} from './c2-ui-components/l06-material-icons/l06-material-icons.component';
import {L07MaterialBadgesComponent} from './c2-ui-components/l07-material-badges/l07-material-badges.component';
import {L08ProgressSpinnerComponent} from './c2-ui-components/l08-progress-spinner/l08-progress-spinner.component';
import {L09ProgressBarComponent} from './c2-ui-components/l09-progress-bar/l09-progress-bar.component';
import {L10NavbarComponent} from './c2-ui-components/l10-navbar/l10-navbar.component';
import {L11SidebarComponent} from './c2-ui-components/l11-sidebar/l11-sidebar.component';
import {L12MenuComponent} from './c2-ui-components/l12-menu/l12-menu.component';
import {L13ListComponent} from './c2-ui-components/l13-list/l13-list.component';
import {L14GridsComponent} from './c2-ui-components/l14-grids/l14-grids.component';
import {L15ExpansionPanelComponent} from './c2-ui-components/l15-expansion-panel/l15-expansion-panel.component';
import {L16CardsComponent} from './c2-ui-components/l16-cards/l16-cards.component';
import {L17StepperHorizontalComponent} from './c2-ui-components/l17-stepper-horizontal/l17-stepper-horizontal.component';
import {L18StepperVerticalComponent} from './c2-ui-components/l18-stepper-vertical/l18-stepper-vertical.component';
import {L19InputComponent} from './c3-forms/l19-input/l19-input.component';
import {L20SelectComponent} from './c3-forms/l20-select/l20-select.component';
import {L21AutocompleteComponent} from './c3-forms/l21-autocomplete/l21-autocomplete.component';
import {L22CheckboxRadioButtonComponent} from './c3-forms/l22-checkbox-radio-button/l22-checkbox-radio-button.component';
import {L23DatePickerComponent} from './c3-forms/l23-date-picker/l23-date-picker.component';
import {L24TooltipComponent} from './something/l24-tooltip/l24-tooltip.component';
import {L25SnackbarComponent} from './something/l25-snackbar/l25-snackbar.component';
import {L25CustomSnackbarComponent} from './something/l25-snackbar/l25-custom-snackbar/l25-custom-snackbar.component';
import {L26DialogsComponent} from './something/l26-dialogs/l26-dialogs.component';
import {L26DialogExampleComponent} from './something/l26-dialogs/l26-diloag-example/l26-dialog-example.component';
import {L27DataTableComponent} from './something/l27-data-table/l27-data-table.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { L28VirtualScrollingComponent } from './something/l28-virtual-scrolling/l28-virtual-scrolling.component';

@NgModule({
  declarations: [
    AppComponent,
    L03TypographyComponent,
    L04ButtonsComponent,
    L05ButtonToggleComponent,
    L06MaterialIconsComponent,
    L07MaterialBadgesComponent,
    L08ProgressSpinnerComponent,
    L09ProgressBarComponent,
    L10NavbarComponent,
    L11SidebarComponent,
    L12MenuComponent,
    L13ListComponent,
    L14GridsComponent,
    L15ExpansionPanelComponent,
    L16CardsComponent,
    L17StepperHorizontalComponent,
    L18StepperVerticalComponent,
    L19InputComponent,
    L20SelectComponent,
    L21AutocompleteComponent,
    L22CheckboxRadioButtonComponent,
    L23DatePickerComponent,
    L24TooltipComponent,
    L25SnackbarComponent,
    L25CustomSnackbarComponent,
    L26DialogsComponent,
    L26DialogExampleComponent,
    L27DataTableComponent,
    L28VirtualScrollingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
