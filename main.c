#include <stdio.h>
#include <stdlib.h>

int main()
{
/*
     int suma=0, i=1;
     while(suma<500){
         if(suma+i>500){
                printf("Br koji bi presao 500 u sumi je %d",i);
            break;
         }
         suma=suma+i;
        i++;
     }
     printf( "trenutna suma je %d",suma);

*/

/*int prviSabirak, drugiSabirak;
printf("Unetsite prvi sabirak \n");
scanf("%d",&prviSabirak);
printf("Unesite drugi sabirak \n");
scanf("%d", &drugiSabirak);
int suma;
suma=prviSabirak+drugiSabirak;
printf("suma je %d", suma);*/


/*
while(1){
    printf("Za sabiranje unesite 0 \nza oduzimanje unesite 1 \nza mnozenje unesite 2 \nza deljenje unesite 3 \nza izlazak iz programa unesite -1\n");
int pom;
scanf("%d",&pom);
if(pom==-1){
    break;
}
if(pom>=0 && pom<=3){
  if(pom==0){
int suma,prviSabirak, drugiSabirak;
printf("unesite prvi sabirak \n");
scanf("%d",&prviSabirak);
printf("unesite drugi sabirak \n");
scanf("%d", &drugiSabirak);
suma=prviSabirak+drugiSabirak;
printf("suma je %d\n", suma);


  }
  if(pom==1){
      int razlika,umanjenik, umanjilac;
printf("unesite umanjenik \n");
scanf("%d",&umanjenik);
printf("unesite umanjilac \n");
scanf("%d", &umanjilac);
razlika=umanjenik-umanjilac;
printf("razlika  je %d\n", razlika);


  }
  if(pom==2){
     int proizvod,prviCinilac, drugiCinilac;
printf("unesite prviCinilac \n");
scanf("%d",&prviCinilac);
printf("unesite drugiCinilac \n");
scanf("%d", &drugiCinilac);
proizvod=prviCinilac*drugiCinilac;
printf("proizvod  je %d\n", proizvod);
  }
  if(pom==3){
    int kolicnik,deljenik, delilac;
printf("unesite deljenik \n");
scanf("%d",&deljenik);
printf("unesite delilac \n");
scanf("%d", &delilac);
kolicnik=deljenik/delilac;
printf("kolicnik  je %d\n", kolicnik);
  }

}

else {
    //nije tacno
    printf("uneliste nedozvoljenu vrenost za ooperaciju");
}

}
*/

int broj;
scanf("%d", &broj);
switch(broj==1) {
case 1:  {
    int kolicnik,deljenik, delilac;
printf("unesite deljenik \n");
scanf("%d",&deljenik);
printf("unesite delilac \n");
scanf("%d", &delilac);
kolicnik=deljenik/delilac;
printf("kolicnik  je %d\n", kolicnik);
  }

    printf("Vrednost je 1");
    break;
case 2:
    printf("Vrednost je 2");
    break;
default:
    printf("Nije ni 1 ni 2");
    break;
}





    return 0;
}
