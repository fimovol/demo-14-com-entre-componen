# Demo14ComunicacionEntreComponentes

@Import se importa de @angular/core para recibir datos de otro componente
```js
import { Input } from '@angular/core';
```
inicializa como si fuera una variable
```js
@Input() nombreDeVariable :string = "datos"
```
la expresion ":string" es opcional para decirle de que tipo es

dentro del html del componente puedes usar esta variable que creaste
```js
<h1>{{nombreDeVariable}} </h1>
```
ahora en el componente padre donde quieres mostralo escribe el nombre del templateUrl

componente-padre.component.ts:
```js
<app-nombre-del-componente-hijo></app-nombre-del-componente-hijo>
```
ahora le puedes pasar un parametro de la sigiente manera
```js
<app-nombre-del-componente-hijo [nombreDeVariable]="datos"></app-nombre-del-componente-hijo>
```
recuerda que datos debe de ser una variable de tipo string que debe estar en el componente padre
 
