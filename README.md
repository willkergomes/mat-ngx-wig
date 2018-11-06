# MatNgxWig - Angular Material simple WYSIWYG

Library based on **NgxWig** which is lightweight editor without heavy dependencies (**no Jquery**).
MatNgxWig works with `MatFormField` and can be used as a part of the form.

![MatNgxWig editor for Material](https://image.ibb.co/iKUa3J/Screen_Shot_2018_06_01_at_11_14_50_PM.png)

Support: Angular 5

## Icons

Material Design Icons are not in the pack!
We recommend to use [Material Design Icons](https://cdn.materialdesignicons.com/2.1.19/css/materialdesignicons.min.css)

## Example
```html
<mat-form-field>
  <mat-ngx-wig placeholder="Placeholder for editor" 
               [formControl]="editorControl"
               buttons="list1,list2,bold,italic,underline"
               [(ngModel)]="value"
  ></mat-ngx-wig>
</mat-form-field>
```
