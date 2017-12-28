#include <stdio.h>
#include <stdlib.h>

int main()
{
   int broj;
    printf("za sabiranje unesite 1\n za oduzimanje unesite 2\n za mnozenke unesit 3\n za deljenje unesite 4\n");
scanf("%d",&broj);
switch(broj){
 case 1:  { int suma, prviSabirak, drugiSabirak;
printf("Unetsite prvi sabirak \n");
scanf("%d",&prviSabirak);
printf("Unesite drugi sabirak \n");
scanf("%d", &drugiSabirak);
suma=prviSabirak+drugiSabirak;
printf("suma je %d", suma);
break;
}
}//switch
switch(broj==2){
    case 1: {
      int razlika,umanjenik, umanjilac;
printf("unesite umanjenik \n");
scanf("%d",&umanjenik);
printf("unesite umanjilac \n");
scanf("%d", &umanjilac);
razlika=umanjenik-umanjilac;
printf("razlika  je %d\n", razlika);
    }
    break;
}
switch(broj==3){
      case 1:   {int proizvod,prviCinilac, drugiCinilac;
printf("unesite prviCinilac \n");
scanf("%d",&prviCinilac);
printf("unesite drugiCinilac \n");
scanf("%d", &drugiCinilac);
proizvod=prviCinilac*drugiCinilac;
printf("proizvod  je %d\n", proizvod);}

break;
}
switch(broj==4){
case 1:{int kolicnik,deljenik, delilac;
printf("unesite deljenik \n");
scanf("%d",&deljenik);
printf("unesite delilac \n");
scanf("%d", &delilac);
kolicnik=deljenik/delilac;
printf("kolicnik  je %d\n", kolicnik);
}
break;

default:
        printf("nedozvoljena vrednost \n");
        break;}

    return 0;
}
