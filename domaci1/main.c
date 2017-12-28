#include <stdio.h>
#include <stdlib.h>

int main()
{
    //suma prvih 150br
    /*int suma=0, i;
    for(i=0; i<150;i++){
        suma=suma+i;
    }
    printf("suma je %d",suma);*/


    //Suma prvih 150br deljivih sa 7
    /*int suma=0, i;
    for(i=0; i<150; i++){
        if(i%7==0){
            suma=suma+i;
        } printf("\n suma je %d", suma);
    }
    printf("suma %d je deljiva sa 7",suma);*/





    //koliko u prvih 100 ima deljivih sa 3
        int i;
        for(i=0; i<100; i=i+1){
            if(i%3==0){
                    printf("broj\n %d je deljiv sa 3", i);

            }
        }

        //suma neparnih do 1000 koji su deljivi sa 5
        /*int suma=0, i;
    for(i=1; i<1000; i=i+1){
        if(i%5==0){
            suma=suma+i;
        }
        printf("\n suma je %d", suma);
    }
    printf("suma %d je deljiva sa 5",suma);*/










//suma parnih br do 1000
   /*int suma=0,i;
    for(i=0; i<1000; i=i+2){
            suma=suma+i;
        }

printf("suma je %d\n",suma);*/

    /*int suma=1, i;
    for(i=1; i<15; i++){
        suma=suma*i;
    }
    printf("proizvod je %d",suma);*/



    return 0;
}
