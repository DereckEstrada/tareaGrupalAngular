import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefono'
})
export class TelefonoPipe implements PipeTransform {

  transform(value: string |undefined, ): string {
    let resp:string='';
    if(value==undefined){
      resp="No tiene"
    }else{
      resp=value
    }
    return resp;
  }

}
