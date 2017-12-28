#include <stdio.h>
#include <stdlib.h>

int main()
{
    /*while(1){

        printf("za sabiranje odaberite 1\n za oduzimanje odaberite 2\n za mnozenje odaberite 3\n za deljenje odaberite 4\n za izlazak odaberite -1\n");
        int broj;
        scanf("%d",&broj);
        if(broj>=1&&broj<=4){
                if(broj==-1){
                    break;
                }
                if(broj==1){
int suma,prviSabirak, drugiSabirak;
printf("unesite prvi sabirak \n");
scanf("%d",&prviSabirak);
printf("unesite drugi sabirak \n");
scanf("%d", &drugiSabirak);
suma=prviSabirak+drugiSabirak;
printf("suma je %d\n", suma);

                }
                if(broj==2){
                    int umanjilac, umanjenik, razlika;
                    printf("unesite umanjenik \n");
                    scanf("%d",&umanjenik);
                    printf("unesite umanjilac \n");
                    scanf("%d",&umanjilac);
                    razlika=umanjenik-umanjilac;
                    printf("razlika je %d\n", razlika);
                }
                if(broj==3){
                    int proizvod,prviCinilac, drugiCinilac;
                    printf("unesite prviCinilac \n");
                    scanf("%d",&prviCinilac);
                    printf("unesite drugiCinilac \n");
                    scanf("%d", &drugiCinilac);
                    proizvod=prviCinilac*drugiCinilac;
                    printf("proizvod  je %d\n", proizvod);
                }
               if(broj==4){
                    int kolicnik,deljenik, delilac;
                    printf("unesite deljenik \n");
                    scanf("%d",&deljenik);
                    printf("unesite delilac \n");
                    scanf("%d", &delilac);
                    kolicnik=deljenik/delilac;
                    printf("kolicnik  je %d\n", kolicnik);

                }




        }//if

                else{
                    printf("uneliste nedozvoljenu vrednost za opraciju");
                }

    }//while*/


    while(1){
            printf("za cele brojeve odaberite 0\n za decimalne odaberite 1\n za izalazak odaberite -1\n");
    int broj;
    scanf("%d", &broj);
    if(broj>=0&&broj<=7){
            if(broj==-1){
                break;
            }
            if(broj==7){
                printf("za sabiranje odaberite 2\n za oduzimanje odaberite 3\n ");
                int broj;
                scanf("%d",&broj);
                    if(broj>=2&&broj<=3){
                        if(broj==2){
                    int suma, prviSabirak, drugiSabirak;
                    printf("unesite prviSabirak \n");
                    scanf("%d",&prviSabirak);
                    printf("unesite drugiSabirak\n");
                    scanf("%d",&drugiSabirak);
                    suma=prviSabirak+drugiSabirak;
                    printf("suma je %d\n", suma);
                }
                        if(broj=3){
                    int razlika, umanjenik, umanjilac;
                    printf("unesite umanjenik \n");
                    scanf("%d",&umanjenik);
                    printf("unesite umanjilac\n");
                    scanf("%d",&umanjilac);
                    razlika=umanjenik-umanjilac;
                    printf("suma je %d\n", razlika);

                        }

                    }



            }//if(broj==0)

            if(broj==1){
                printf("za mnozenje unesite 4\n za deljenje unesite5\n");
                int broj;
                scanf("%d",&broj);
                if(broj>=4&&broj<=5){
                    if(broj==4){
                        int proizvod,prviCinilac, drugiCinilac;
printf("unesite prviCinilac \n");
scanf("%lf",&prviCinilac);
printf("unesite drugiCinilac \n");
scanf("%lf", &drugiCinilac);
proizvod=prviCinilac*drugiCinilac;
printf("proizvod  je %lf\n", proizvod);
                    }
                    if(broj==5){
                            int kolicnik,deljenik, delilac;
printf("unesite deljenik \n");
scanf("%lf",&deljenik);
printf("unesite delilac \n");
scanf("%lf", &delilac);
kolicnik=deljenik/delilac;
printf("kolicnik  je %lf\n", kolicnik);

                    }
                }
            }//if(broj==1)

    }//if
    else{
        printf("uneliste nedozvoljenu vrednost\n");
    }


    }//while


















    return 0;
}//int main
